---
template_id: HRN-05
title: "Memory spec"
doc_type: reference
template_class: new
personas: [context-engineer, ai-engineer]
harness_part: context
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Memory spec (reference page)
Purpose: Record what an agent keeps across sessions, where it is stored, who may edit
it, and when it expires.
Audience: Context engineers and AI engineers who build memory, and reviewers who
approve what it keeps.
Internal or external:
- Internal: include storage locations and access lists.
- External: describe what is remembered about users and how they clear it.
Before you write, ask the builders:
- What does the agent write to memory, and when?
- Where is it stored, and who can read or edit it?
- When does each item expire, and how is it deleted?
Rules:
- Follow the writing style in ../style.md.
- Keep memory separate from retrieval: memory is what the agent learned in earlier
  sessions, retrieval is what the sources say now. When they disagree, state which
  wins.
- Give every kind of memory an expiry, even if it is "until the user deletes it".
Agent notes:
- Infer from the code: memory stores, write paths, and expiry jobs.
- Ask a person: what memory may hold, who may edit it, and which wins when memory and
  sources disagree.
Delete this comment before you publish.
-->

# Memory for [agent name]

This page lists what [agent name] remembers across sessions, where it is kept, who
may change it, and when it expires.

## Who this page is for

This page is for the people who build, review, and approve [agent name]'s memory.

## Prerequisites

Read the [context source map](context-source-map.md) first.

## What is remembered

The following table lists each kind of memory:

| Memory | Written when | Stored in | Who may edit | Expires |
|---|---|---|---|---|
| [Kind of memory] | [Event] | [Store] | [Role] | [Period or event] |

## When memory and sources disagree

[Which wins, and what the agent tells the user.]

## Example

The following example shows the memory table filled in for a fictional hosting
platform's docs assistant:

```markdown
| Memory | Written when | Stored in | Who may edit | Expires |
|---|---|---|---|---|
| User's preferred language | The user states it | User profile | The user | When the user deletes it |
| Open support thread | A session ends unresolved | Session store | Support team | 14 days |
```
