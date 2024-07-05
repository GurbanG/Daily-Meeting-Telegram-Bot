# Sprint

## Glossary

- `Policy`, `Process`, `Procedure` - explained [here](https://www.oracle.com/ce-help/playbook/display-content/ar02-policy-process-or-procedure).
- `UPPERCASE` words that have a specified meaning in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174) have that meaning in this document.
- `X`, `Y`, `Z`, `T` are numbers.
  - They correspond to team numbers.
  - They can take values `12`, `34`, `56`.
- {X} means "write here the value of `X`" like in Python f-strings.
- `Team {X}`, `Team {Y}`, `Team {Z}` are different teams.
- `Teams` - all three teams.
- `Sprint {S}` - the current sprint.
- [Responsibility Distribution](./roles-and-responsibilities.md#responsibility-distribution) <a id="def-responsibility-distribution"></a> - a mapping between issue labels and responsible people.
- `Task Management`, `Architecture`, `UI/UX`, etc. - people that have these responsibilities according to the Responsibility distribution.
- `PR` - a [pull request](https://github.com/team-work-tools/team-work-telegram-bot/pulls).
- `Assignee` <a id="def-assignee"></a> - responsible for completing an [issue](https://github.com/team-work-tools/team-work-telegram-bot/issues).
- `Reviewer` <a id="def-reviewer"></a> - responsible for reviewing a PR.
- [Roadmap issue](https://github.com/team-work-tools/team-work-telegram-bot/issues/79) <a id="def-roadmap-issue"></a> - an issue that tracks the work on the project.
- `topic` - a topic in the Telegram group of the project.

## Policies

### Sprint Schedule

#### Sprint Start

- Sprint 1: Thursday
- Otherwise: Monday

#### Sprint End

- Sprint 1: Sunday
- Otherwise: Saturday

### Retrospective

#### Day

- Sprint 1: no retrospective
- Otherwise: Sunday

#### Agenda

- Customer and teams MUST conduct a retrospective on documented policies, procedures, processes.

### Sprint Planning

- Sprint plans MUST be tracked and versioned in a GitHub issue.

### Issues

- There MUST be a GitHub issue for each task that implies interaction with the repository.

### Milestones

- There MUST be separate milestones for each sprint for customer and each team.
- Milestone deadline MUST be the last day of the corresponding sprint.
- Finalized milestones MUST be stored in the repository.

### Git workflow process

- Teams MUST follow the established [Git workflow process](./git-workflow-process.md).

## Process

### Notes

- The [Process](#process) section is a simplified version of the [Procedure](#procedure) section.

### Activities

- Customer suggests scenarios for Sprint {S} for each team in the [Roadmap issue](#def-roadmap-issue).
- Customer and Team {X} negotiate scenarios for:
  - Sprint {S} of Team {X};
  - Future sprints of Team {X};
- Team {X} creates a [milestone](https://github.com/team-work-tools/team-work-telegram-bot/milestones) in the repository.
- Team {X} sets the milestone deadline according to [Milestone policies](#milestones).
- For each scenario name in the Sprint {S}, Team {X} does the following:
  - Create an issue for the Scenario (Scenario issue).
  - Add a link to the Scenario issue as specified in the [Roadmap issue](#def-roadmap-issue) policies.  
  - On the Scenario issue page, create a branch `{scenario_branch}` from the `main` branch via `Development` > `Create a branch`.
  - Textually and visually explain the scenario in that branch.
  - Make a PR from the `{scenario_branch}` to the `main` branch.
    - You'll periodically merge the `{scenario_branch}` to the `main` branch and the `main` branch to the `{scenario_branch}` while you work on the scenario.
  - Write subtasks in a single-level checkbox list in the Scenario issue description.
  - Replace subtasks with links to issues. Either:
    - Find an existing issue for that subtask and replace the subtask with a link to that issue.
    - Convert the subtask to an issue (via the ⦿ button to the right).
  - Assign labels to issues related to the Scenario issue:
    - priority - 1 to 5
    - size - `XS`, `S`, `M`, `L`, `XL`
    - `team {X}`
    - Assignees - based on the [Responsibility distribution](./roles-and-responsibilities.md#responsibilities-distribution).
  - For each issue that is related to the Scenario issue and that has subtasks that aren't links to other issues:
    - Create a branch `{issue_branch}` from the `main` branch via the `Create a branch` button on the issue page.
    - Work on this issue on the `{issue_branch}`.
    - Periodically merge the `{main}` branch into the `{issue_branch}` to synchronize with the overall project progress.
    - Create a PR from the `{issue_branch}` to the `main` branch.
    - Run tests and ensure everything works locally.
    - Set as PR Reviewers [teams](https://github.com/orgs/team-work-tools/teams) that correspond to the issue labels (e.g., [Development](https://github.com/orgs/team-work-tools/teams/development)).
    - Revise the PR after comments.
    - Merge the PR when the PR:
      - is approved;
      - has no conflicts with the `main` branch.
- If a member of Team {X} makes significant contributions to PRs not related to Team {X} Scenario issues, the member can add the `team {X}` label to issues closed by these PRs. Significant contributions:
  - Comments on code sections
  - Code suggestions
  - Commits

## Procedure

### Notes

- `Actor` can be:
  - A person. Example: Customer.
  - A responsibility that corresponds to persons according to the Responsibility Distribution. Examples: Architecture, UI/UX.
  - A team. Examples: Team {X}
- Titles of the following subsections list actors.
- Each title indicates the start of a block of tasks that should be completed by the listed actors.
- `Sprint block of Team {T}` <a id="def-sprint-block-of-team-t"></a> is the Team {T} subsection in the Sprint {S} section in the [Roadmap issue](#def-roadmap-issue).
- `Scenario issue` <a id="def-scenario-issue"> - an issue for a scenario.
- `Scenario PR` <a id="def-scenario-pr"> - a PR for a scenario issue.
- `Subtask issue` <a id="def-subtask-issue"> - an issue that is a subtask of another issue.
- `Scenario subtask issue` <a id="def-scenario-subtask-issue"> - an issue that is a transitive subtask of a Scenario issue.

### Customer

- For each Team {T}:
  - In the [Sprint block of Team {T}](#def-sprint-block-of-team-t), propose scenarios (so far, just names and details).
- Notify Teams in the `Announcements` topic that scenarios were proposed.
  - Include a link to the [Roadmap issue](#def-roadmap-issue) into the notification.

### Team {X}, Customer

- In the Team {X} topic, negotiate and optionally edit scenarios for Sprint {S} for Team {X} in the [Roadmap issue](#def-roadmap-issue).

### Customer

- For each Team {T}, after scenarios have been agreed on, explicitly approve them in the Announcements topic.

### Task Management from Team {X}

- Create a [Milestone](https://github.com/team-work-tools/team-work-telegram-bot/milestones) for Sprint {S}:

  - Name: `Sprint {S} - Team {X}`.

  - Due date: according to [Milestone Policies](#milestones).

- For each scenario with the name `{scenario_name}` in the [Sprint block of Team {X}](#def-sprint-block-of-team-t):

  - Create a [Scenario issue](#def-scenario-issue):

    - Name: `Scenario: {scenario_name}`.
  
  - Add the issue to the previously created milestone.

  - Write the issue description:

    ```text
    ## Description
    
    {scenario_description}
    
    ## Subtasks
    
    {subtasks}
    ```

    - `scenario_description` - a brief description of the scenario plus some necessary details.
    - `subtasks` - a single-level checkbox list of descriptions of subtasks that should be completed to describe the scenario in a `Scenario file`.
      - E.g., "- [ ] choose the format of a scenario model"

  - Assign labels to this issue:

    - `Scenario`

    - `Architecture`

    - `UI/UX`

    - `Project Documentation`

    - Size - `XS`, `S`, `M`, `L`, `XL`

    - `priority: {priority}`, where `priority` can be 1, 2, 3, 4, 5.

    - `team {X}`

  - Add Assignee(s) from Team {X} according to the labels and [Responsibility Distribution](#def-responsibility-distribution).

  - Ping Assignees in the Team {X} topic.

### Assignee (from Team {X}, of a Scenario issue)

- Create a branch `{scenario_branch}` for this issue from the `main` branch.
  - Use the `Development` > `Create a branch` button on the issue page.
- On the `{scenario_branch}`:
  - Copy the [Scenario Template](./scenarios/scenario-template.md) file into a new Scenario file at `docs/configuration/scenarios/scenario-{id}.md`.
    - `id` - left-zero-padded number from 0 to 999.
      - Examples: 000, 132
    - Numbers MUST be unique among files in the `docs/configuration/scenarios` directory.
  - Copy the text from the [Scenario Template](./scenarios/scenario-template.md) into the new Scenario file.
    - Add commits
    - Push to the repository
- Make a PR from the `{scenario_branch}` to the `main` branch.
  - PR description:

    ```text
    - Related to {scenario_issue_link}
    ```

    - `scenario_issue_link` is a link to the Scenario issue.

  - Add the `/team-work-tools/scenario` team to Reviewers.

- Notify Task management (from Team {X}) that the Scenario description is ready for review.

### Customer

- For each ready for review Scenario PR from Team {X}:
  - Comment on the PR.
  - Discuss the PR in the Team {X} topic on Telegram.

### Task Management (from Team {X})

- For each ready for review Scenario PR of Team {X}:
  - Go by the `{scenario_issue_link}` to the Scenario issue.
  - Update `{subtasks}` in the Scenario issue description.
  - Let `CREATE_SUBTASKS` <a id="def-create-subtasks"></a>:
    - For each subtask `{subtask}` in the `{subtasks}` list:
      - If the `{subtask}` seems so big that it requires own subtasks, replace `{subtask}` with a link to a Subtask issue. This issue can be:
        - An existing issue.
        - A new issue created from `{subtask}`:
          - Hover over a `{subtask}`.
          - Click the ⦿ button (`Create an issue`) on the right.
    - For each `{subtask}` in the updated `{subtasks}` list:
      - If the `{subtask}` is a link to a Subtask issue:
        - Open the Subtask issue page.
        - Write the issue description. Format:

          ```text
          [
          ## Description
            
          {description}
          
          ]
          ## Subtasks
          
          {subtasks}
          ```

          - The section in square brackets is optional.
          - `description` formulates the subtask (extends the Subtask issue name).
          - `subtasks` - a single-level checkbox list of descriptions of subtasks or links to Subtask issues that should be completed to complete this Subtask issue.

        - According to [Responsibility Distribution](#def-responsibility-distribution):
          - Assign labels
          - Set [Assignees](#def-assignee)
        - Assign other labels:
          - size - `XS`, `S`, `M`, `L`, `XL`
          - `priority: {priority}`, where `priority` can be 1, 2, 3, 4, 5.
          - `team {X}`

        - [CREATE_SUBTASKS](#def-create-subtasks) for the Subtask issue.
  - [CREATE_SUBTASKS](#def-create-subtasks) starting at the issue at `{scenario_issue_link}`:

### Assignee (from Team {X}, of a Subtask issue)

- Create a branch `{subtask_branch}` for the issue via `Development` > `Create a branch` button.
- Fetch the repo.
- Switch to the new branch.
- Add commits that resolve subtasks given via descriptions (not links to issues).
- Periodically merge the `main` branch from the repository and resolve conflicts.
- Add some more commits to the `{subtask_branch}`.
- Test locally.
- Fix and commit fixes.
- Push the `{subtask_branch}` to the repository.
- Create a PR from the `{subtask_branch}` to `{main}`.
- Set as [Reviewers](#def-reviewer) the [teams](https://github.com/orgs/team-work-tools/teams) whose names correspond to the issue labels.
- Send a link to the PR to the Team {X} topic and ping the Customer.
  - Ping the Customer if the Customer doesn't respond in a reasonable time (e.g., a couple of hours).

### Reviewer of a PR

- Switch to the branch locally.
- Check:
  - The code type checks via `mypy`. Exceptions:
    - Some imports may be red
  - The code is formatted via `black`
  - Messages with English text are:
    - not [f-strings](https://peps.python.org/pep-0498/).
    - `dedent`ed.
    - wrapped in `_`. Exceptions:
      - f-strings without english letters.
  - There are no:
    - `setattr` functions
- Test bot locally.
- Select code blocks in the PR and comment on them.
- Suggest changes.
- If everything is OK, approve the PR.

### Assignee (from Team {X}, of the approved PR)

- Merge the PR.
- If a Reviewer from Team {Y} made significant contribution to the PR:
  - Go to the issue addressed by the PR.
  - Add there the `team {Y}` label.

### Team X, Customer

- Conduct a [Retrospective](#retrospective).
