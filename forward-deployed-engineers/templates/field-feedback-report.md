---
template_id: FDE-11
title: "Field feedback report"
doc_type: reference
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Feature request"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Field feedback report (reference page)
Purpose: Send what broke or was missing in the field back to the product team, with
enough evidence that they can act on it.
Audience: Product managers, engineers, and writers on the product team.
Internal or external:
- Internal: the default. Never paste customer data or confidential details.
- External: not published.
Before you write, ask the builders:
- What broke, was missing, or needed a workaround?
- How often did it come up, and at how many customers?
- What did the team do instead, and what did it cost?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per engagement or per reporting period.
- Give each item its own section with evidence and the workaround, so each one can
  be triaged alone.
- Describe customers by type, not by name, unless the account team approves.
Agent notes:
- Infer from the engagement repo: workarounds in the code, patched dependencies, and
  issues filed against the product.
- Ask a person: the impact on the customer, how often it came up, and what the team
  recommends.
Delete this comment before you publish.
-->

# Field feedback: [engagement name or period]

This report lists what broke, was missing, or needed a workaround during [engagement
name or period], so the product team can decide what to fix.

## Who this page is for

This page is for the product team that owns [product].

## Prerequisites

You don't need anything to read this page.

## Summary of feedback

The following table lists each item:

| Item | Type | Customers affected | Recommended action |
|---|---|---|---|
| [Item] | [Bug, gap, or docs] | [Number and type] | [Action] |

## [Item]

- **What happened:** [Description.]
- **Evidence:** [Logs, issue links, or measurements, without customer data.]
- **Workaround:** [What the team did instead, and what it cost.]
- **Recommended action:** [Fix, document, or decide not to fix.]

## Example

The following example shows one item filled in for an engagement with Kestrel, a fictional hosting platform:

```markdown
## Retired guides stay in the index

- **What happened:** the docs assistant cited a retired deploy guide.
- **Evidence:** three incident reviews in four weeks.
- **Workaround:** a weekly script removes retired guides from the index.
- **Recommended action:** remove a guide from the index when it is retired.
```
