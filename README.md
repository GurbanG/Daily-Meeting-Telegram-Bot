# Daily Meeting Telegram Bot

A Telegram bot that helps you conduct [daily](https://www.agilealliance.org/glossary/daily-meeting/) (or at least regular) meetings.

## Motivation

- I have participated in too many projects that delivered less than they could have due to a lack of regular work from myself and my teammates.
- I want a bot to remind me that I actually have to work on workdays.
- I want everyone on my team to know each other's workdays.
- In the morning, I don't care enough to ask my teammates about their progress, plans, and problems, so I want a bot to do that for me.
- When I do care later, I can read through my teammates' messages and help them resolve their problems.

## Bot start message

```console
I can help you conduct daily (or at least regular) meetings.

You can control me by sending these commands:

Global commands
/start - Enable me.
/help - Get a help message.

Team settings commands
/set_meetings_time - Set meetings time.

Personal settings commands
/join - Join meetings.
/skip - Skip meetings.

Chat information commands
/get_chat_state - Get the chat state that I store.
```

## Meeting messages

The bot sends messages at meetings time.

```console
@user, what did you do last working day?
```

```console
@user, what will you do today?
```

```console
@user, what (if anything) is blocking your progress?
```

## Usage

### My bot

Add [@daily_meeting_robot](http://t.me/daily_meeting_robot) to a group or open a chat with this bot and send `/start`.

### Your bot

1. Create a bot via [@BotFather](https://t.me/botfather).

1. Write the environment variables to a `.env` file.

    ```console
    BOT_TOKEN=<bot token received from @BotFather>
    MONGO_HOST=mongodb
    MONGO_PORT=27017
    ```

#### Run via `docker`

```console
chmod +x scripts/up.sh
./scripts/up.sh
```

#### Run via Nix

1. Install Nix - [link](https://github.com/DeterminateSystems/nix-installer#usage).

1. Run the bot.

    ```console
    nix run .#bot
    ```

## Develop

### Requirements

See [Requirements](./docs/requirements.md).

### Nix flake

Run `nix develop` and see available commands and tools.

## I18N

[aiogram docs](https://docs.aiogram.dev/en/latest/utils/i18n.html)

Run:

```sh
chmod +x ./scripts/locales.sh
./scripts/locales.sh
```
