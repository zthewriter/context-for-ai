---
template_id: AIE-06
title: "Prompt and instruction spec"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer, context-engineer]
replaces_or_extends: "Configuration reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Prompt and instruction spec (reference page)
Purpose: Treat a system prompt or set of instructions as a versioned contract: what it
is for, what it receives, what it must and must not do, who owns it, and which
evaluations prove it works.
Audience: The engineers and writers who change the prompt, and the person who approves
a change.
Internal or external:
- Internal: the default. Include the full prompt text and the evaluation results.
- External: publish only the behavior the prompt guarantees, not its text.
Before you write, ask the builders:
- Where does the prompt live, and how is it versioned and deployed?
- Which inputs are inserted into it at run time, and from where?
- Which behaviors must it always produce, and which must it never produce?
- Which evaluation runs when it changes?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per prompt.
- Record the version and date of every change in the change log section. A prompt
  change changes behavior as much as a code change.
- Link each constraint to the evaluation question that tests it.
Agent notes:
- Infer from the repo: the prompt file, its version history, the variables inserted
  at run time, and the evaluation script that references it.
- Ask a person: the purpose, the owner, the constraints that must never be broken,
  and who approves a change.
Delete this comment before you publish.
-->

# Prompt spec for [prompt name]

This page defines [prompt name], the instructions [agent or feature name] follows. It
states what the prompt is for, what it receives, what it must and must not do, and
how a change is tested.

## Who this page is for

This page is for the people who change [prompt name] and the person who approves a
change.

## Prerequisites

Before you change [prompt name], make sure you have the following:

- Access to the prompt file at [location]
- Access to the [evaluation spec](eval-spec.md) for [agent or feature name]

## Purpose of [prompt name]

[Prompt name] makes [agent or feature name] [behavior, in one sentence].

## Current version of [prompt name]

The following table records the current version:

| Field | Value |
|---|---|
| Version | [Version] |
| Deployed | [YYYY-MM-DD] |
| Owner | [Name or team] |
| Location | [Path or link] |

## Inputs to [prompt name]

The following table lists the values inserted into [prompt name] at run time:

| Variable | Source | Example |
|---|---|---|
| `[variable]` | [Where the value comes from] | [Fake example value] |

## Constraints on [prompt name]

The following table lists what [prompt name] must and must not do, and the evaluation
question that tests each constraint:

| Constraint | Must or must not | Tested by |
|---|---|---|
| [Behavior] | [Must or must not] | [Question ID in the evaluation spec] |

## Change log for [prompt name]

The following table lists changes, newest first:

| Version | Date | Change | Evaluation result |
|---|---|---|---|
| [Version] | [YYYY-MM-DD] | [What changed and why] | [Result, with a link to the run] |

## Example

The following example shows a constraint row filled in for a fictional hosting
platform's docs assistant:

```markdown
| Constraint | Must or must not | Tested by |
|---|---|---|
| Cite the Kestrel guide each answer came from | Must | Q-014, Q-022 |
| Give pricing that is not in the indexed pages | Must not | Q-031 |
```
