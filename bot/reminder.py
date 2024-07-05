import logging
from datetime import datetime
from typing import Optional

from aiogram import Bot
from aiogram.exceptions import TelegramForbiddenError
from aiogram.utils.i18n import gettext as _
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.interval import IntervalTrigger

from .messages import make_daily_messages
from .constants import day_of_week, jobstore
from .custom_types import ChatId, SendMessage
from .state import load_state, load_user_pm, get_user, ChatState
from textwrap import dedent


async def send_reminder_messages(
        meeting_chat_id: ChatId,
        meeting_topic_id: Optional[int],
        username: str,
        user_chat_id: ChatId,
        send_message: SendMessage,
        bot: Bot
):
    chat = await bot.get_chat(meeting_chat_id)
    chat_state = await load_state(chat_id=meeting_chat_id, topic_id=meeting_topic_id)
    user = await get_user(chat_state=chat_state, username=username)

    have_to_reply = list(user.non_replied_daily_msgs)
    messages = make_daily_messages("")
    reminder_message = "Please reply to these daily meeting questions:"
    chat_type = chat.type

    try:
        for reply in have_to_reply:

            if len(chat_state.meeting_msg_ids) == 3:  # messages to be replied exist
                message_id = chat_state.meeting_msg_ids[reply]

                msg_link = get_message_link(
                    chat_id=meeting_chat_id,
                    message_id=message_id,
                    thread_id=chat_state.topic_id,
                    chat_type=chat_type
                )
                if msg_link:  # supergroup
                    reminder_message += "\n" + msg_link

                else:  # group chanel or private
                    reminder_message = messages[reply]
                    if chat_type == "private":  # message to be replied is in the same chat as user's PM
                        await bot.send_message(
                            chat_id=user_chat_id,
                            text=reminder_message,
                            reply_to_message_id=message_id
                        )
                    else:  # message to be replied is in the group, so you can't use user's PM to reply, use the group
                        await bot.send_message(
                            chat_id=meeting_chat_id,
                            text=reminder_message,
                            reply_to_message_id=message_id
                        )

        if chat_type == "supergroup" and len(chat_state.meeting_msg_ids) == 3:
            await send_message(
                chat_id=user_chat_id,
                message=reminder_message
            )

    except TelegramForbiddenError:
        bot_info = await bot.get_me()
        bot_username = bot_info.username

        if chat_type != "private":
            banned_msg = dedent(
                        _(
                            """
                            {username}, please unblock {bot_username} (it's me) in our private chat
                            so that I can send you reminders about missed daily meeting questions.
                            """
                        ).format(username=username, bot_username=bot_username)
                    )

            await send_message(
                chat_id=meeting_chat_id,
                message=banned_msg
            )


async def update_reminders(
        bot: Bot,
        username: Optional[str],
        scheduler: AsyncIOScheduler,
        send_message: SendMessage,
) -> None:

    chats = await ChatState.find_all().to_list()

    if not username:
        return

    for chat in chats:
        user = chat.users.get(username)
        user_pm = await load_user_pm(username)

        if not (user and user_pm):
            continue

        if chat.meeting_time and user.reminder_period:
            schedule_reminder(
                bot=bot,
                period_minutes=user.reminder_period,
                username=username,
                user_chad_id=user_pm.chat_id,
                meeting_time=chat.meeting_time,
                meeting_chat_id=chat.chat_id,
                meeting_topic_id=chat.topic_id,
                scheduler=scheduler,
                send_message=send_message
            )


def make_job_id(user_chat_id: int, meeting_chat_id: int, meeting_topic_id: Optional[int]):
    if meeting_topic_id:
        return f"{user_chat_id}_reminder_for_{meeting_chat_id}_{meeting_topic_id}"
    else:
        return f"{user_chat_id}_reminder_for_{meeting_chat_id}"


def schedule_reminder(
        bot: Bot,
        period_minutes: int,
        username: str,
        user_chad_id: ChatId,
        meeting_time: datetime,
        meeting_chat_id: ChatId,
        meeting_topic_id: Optional[int],
        scheduler: AsyncIOScheduler,
        send_message: SendMessage,
):
    scheduler.add_job(
        jobstore=jobstore,
        func=send_reminder_messages,
        id=make_job_id(user_chad_id, meeting_chat_id, meeting_topic_id),
        replace_existing=True,
        kwargs={
            "meeting_chat_id": meeting_chat_id,
            "meeting_topic_id": meeting_topic_id,
            "username": username,
            "user_chat_id": user_chad_id,
            "send_message": send_message,
            "bot": bot
        },
        trigger=IntervalTrigger(minutes=period_minutes, start_date=meeting_time),
        # day_of_week=day_of_week, # TODO: make it work only on user's working days
        timezone=meeting_time.tzinfo,
        misfire_grace_time=42,
    )

    logging.info(scheduler.get_job(make_job_id(user_chad_id, meeting_chat_id, meeting_topic_id)))


def get_message_link(chat_id: ChatId, message_id: ChatId, thread_id: Optional[int], chat_type: str):
    match chat_type:
        case "supergroup":
            chat_id_normalized = str(chat_id)[4:]
            if thread_id:
                return f"https://t.me/c/{chat_id_normalized}/{thread_id}/{message_id}"
            else:
                return f"https://t.me/c/{chat_id_normalized}/{message_id}"
        case "private", "group", "channel":
            return None
