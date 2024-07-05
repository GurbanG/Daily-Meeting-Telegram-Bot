from typing import Optional

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.utils.i18n import I18n
from aiogram.utils.i18n.middleware import FSMI18nMiddleware
from apscheduler.jobstores.memory import MemoryJobStore
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from pytz import utc

from . import db, handlers
from .commands import BotCommands
from .constants import jobstore
from .custom_types import ChatId, SendMessage
from .meeting import schedule_meeting
from .settings import Settings
from .state import ChatState


def init_scheduler(settings: Settings) -> AsyncIOScheduler:
    scheduler = AsyncIOScheduler(timezone=utc, jobstores={jobstore: MemoryJobStore()})
    scheduler.start()
    return scheduler


async def restore_scheduled_jobs(
    scheduler: AsyncIOScheduler, send_message: SendMessage
):
    chat_states = await ChatState.find_all().to_list()

    for chat_state in chat_states:
        if chat_state.meeting_time:
            schedule_meeting(
                meeting_time=chat_state.meeting_time,
                chat_id=chat_state.chat_id,
                topic_id=chat_state.topic_id,
                scheduler=scheduler,
                send_message=send_message,
            )


async def on_startup():
    bot_commands = [
        BotCommands()
    ]


async def main(settings: Settings) -> None:
    await db.main(settings=settings)

    dp = Dispatcher()

    i18n = I18n(path="locales", default_locale="en", domain="messages")
    fsmi18n = FSMI18nMiddleware(i18n)
    fsmi18n.setup(router=dp)

    bot = Bot(
        token=settings.bot_token,
        default=DefaultBotProperties(parse_mode=ParseMode.HTML),
    )

    async def send_message(chat_id: ChatId, message: str, message_thread_id: Optional[int] = None):
        return await bot.send_message(chat_id=chat_id, text=message, message_thread_id=message_thread_id)

    scheduler = init_scheduler(settings=settings)
    await restore_scheduled_jobs(scheduler=scheduler, send_message=send_message)

    router = handlers.make_router(scheduler=scheduler, send_message=send_message, bot=bot)

    dp.include_router(router)

    await bot.delete_webhook(drop_pending_updates=True)

    await dp.start_polling(bot)
