---
template_id: AIE-05
title: "Quality, latency, and cost card"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Service level objectives"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Quality, latency, and cost card (reference page)
Purpose: Record the quality, speed, and cost a system promised, and who may trade one for another.
Audience: The engineer who tunes the system, and the person who approves a trade-off.
Internal or external:
- Internal: include the dashboard and the dollar or token budget.
- External: publish the customer-visible target only, such as a response-time goal. Omit internal cost.
Before you write, ask the builders:
- Which number is the promise: quality, latency, or cost?
- Where is it measured, and over what window?
- Who is allowed to spend more latency or money to raise quality?
- What happens when the system is outside the bound?
Rules:
- Follow the writing style in ../../templates/style.md.
- One card per system. Do not average two products together.
- Write the unit next to every number.
- If a bound is not set, write "No bound is set" rather than inventing one.
Agent notes:
- Infer from the evaluation results, traces, and billing exports: measured quality,
  latency percentiles, and cost per request, each with its date.
- Ask a person: the targets, who set them, and which trade-off wins when two of them
  conflict.
Delete this comment before you publish.
-->

# Quality, latency, and cost for [system name]

This page records the quality, latency, and cost [system name] is expected to
hold, where those numbers are measured, and who may trade one for another.

## Who this page is for

This page is for the person who tunes [system name] and the person who approves
a change that moves one of the three numbers.

## Prerequisites

Before you begin, make sure you have the following:

- Access to the dashboard at [location]
- The evaluation spec, if quality is defined there

## The bounds

The following table is the current promise. A cell that says "No bound is set"
means the team has not agreed a limit. Do not fill it with a guess.

| Bound | Target | Measured at | Window |
|---|---|---|---|
| Quality | [target in plain language, or "No bound is set"] | [dashboard or eval run] | [for example, the last 7 days] |
| Latency | [target, with a unit] | [where] | [window] |
| Cost | [target, with a unit, or "No bound is set"] | [where] | [window] |

Last confirmed: [date], by [name or role].

## Who may trade one bound for another

[Role] may raise latency up to [limit] to meet the quality target.
[Role] may raise cost up to [limit] to meet the quality target.
No one may lower the quality target without [approval step].

A trade is written down at [place] before the change ships. The note names the
old number, the new number, and the reason.

## When the system is outside a bound

When a bound is missed for [how long], [who] does the following:

1. Confirm the measurement is for [system name] and the window in the table.
2. Stop changes that are not required to restore the bound.
3. Tell [audience] using [channel], with the missed number and the window.

Restore is done when the next full window is inside the bound. Update the date
on this page if the promise itself changed.
