---
template_id: FDE-07
title: "Success criteria"
doc_type: decision
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Statement of work acceptance criteria"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Success criteria (decision page)
Purpose: Record the measurable result both sides agree marks the engagement done, how
it is measured, and who signs off.
Audience: The customer's sponsor, the forward deployed team, and account leadership on
both sides.
Internal or external:
- Shared with the customer: the default. Both sides sign it.
- Internal only: add the commercial terms that depend on it.
Before you write, ask the builders:
- What result would make the customer say the engagement worked?
- How can that result be measured, by whom, and over what period?
- What baseline is it compared with?
- Who signs off, and what happens if a criterion is not met?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per engagement.
- Make every criterion measurable, with its method and period beside it.
- Record the baseline before the build starts.
- Get written sign-off from both sides before work begins.
Agent notes:
- Infer from the discovery brief: the problem and the systems the criteria refer to.
- Ask a person: every criterion, its target, its baseline, and who signs off. Do not
  propose numbers.
Delete this comment before you publish.
-->

# Success criteria: [customer] [engagement name]

This page records the results that mark [engagement name] as done, how each one is
measured, and who signs off. Both sides agreed to it on [YYYY-MM-DD].

## Who this page is for

This page is for [customer]'s sponsor and the forward deployed team.

## Prerequisites

Read the [discovery brief](discovery-brief.md) for [engagement name] first.

## Criteria

The following table lists each criterion:

| Criterion | Target | Baseline | Method | Period | Measured by |
|---|---|---|---|---|---|
| [Result] | [Target] | [Value before the build] | [How it is measured] | [Dates] | [Role] |

## What is out of scope

- [Result the engagement does not promise.]

## If a criterion is not met

[What happens: an extension, a revised target, or a documented gap.]

## Sign-off

The following table records sign-off:

| Side | Name | Role | Date |
|---|---|---|---|
| [Customer] | [Name] | [Role] | [YYYY-MM-DD] |
| [Your company] | [Name] | [Role] | [YYYY-MM-DD] |

## Example

The following example shows a criterion filled in with fake values for a fictional
engagement:

```markdown
| Criterion | Target | Baseline | Method | Period | Measured by |
|---|---|---|---|---|---|
| Support questions answered without an engineer | 60 of 100 | 20 of 100 | Sample of 100 tickets, labeled by the support lead | Four weeks after launch | Kestrel support lead |
```
