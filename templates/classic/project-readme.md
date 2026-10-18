---
template_id: CLS-01
title: "Project README"
doc_type: overview
template_class: upgraded-classic
personas: [technical-writer, internal-engineer, developer-advocate]
replaces_or_extends: "README"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Project README (overview page)
Purpose: Tell a reader what a project or service is, whether it is for them, and how
to get it running, from the root of the repository.
Audience: Anyone who opens the repository: new contributors, users, evaluators, and
coding agents, which often read the README before any other file.
Internal or external:
- Open source: keep "Install", "Use", "Contribute", and "License". Delete "Owner and
  support" and "Service details".
- Internal: keep "Owner and support" and "Service details". Delete "Contribute" and
  "License" unless the repository accepts changes from other teams.
Before you write, ask the builders:
- What does the project do, in one sentence a newcomer understands?
- Who should use it, and who should use something else?
- What is the shortest path from a fresh clone to a working result?
- Who owns it, and where do people ask for help?
Rules:
- Follow the writing style in ../style.md.
- Save the finished page as README.md at the root of the repository.
- Put the one-sentence description first. Agents and search results often show only
  the first paragraph.
- Link to deeper pages instead of growing the README past one screen per section.
- Test every command on a clean machine.
Agent notes:
- Infer from the repo: the language, install and run commands, environment variable
  names, the license file, and the test command.
- Ask a person: who the project is for, who owns it, the support channel, and which
  alternatives to recommend.
Delete this comment before you publish.
-->

# [Project name]

[Project name] is [what it does, in one sentence a newcomer understands].

## Who this page is for

This page is for [people who use, run, or contribute to project name]. If you need
[a different job], use [alternative, with a link] instead.

## Prerequisites

To run [project name], you need the following:

- [Runtime and version, for example "Node.js 22 or later"]
- [Account or access, with a link to request it]

## Install [project name]

To install [project name], run the following command:

```bash
[install command]
```

## Use [project name]

To [do the main task], run the following command:

```bash
[command that produces a visible result]
```

The output looks like the following:

```text
[real output from running the command]
```

## Configure [project name]

The following table lists the settings [project name] reads:

| Setting | Required | Default | Description |
|---|---|---|---|
| `[SETTING_NAME]` | [Yes or No] | [Default] | [What it changes] |

## Service details

<!-- Internal repositories only. -->

The following table lists where [project name] runs:

| Field | Value |
|---|---|
| Environments | [Environments, with links] |
| Dashboards | [Links] |
| Runbook | [Link to the runbook] |

## Owner and support

<!-- Internal repositories only. -->

[Team name] owns [project name]. Ask questions in [channel], and report incidents
through [process, with a link].

## Contribute to [project name]

To contribute, read [the contributing guide, with a link to `CONTRIBUTING.md`].

## License

[Project name] is released under the [license name, with a link to the `LICENSE` file].

## Example

The following example shows the opening of a filled-in README for a fictional
service:

```markdown
# Kestrel deploy CLI

The Kestrel deploy CLI publishes a web app to Kestrel hosting from your terminal.

## Who this page is for

This page is for developers who deploy apps to Kestrel. If you manage DNS for a
Kestrel account, use the Kestrel console instead.
```
