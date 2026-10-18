---
template_id: HRN-02
title: "Agent skill"
doc_type: how-to
template_class: new
personas: [context-engineer, ai-engineer, developer-advocate]
harness_part: guides
replaces_or_extends: "Standard operating procedure"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Agent skill (task file)
Purpose: Write one repeatable procedure as a SKILL.md an agent loads when the task
matches its description.
Audience: Coding agents, and the people who write and review skills.
Internal or external:
- Internal: name internal tools, environments, and owners.
- External: keep steps to tools any user of the skill has.
Before you write, ask the builders:
- Which task does the skill cover, and how do people ask for it?
- What are the steps, in order, and how do you know each one worked?
- What must the agent never do during this task?
Rules:
- Follow the writing style in ../style.md.
- One procedure per skill. If the steps branch into two goals, write two skills.
- Write the description for the agent that decides whether to load the skill: what
  the skill does, then "Use when" with the phrasings people use.
- Follow the format at https://agentskills.io/specification: the name uses lowercase
  letters, numbers, and hyphens, up to 64 characters, and the description is up to
  1,024 characters.
- Save the file as `<name>/SKILL.md`.
Agent notes:
- Infer from the repo: the commands each step runs and how success shows.
- Ask a person: the trigger phrasings, the boundaries, and the report they want back.
Delete this comment before you publish.
-->

# Agent skill: [procedure name]

This template gives you a `SKILL.md` file for one procedure: [procedure, in one
sentence].

## Who this page is for

This page is for people who turn a procedure they repeat into a skill an agent can
follow.

## Prerequisites

You need to have done the procedure yourself at least once, so you know the steps and
how each one shows success.

## The file

Copy the following block into `[skill-name]/SKILL.md` and replace each placeholder:

```markdown
---
name: [skill-name]
description: [What the skill does.] Use when [the phrasings people use].
---

# [Procedure name]

## Steps

1. **[Step.]** [How to tell it worked.]

## Report format

- [What to report back.]

## Never

- Never [action], because [reason].
```

## Example

The following example shows a skill filled in for a fictional hosting platform's docs
team:

```markdown
---
name: add-a-kestrel-guide
description: Adds a new Kestrel hosting guide and registers it with the docs assistant. Use when someone asks to add, publish, or write a new guide.
---

# Add a Kestrel guide

## Steps

1. **Copy the how-to template into `guides/`.** The file exists.
2. **Run `npm run lint`.** The command exits with 0.
3. **Add the page to `llms.txt`.** The new URL is listed under Guides.

## Never

- Never publish without running the lint, because the assistant indexes what is
  published.
```
