---
template_id: HRN-11
title: "Session handoff note"
doc_type: operational
template_class: new
personas: [context-engineer, internal-engineer, ai-engineer]
harness_part: guardrails
replaces_or_extends: "Shift handover note"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Session handoff note (operational page)
Purpose: Record what one agent session leaves for the next: the state, open
questions, and what not to redo.
Audience: The next agent session, and the person who resumes the work.
Internal or external:
- Internal: usually internal. Link internal tickets and branches.
- External: not published.
Before you write, ask the builders:
- Where do handoff notes live, and does the next session read them automatically?
- What did past sessions redo or undo because nothing was written down?
Rules:
- Follow the writing style in ../style.md.
- Write state as facts the next session can check: branch, commit, command, result.
- List what was tried and failed, with the evidence, so the next session does not try
  it again.
- Never put secrets or tokens in the note.
Agent notes:
- Infer from the session: the branch, commits, commands run, and their results.
- Ask a person: decisions still open and anything the next session must not do.
Delete this comment before you publish.
-->

# Session handoff: [task name], [YYYY-MM-DD]

This note records where [task name] stands at the end of this session, so the next
session can continue without redoing work.

## Who this page is for

This page is for the next agent session and the person who resumes [task name].

## Prerequisites

You need access to [repository or system] and the branch named below.

## State

The following facts describe the current state:

- **Branch and commit:** `[branch]` at `[commit]`
- **Done:** [What is finished, with evidence.]
- **In progress:** [What is half done, and where it stopped.]

## Open questions

The following questions need an answer before work continues:

- [Question], for [person or role].

## Do not redo

The following were tried and failed:

- [What was tried]: [evidence that it failed].

## Example

The following example shows the state filled in for a fictional hosting platform's
docs work:

```markdown
- **Branch and commit:** `guides/deploy-rewrite` at `4f2c9e1`
- **Done:** steps 1 to 3 rewritten. `npm run lint` exits with 0.
- **In progress:** step 4. The screenshot is not updated yet.
```
