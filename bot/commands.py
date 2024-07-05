from aiogram.utils.i18n import gettext as _
from pydantic import BaseModel

from .language import Language


class BotCommands(BaseModel):
    # global commands
    start: str
    help: str
    stop: str
    cancel: str
    # team settings
    set_up_meetings: str
    set_meetings_time_zone: str
    set_meetings_time: str
    set_meetings_days: str
    # personal settings
    join: str
    skip: str
    set_personal_meetings_days: str
    set_reminder_period: str
    join_today: str
    skip_today: str
    schedule_personal_vacation: str
    unschedule_personal_vacation: str
    # info
    get_chat_state: str


class BotCommandNames(BotCommands):
    pass


bot_command_names = BotCommandNames(
    # global commands
    start="start",
    help="help",
    stop="stop",
    cancel="cancel",
    # team settings
    set_up_meetings="set_up_meetings",
    set_meetings_time_zone="set_meetings_time_zone",
    set_meetings_time="set_meetings_time",
    set_meetings_days="set_meetings_days",
    # personal settings
    join="join",
    skip="skip",
    set_personal_meetings_days="set_personal_meetings_days",
    set_reminder_period="set_reminder_period",
    join_today="join_today",
    skip_today="skip_today",
    schedule_personal_vacation="schedule_personal_vacation",
    unschedule_personal_vacation="unschedule_personal_vacation",
    # info
    get_chat_state="get_chat_state",
)


class BotCommandDescriptions(BotCommands):
    pass


def bot_command_descriptions() -> BotCommandDescriptions:
    return BotCommandDescriptions(
        # global commands
        start=_("Enable me."),
        help=_("Get a help message."),
        stop=_("Disable me."),
        cancel=_("Cancel the current operation with the bot."),
        # team settings
        set_up_meetings=_("Set up regular meetings."),
        # TODO use the time zone
        set_meetings_time_zone=_("Set meetings time zone."),
        set_meetings_time=_("Set meetings time."),
        set_meetings_days=_("Set meetings days."),
        # personal settings
        join=_("Join meetings."),
        skip=_("Skip meetings."),
        set_personal_meetings_days=_("Set the days when you can join meetings."),
        set_reminder_period=_("Set how often you'll be reminded about unanswered questions."),
        join_today=_("Join only today's meeting."),
        skip_today=_("Skip only today's meeting."),
        schedule_personal_vacation=_("Schedule a personal vacation."),
        unschedule_personal_vacation=_("Unschedule the personal vacation."),
        # info settings
        get_chat_state=_("Get the chat state that I store."),
    )
