# Roles and Responsibilities

This document describes [roles](#roles), how [responsibilities](#responsibilities) should be distributed, and what's the current [responsibility distribution](#responsibility-distribution) in our project.

## Roles

### Team 12

Leader: [@scruffyscarf](https://github.com/scruffyscarf)

Members: 
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@polina193535](https://github.com/polina193535)
- [@ElinaNotElina](https://github.com/ElinaNotElina)
- [@GurbanG](https://github.com/GurbanG)
- [@Guzinba](https://github.com/Guzinba)

### Team 34

Leader: [@belyakova-anna](https://github.com/belyakova-anna)

Members:

- [@belyakova-anna](https://github.com/belyakova-anna)
- [@Dayanaoak](https://github.com/Dayanaoak)
- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@ghshark63](https://github.com/ghshark63)

### Team 56

Leader: ...

Members: ...

## Responsibilities

### Overview

Responsibilities are areas of the project that should be worked on.
Each area has an issue label starting with a capital letter (see all [labels](https://github.com/team-work-tools/team-work-telegram-bot/labels)).

### How to

#### Distribute responsibilities initially

1. Start a team meeting.
1. Discuss your backlog.
1. Discuss responsibilities to cover your backlog.
1. Update the [Responsibility Distribution](#responsibility-distribution) section:
    1. Create missing subsections.
    1. Update/remove outdated subsections.
    1. Update [Task activity](#task-activity) subsections.
1. Fill `Responsible People` sections.
1. Commit and make a Pull Request.
1. Ask people responsible for [Team Management](#team-management) to review and merge your pull request.

#### Update your responsibilities

1. Choose new responsibilities you'd like to take.
1. Choose old responsibilities you'd like to drop.
1. Check whether there are (understaffed) tasks for your new responsibility.
1. Check whether there are (understaffed without you) tasks for your old responsibility.
    1. If yes, consider not dropping your old responsibilities.
1. Discuss with your leader whether it's safe to change your responsibilities from the point of view of your team and the project.
1. Edit your responsibilities in this file and make a pull request.
1. Ask people responsible for [Team Management](#team-management) to review and merge your pull request.

#### Read the [Responsibility Distribution](#responsibility-distribution) section

- A label name with a hyperlink to the corresponding label like [Architecture](https://github.com/team-work-tools/team-work-telegram-bot/labels/Architecture) introduces a label.
  - <a id="task-activity"></a> The `Task activity` section provides hints on when an issue should be assigned this label.
  - <a id="responsible-people"></a> The `Responsible people` section lists GitHub usernames with hyperlinks to GitHub profiles of people responsible for either:
    - Closing issues with this label.
    - Reviewing PRs for issues with this label.

## Responsibility Distribution

#### [Architecture](https://github.com/team-work-tools/team-work-telegram-bot/labels/Architecture)

##### Task activity

- <a id="asrs"></a> Compose a Utility Tree with Architecturally Significant Requirement Scenarios (ASRS) (see Table 19.1 in [^soap])
- Model interaction between project components
- Write bot scenarios
- Choose frameworks

##### Responsible people

- [@deemp](https://github.com/deemp/)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@Dayanaoak](https://github.com/Dayanaoak)
- [@polina193535](https://github.com/polina193535)
- [@ElinaNotElina](https://github.com/ElinaNotElina)

#### [Quality Assurance](https://github.com/team-work-tools/team-work-telegram-bot/labels/Quality%20Assurance)

##### Task activity

- Design and/or implement tests
  - for [ASRS](#asrs)
  - for the bot
  - for the Mini App

##### Responsible people

- [@deemp](https://github.com/deemp/)
- [@ghshark63](https://github.com/ghshark63)
- [@Guzinba](https://github.com/Guzinba)

#### [Requirements](https://github.com/team-work-tools/team-work-telegram-bot/labels/Requirements)

##### Task activity

- Define the requirements format.
- Document existing customer requirements.
- Analyze requirements:
  - Connect requirements.
  - Identify missing, irrelevant requirements.
- Clarify requirements with the customer.

##### Responsible people

- [@deemp](https://github.com/deemp/)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@scruffyscarf](https://github.com/scruffyscarf)
  
#### [Team Management](https://github.com/team-work-tools/team-work-telegram-bot/labels/Team%20Management)

##### Task activity

- Document and set up policies, processes, and procedures ([link](./policies-processes-procedures.md)).
- Organize team meetings

##### Responsible people

- [@deemp](https://github.com/deemp/)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@ElinaNotElina](https://github.com/ElinaNotElina)

#### [Bot](https://github.com/team-work-tools/team-work-telegram-bot/labels/Bot)

##### Task activity

- Handle the bot commands
- Support [Internationalization](#internationalization)
- Interact with the database

##### Responsible people

- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@polina193535](https://github.com/polina193535)
- [@ElinaNotElina](https://github.com/ElinaNotElina)
- [@GurbanG](https://github.com/GurbanG)
- [@Guzinba](https://github.com/Guzinba)

#### [Database Administration](https://github.com/team-work-tools/team-work-telegram-bot/labels/Database%20Administration)

##### Task activity

- Design the database
- Write functions to interact with the database

##### Responsible people

- [@ghshark63](https://github.com/ghshark63)
- [@polina193535](https://github.com/polina193535)
- [@Guzinba](https://github.com/Guzinba)

#### [Development](https://github.com/team-work-tools/team-work-telegram-bot/labels/Development)

##### Task activity

- Develop bot (Python)
- Develop MiniApp
- Write automated tests

##### Responsible people

- [@ghshark63](https://github.com/ghshark63)
- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@polina193535](https://github.com/polina193535)
- [@ElinaNotElina](https://github.com/ElinaNotElina)
- [@GurbanG](https://github.com/GurbanG)
- [@Guzinba](https://github.com/Guzinba)

#### [DevOps](https://github.com/team-work-tools/team-work-telegram-bot/labels/DevOps)

##### Task activity

- Do CI/CD with GitHub Actions
- Monitor and log applications
- Manage secrets
- Work on the documentation website:
  - Set up:
    - Automatic builds
    - Automatic deployment

##### Responsible people

- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@GurbanG](https://github.com/GurbanG)

#### [Internationalization](https://github.com/team-work-tools/team-work-telegram-bot/labels/Internationalization)

##### Task activity

- Translate messages to other languages

##### Responsible people

- [@belyakova-anna](https://github.com/belyakova-anna)
- [@ElinaNotElina](https://github.com/ElinaNotElina)

#### [LLMs](https://github.com/team-work-tools/team-work-telegram-bot/labels/LLMs)

##### Task activity

- Process user messages via LLMs and other ML techniques:
  - Extract important info from user messages:
    - Links to issues or identifiers of issues
    - Assess mood
- Implement summary generation:
  - How do person
    - progress reports match with past plans
    - plans match with progress over a week
- Implement feedback system:
  - For improving team
    - Progress
      - Recommend areas to work on
    - Mood
      - Generate
        - Compliments
        - Salutations

##### Responsible people

- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@polina193535](https://github.com/polina193535)


#### [Mini App](https://github.com/team-work-tools/team-work-telegram-bot/labels/Mini%20App), [Backend](https://github.com/team-work-tools/team-work-telegram-bot/labels/Backend)

##### Task activity

- Work on the Mini App backend
- Integrate with the Mini App frontend
- Integrate with the Bot
- Integrate with Telegram API

##### Responsible people

- [@ghshark63](https://github.com/ghshark63)
- [@belyakova-anna](https://github.com/belyakova-anna)

#### [Mini App](https://github.com/team-work-tools/team-work-telegram-bot/labels/Mini%20App), [Frontend](https://github.com/team-work-tools/team-work-telegram-bot/labels/Frontend)

##### Task activity

- Work on the Mini App frontend
- Integrate with the Mini App backend
- Integrate with the Bot
- Integrate with Telegram API

##### Responsible people

- [@ghshark63](https://github.com/ghshark63)
- [@belyakova-anna](https://github.com/belyakova-anna)

#### [Nix](https://github.com/team-work-tools/team-work-telegram-bot/labels/Nix)

##### Task activity

- Write Nix script for testing the bot
- Write Nix script for generating documentation

##### Responsible people

- [@ghshark63](https://github.com/ghshark63)

#### [Project Documentation](https://github.com/team-work-tools/team-work-telegram-bot/labels/Project%20Documentation)

##### Task activity

- Update project documentation:
  - Internal:
    - In Russian
    - In a Google Doc
    - Based on Telegram messages
  - External:
    - In English
    - In the project repository:
      - Files
      - Issues
- Check
  - Links are valid
  - External documentation is written in the format acceptable by mdBook.
  - External documentation is rendered correctly.

##### Responsible people

- [@Dayanaoak](https://github.com/Dayanaoak)
- [@GurbanG](https://github.com/GurbanG)

#### [Research](https://github.com/team-work-tools/team-work-telegram-bot/labels/Research)

##### Task activity

- Study the goals and objectives of the bot
- Identify the target audience
- Analyze alternative products
- Suggest functional ideas

##### Responsible people

- [@Dayanaoak](https://github.com/Dayanaoak)
- [@polina193535](https://github.com/polina193535)
  

#### [Security](https://github.com/team-work-tools/team-work-telegram-bot/labels/Security)

##### Task activity

- Use a password and a user name in the database
- Use NixOS
- Use sops
- Reproduce this or a similar attack
- Add a script to test the found attack automatically

##### Responsible people

- [@examplefirstaccount](https://github.com/examplefirstaccount)
- [@Fullerite](https://github.com/Fullerite)
- [@scruffyscarf](https://github.com/scruffyscarf)
- [@Guzinba](https://github.com/Guzinba)

#### [Task Management](https://github.com/team-work-tools/team-work-telegram-bot/labels/Task%20Management)

##### Task activity

- Maintain a backlog
- Assign labels to issues
- Assign people to tasks

##### Responsible people

- [@deemp](https://github.com/deemp/)
- [@belyakova-anna](https://github.com/belyakova-anna)
- [@polina193535](https://github.com/polina193535)


#### [UI/UX](https://github.com/team-work-tools/team-work-telegram-bot/labels/UI%2FUX)

##### Task activity

- Make prototypes in Figma
- Make bot scenarios convenient
- Test user experience
- Analyze user experience

##### Responsible people

- [@Dayanaoak](https://github.com/Dayanaoak)
- [@ElinaNotElina](https://github.com/ElinaNotElina)

[^soap]: [Software Architecture in Practice, 4th ed](https://libstc.cc/#/stc/nid:dy6kmolzlnucrcnq9ud92ev92)
