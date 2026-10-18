---
template_id: AIE-07
title: "Model change note"
doc_type: decision
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Change request"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Model change note (decision page)
Purpose: Record a switch or upgrade from one model to another: what changed, how the
evaluation results moved, and how to roll back.
Audience: The team that owns the system, the person who approves the change, and
whoever is on call when it ships.
Internal or external:
- Internal: the default. Include every evaluation result.
- External: publish a short notice of behavior changes customers might notice.
Before you write, ask the builders:
- Which model and version are being replaced, and by which?
- Why change now: quality, cost, latency, deprecation, or something else?
- Which evaluation was run on both models, and what did it show?
- How is the change rolled back, and how long does it take?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per change.
- Report evaluation results for both models from the same question set and the same
  run date range.
- Report results that got worse beside the ones that got better.
Agent notes:
- Infer from the repo: the old and new model identifiers, the configuration change,
  and the evaluation outputs for both.
- Ask a person: the reason for the change, who approves it, and the rollback plan.
Delete this comment before you publish.
-->

# Model change: [old model] to [new model] for [system name]

This note records the change from [old model and version] to [new model and version]
in [system name], why it was made, and how the evaluation results moved.

## Who this page is for

This page is for the team that owns [system name], the approver, and the on-call
engineer.

## Prerequisites

Read the [evaluation spec](eval-spec.md) for [system name], because this note reports
results against it.

## Summary of the change

The following table summarizes the change:

| Field | Value |
|---|---|
| Old model | [Model and version] |
| New model | [Model and version] |
| Reason | [Quality, cost, latency, deprecation, or other] |
| Approved by | [Name] |
| Shipped | [YYYY-MM-DD] |

## Evaluation results

The following table compares the two models on the same question set, run between
[date] and [date]:

| Measure | Old model | New model | Change |
|---|---|---|---|
| [Measure, with a link to its definition] | [Value] | [Value] | [Difference] |

## Behavior changes readers might notice

- [Change, for example "Answers are shorter."]

## Roll back the change

To roll back, [steps]. Rollback takes about [time].

## Example

The following example shows an evaluation row filled in with fake values for a
fictional hosting platform:

```markdown
| Measure | Old model | New model | Change |
|---|---|---|---|
| Answers that cite the right Kestrel guide | 41 of 50 | 44 of 50 | +3 |
| Median time to answer | 2.1 seconds | 2.8 seconds | +0.7 seconds |
```
