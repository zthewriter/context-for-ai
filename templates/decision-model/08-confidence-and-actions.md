---
template_id: DEC-08
title: "Confidence and actions"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Confidence and actions (concept and policy page)
Purpose: Document how certain the model must be before the system acts, what happens
at each level, and who reviews uncertain decisions. Thresholds are business rules,
and the people affected deserve to know they exist.
Audience: Operators, support, and affected people.
Internal or external:
- External: describe what happens to the reader at each level. Publishing exact
  threshold values is your organization's decision.
- Internal: publish exact values, where they're configured, and who approved them.
Before you write, ask the builders:
- What is the threshold for each action, and why that number?
- What happens when confidence is lower than the lowest threshold?
- Who reviews uncertain decisions, and how fast?
- Can a person reverse an automatic action? Are reversals recorded?
Background:
- Choice and Score answers return a confidence from 0 to 1.
- Yes-or-no answers return only a probability, so thresholds apply to that value.
- A Score returns a weighted value that can fall between levels, so state which range
  of the score triggers each action.
- Riskier actions need higher thresholds than reversible ones.
Rules:
- Follow the writing style in ../style.md.
- Give every automatic action a fallback.
Agent notes:
- Infer from the code: the thresholds and the action taken at each confidence level.
- Ask a person: who reviews low-confidence decisions, how fast, and what the system
  does when no reviewer is available.
Delete this comment before you publish.
-->

# Confidence and actions

[System name] acts on a decision automatically only when the model is confident
enough. This page describes the thresholds for each action, why they were chosen, and
what happens when the model isn't confident.

## Who this page is for

This page is for developers and owners who decide what the application does with each answer.

## Prerequisites

Before you begin, make sure you have the following:

- A working call from the [quick start](02-quickstart.md)
- A set of labeled examples to test thresholds against

## Probability and confidence

Every answer includes probabilities, and choice and score answers also include a
confidence:

- **Probability** shows how likely the model considers each option.
- **Confidence** shows how certain the model is overall, from 0 to 1. Two options
  with similar probabilities produce low confidence, even if one of them is slightly
  ahead.

A low confidence is useful information. It means the item is ambiguous or the state
doesn't contain enough information to decide.

## How confidence controls actions

[System name] uses three confidence ranges:

- **High:** [System name] acts automatically.
- **Medium:** [System name] acts with a safeguard, such as asking a person to confirm.
- **Low:** [System name] doesn't act. It sends the item to a person.

## Thresholds

The following table lists the threshold for each action:

| Decision and outcome | Confidence | What happens |
|---|---|---|
| [Any decision] | [Lower than 0.5] | [Sent to a person, with no automatic action] |
| [Ticket area: any option] | [0.5 or higher] | [Routed automatically. An agent can reroute it.] |
| [Refund: approve] | [0.5 to 0.85] | [An agent confirms before the refund is issued.] |
| [Refund: approve] | [Higher than 0.85] | [Refunded automatically] |
| [Urgency: score of 1.5 or higher] | [0.7 or higher] | [Pages the on-call agent] |

Thresholds are higher for actions that are harder to reverse. [Explain the
difference, for example "Routing a ticket to the wrong team costs a few minutes; an
incorrect refund costs money."]

## Why these values

[Explain how each threshold was chosen: what it was tested on, the result, and who
approved it. If a threshold was set by judgment and hasn't been measured yet, say so.]

## Review of uncertain decisions

[State who reviews decisions that aren't acted on automatically, the target response
time, and what reviewers see, such as the state, every answer, and its confidence.]

## Reverse an automatic action

To reverse an automatic action, [method]. [State whether reversals are recorded and
whether they're used to improve the criteria.]
