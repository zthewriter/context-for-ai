---
template_id: CLS-14
title: "Concept"
doc_type: concept
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "Concept page"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Concept (concept page)
Purpose: Explain one idea: what it is, why it exists, and how it relates to what the
reader already knows.
Audience: Readers who need to understand before they act, and agents that answer
"what is" and "why" questions.
Internal or external:
- External: explain the concept in terms of what the reader can do or see.
- Internal: add the design reasoning and links to decision records.
Before you write, ask the builders:
- What problem does this concept solve?
- What do people most often misunderstand about it?
- Which terms do the team and customers use for it?
Rules:
- Follow the writing style in ../style.md.
- Define the concept in the first sentence, with the term itself in that sentence.
- Use one term for one idea, every time.
- Explain, don't instruct. Link to how-to pages for tasks.
Agent notes:
- Infer from the repo: how the concept appears in code and settings, for the "How
  [product] uses" section.
- Ask a person: the common misunderstandings and the terms customers use.
Delete this comment before you publish.
-->

# About [concept]

[Concept] is [definition, in one sentence]. [Why it matters to the reader.]

## Who this page is for

This page is for [readers] who need to understand [concept] before they [task].

## Prerequisites

You don't need any prior knowledge of [concept] to read this page.

## Why [concept] exists

[The problem [concept] solves, in one or two paragraphs.]

## How [concept] works

[How it works, at the level the reader needs. One diagram, if it helps, with a
description before it.]

## [Concept] compared with [related concept]

The following table compares [concept] with [related concept]:

| | [Concept] | [Related concept] |
|---|---|---|
| [Dimension] | [Value] | [Value] |

## How [product] uses [concept]

[Where the reader meets [concept] in [product], with links to the settings or pages.]

## Example

The following example shows the opening of a filled-in concept page for a fictional
hosting platform:

```markdown
# About environments

An environment in Kestrel is a separate copy of an app with its own URL, settings, and
data. Environments let you test a change before your users see it.
```
