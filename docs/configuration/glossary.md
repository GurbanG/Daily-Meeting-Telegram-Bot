# Glossary

## Variables

- Words in curly brackets are variables. Example: {variable}.
- Variables can be highlighted as inline code.
  - Format:

    ~~~md
    `{variable}`
    ~~~

  - Example: `{variable}`.
- A variable in curly brackets is replaced with its value.
  
  - Example:
    - The value of {variable} is 4.
    - Then,

      ~~~md
      - {{variable}} equals 42.
      - `{{variable}}` equals `42`.
      - ``{{variable}}`` equals ``42``.
      ~~~

- The `{X}`, `{Y}`, `{Z}` variables are numbers that:
  - correspond to team numbers;
  - can take values `12`, `34`, `56`;
  - are pairwise different.

- The `{S}` variable is a number that denotes the index of the current sprint.
  
  Sprint dates are given [here](https://github.com/team-work-tools/team-work-telegram-bot/issues/79).

## Other terms

- `Customer` - The customer in the project.
- `Team` - A team working on this project.
- `Teams` - All teams that work on this project.
- `Bot` - An instance of the bot developed in this repository.
- `User` - A user of the Bot.
- `Group` - A group where:
  - It's not possible to get links to messages.
- `Supergroup` - A group where:
  - It's possible to get links to messages.
  - New members see the message history.
- `Topic` - A chat within a Supergroup.
- `Forum` - A Supergroup with Topics enabled.
- `Private chat` - A private chat (not a group) of a User and a Bot.
- `UPPERCASE` words that have a specified meaning in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174) have that meaning in this document or a document that references this document.
- `Policy`, `Process`, `Procedure` are explained [here](https://www.oracle.com/ce-help/playbook/display-content/ar02-policy-process-or-procedure).
- [Responsibility](./roles-and-responsibilities.md#def-responsibility) <a id="def-responsibility"></a>
- [Responsibility labels](./roles-and-responsibilities.md#def-responsibility-label) <a id="def-responsibility-labels"></a>
- [Responsibility Distribution](./roles-and-responsibilities.md#responsibility-distribution) <a id="def-responsibility-distribution"></a>
- `Task Management`, `Architecture`, `UI/UX`, etc. - People that have these [Responsibilities](#def-responsibility) according to the [Responsibility distribution](#def-responsibility-distribution).
- `PR` - A [pull request](https://github.com/team-work-tools/team-work-telegram-bot/pulls).
- `Assignee` <a id="def-assignee"></a> - A person who is responsible for completing an [issue](https://github.com/team-work-tools/team-work-telegram-bot/issues).
- `Reviewer` <a id="def-reviewer"></a> - A person who is responsible for reviewing a PR.
- [Roadmap issue](https://github.com/team-work-tools/team-work-telegram-bot/issues/79) <a id="def-roadmap-issue"></a> - An issue that stores the project roadmap.
