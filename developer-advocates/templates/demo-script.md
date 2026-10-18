---
template_id: DVA-02
title: "Demo script"
doc_type: operational
template_class: new
personas: [developer-advocate]
replaces_or_extends: "Talk outline"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Demo script (operational page)
Purpose: Script a live product demo step by step, with what to say, what to show, and
what to do when a step fails.
Audience: The person giving the demo, and anyone who gives it after them.
Internal or external:
- Internal: include accounts, environments, and reset steps.
- External: publish a version without account details for viewers to follow.
Before you write, ask the builders:
- Which result should the audience leave believing they can get?
- Which steps fail most often live, and why?
- How do you reset the demo environment?
Rules:
- Follow the writing style in ../../templates/style.md.
- One row per step: what you do, what the audience sees, and what you say.
- Every step that calls a network or a model has a fallback, such as a recording or a
  saved result.
- Use fake accounts and values only.
Agent notes:
- Infer from the sample repository: the commands and the expected output for each
  step.
- Ask a person: the audience, the message, and the fallbacks.
Delete this comment before you publish.
-->

# Demo script: [demo name]

This script walks through [demo name] in [number] minutes, for [audience].

## Who this page is for

This page is for anyone who gives the [demo name] demo.

## Prerequisites

You need the following before you start:

- [Environment], reset with `[command]`
- [Fallback recording or saved result], open in a tab

## Steps

The following table lists each step of the demo:

| Step | You do | The audience sees | You say | If it fails |
|---|---|---|---|---|
| 1 | [Action] | [Result] | [Line] | [Fallback] |

## Reset after the demo

Run `[command]` to restore the environment.

## Example

The following example shows one step filled in for a fictional hosting platform:

```markdown
| Step | You do | The audience sees | You say | If it fails |
|---|---|---|---|---|
| 3 | Ask the assistant "How do I roll back a deploy?" | An answer citing the rollback guide | "Every answer links to the page it came from." | Show the saved answer in tab 2 |
```
