---
template_id: HRN-09
title: "Definition of done"
doc_type: operational
template_class: new
personas: [context-engineer, internal-engineer, ai-engineer]
harness_part: tool-orchestration
replaces_or_extends: "Definition of done"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Definition of done (operational page)
Purpose: List the checks an agent's work must pass before it counts as done, with the
command or evidence for each.
Audience: Coding agents, and the people who review their work.
Internal or external:
- Internal: include internal checks and environments.
- External (open source): list checks any contributor can run.
Before you write, ask the builders:
- Which checks does review or CI require?
- Which mistakes did agents make that a check would have caught?
- What evidence should an agent show for each check?
Rules:
- Follow the writing style in ../style.md.
- Every check names a command or evidence. "Tested" is not a check; "`npm test`
  exits with 0" is.
- Tell the agent what to do when a check fails: fix the cause, never skip the check.
Agent notes:
- Infer from the repo: CI steps, test and lint commands, and the pull request
  template.
- Ask a person: checks that are not automated and the evidence reviewers expect.
Delete this comment before you publish.
-->

# Definition of done for [repository or agent name]

This page lists the checks work in [repository or agent name] must pass before it
counts as done.

## Who this page is for

This page is for coding agents working in [repository or agent name] and the people
who review their work.

## Prerequisites

Read the repository's [AGENTS.md](agents-md.md) first.

## Checks

The following table lists each check and its evidence:

| Check | Command or evidence | Required for |
|---|---|---|
| [Check] | `[command]` exits with 0, or [evidence] | [Every change, or kind of change] |

## When a check fails

Fix the cause and run the check again. Never delete, skip, or weaken a check to make
it pass. If you cannot fix it, stop and report [what to report].

## Example

The following example shows the checks filled in for a fictional hosting platform's
docs repository:

```markdown
| Check | Command or evidence | Required for |
|---|---|---|
| Lint passes | `npm run lint` exits with 0 | Every change |
| Links resolve | `npm run links` exits with 0 | Every change |
| Assistant still cites the page | The page's test question cites it | Page edits |
```
