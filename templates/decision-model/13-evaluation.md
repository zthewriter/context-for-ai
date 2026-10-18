---
template_id: DEC-13
title: "Evaluation"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Test plan"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Evaluation (concept page)
Purpose: Report how accurate the decisions are and whether the confidence can be
trusted, with the method beside every number.
Audience: Evaluators, buyers, and leadership.
Internal or external:
- External: publish only results your organization has approved for release, each
  with its method.
- Internal: add every run, the dataset location, the script that produced each
  number, and results that got worse.
Measure two things:
- Accuracy: is the chosen option right?
- Calibration: when the model is 90% sure, is it right about 90% of the time?
Before you write, ask the builders:
- How many labeled examples are there, and who labeled them?
- Do the examples include deliberately ambiguous items?
- Which model version and question version were tested?
Rules:
- Follow the writing style in ../style.md.
- Put the method beside every number, in plain language.
- If something isn't measured, say so.
Agent notes:
- Infer from the evaluation harness: the labeled set, the metrics, and the latest
  results with their run date.
- Ask a person: which results the organization approves for publishing and what blocks
  a release.
Delete this comment before you publish.
-->

# Evaluation

This page reports how accurate [system name]'s decisions are, whether its confidence
can be trusted, how those results were measured, and what they don't show.

## Who this page is for

This page is for developers and owners who need evidence that [model name] works for their decision.

## Prerequisites

Before you begin, make sure you have the following:

- A labeled set of at least [number] real examples
- A read of [Questions and criteria](07-questions-and-criteria.md)

## How [system name] is tested

[Team name] tests [system name] against [number] real [items, for example "tickets"],
each labeled with the correct answer by [who]. [Number] of the items are deliberately
ambiguous, to check that the model is less confident about them.

Last run: [date], with model version [version] and questions as of [date].

## Accuracy

The following table shows how often each decision was correct:

| Decision | Correct | Most common mistake |
|---|---|---|
| [Ticket area] | [X] of [N] | [`account` chosen instead of `billing`] |
| [Urgency] | [X] of [N] | [Mistake] |

## Calibration

The following table shows how often the decision was correct at each confidence
level:

| When confidence was | The decision was correct |
|---|---|
| [Higher than 0.85] | [X]% of [N] decisions |
| [0.5 to 0.85] | [X]% of [N] decisions |
| [Lower than 0.5] | [X]% of [N] decisions |

[Explain what this means for the thresholds, for example "Decisions with confidence
higher than 0.85 were correct 97% of the time, which is why refunds are automatic
only at that level."]

## What these results don't show

These results have the following limits:

- [Where the examples came from, and what they under-represent.]
- [Anything not tested, for example "Messages in languages other than English."]
