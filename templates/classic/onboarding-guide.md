---
template_id: CLS-20
title: "Onboarding guide"
doc_type: tutorial
template_class: upgraded-classic
personas: [internal-engineer, technical-writer]
replaces_or_extends: "Onboarding guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Onboarding guide (tutorial page)
Purpose: Give a new engineer a structured first week on a codebase: access, setup, a
first change, and who to ask.
Audience: Engineers new to the team or codebase, and the coding agents they work with.
Internal or external:
- Internal: the default.
- External: for open source projects, turn this into a first-contribution guide.
Before you write, ask the builders:
- Which access does a new engineer need, and how long does each request take?
- What is a good first change that touches the main parts of the codebase?
- Which parts of the codebase surprise new engineers most?
- Who should a new engineer ask about each area?
Rules:
- Follow the writing style in ../style.md.
- Organize by day, and end each day with something the engineer can check.
- Link to the README, architecture overview, and runbooks instead of repeating them.
- Ask the most recent new engineer to review this page.
Agent notes:
- Infer from the repo: setup commands, the test command, the main folders, and the
  contribution process.
- Ask a person: access requests, the first change, the surprises, and who owns each
  area.
Delete this comment before you publish.
-->

# Onboarding to [codebase or team]

This guide plans your first week on [codebase]. By the end, you have shipped a small
change and know who to ask about each part.

## Who this page is for

This page is for engineers who have just joined [team] or started working on
[codebase].

## Prerequisites

You need a company account and a laptop set up by [IT team or process].

## Day 1: Get access

Request the following access on your first morning, because some requests take days:

| Access | How to request it | Typical wait |
|---|---|---|
| [Repository] | [Process] | [Time] |
| [Environment] | [Process] | [Time] |

## Day 2: Run the code locally

Follow the [README, with a link] to run [codebase] locally. You are done when [visible
check].

## Day 3: Read the architecture

Read the [architecture overview](architecture-overview.md) and the five most recent
[decision records](adr.md).

## Day 4 and 5: Ship a first change

Pick a change from [label or list]. A good first change [touches which parts]. Open a
pull request and ask [role] to review it.

## Things that surprise new engineers

- **[Surprise]:** [Explanation, with a link.]

## Who to ask

The following table lists who to ask about each area:

| Area | Ask | Channel |
|---|---|---|
| [Area] | [Person or team] | [Channel] |

## Example

The following example shows a surprise entry filled in for a fictional hosting
platform:

```markdown
- **Staging shares the production build queue:** a large build in staging can slow
  production builds. Check the build queue dashboard before you start a load test.
```
