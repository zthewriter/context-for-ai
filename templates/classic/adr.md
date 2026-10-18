---
template_id: CLS-18
title: "Architecture decision record"
doc_type: decision
template_class: upgraded-classic
personas: [internal-engineer, ai-engineer, technical-writer]
replaces_or_extends: "Architecture decision record"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Architecture decision record (decision page)
Purpose: Record one significant decision: the context, the decision, the options
rejected and why, and the consequences.
Audience: Current and future engineers, and coding agents that would otherwise
propose a rejected option again.
Internal or external:
- Internal: the default.
- External: publish only decisions customers depend on, without internal names.
Before you write, ask the builders:
- What problem forced a decision, and what constraints applied?
- Which options were considered, and what evidence ruled each one out?
- What becomes easier and harder because of the decision?
Rules:
- Follow the writing style in ../style.md.
- Copy this page once per decision, and number them in order.
- Record rejected options with their evidence. A rejected option leaves no trace in
  the code, so this record is the only thing that stops it being proposed again.
- Never edit an accepted decision. Write a new record that supersedes it.
Agent notes:
- Infer from the repo: the code and configuration the decision affects, and the date
  it was merged.
- Ask a person: the context, the options considered, the evidence, and who decided.
Delete this comment before you publish.
-->

# ADR [number]: [Decision, as a short statement]

This record describes the decision to [decision], made on [YYYY-MM-DD].

## Who this page is for

This page is for engineers who work on [system or area], and anyone proposing to
change how [area] works.

## Prerequisites

Read the [architecture overview](architecture-overview.md) for the names used in this
record.

## Status

[Proposed, accepted, deprecated, or superseded by ADR [number], with a link.]

## Context

[The problem, the constraints, and the forces at play. What made a decision
necessary now.]

## Decision

[What was decided, in one or two sentences.]

## Options considered

The following table lists the options and why each was accepted or rejected:

| Option | Outcome | Evidence |
|---|---|---|
| [Option] | [Accepted or rejected] | [What was measured or observed] |

## Consequences

- **Easier:** [What the decision makes easier.]
- **Harder:** [What it makes harder, and what was accepted as a cost.]
- **Follow-up:** [Work the decision creates.]

## Example

The following example shows the options table filled in for a fictional hosting
platform:

```markdown
| Option | Outcome | Evidence |
|---|---|---|
| Build images in the request | Rejected | Builds over 60 seconds timed out in a load test |
| Queue builds for a worker | Accepted | All test builds finished, at the cost of a status page |
```
