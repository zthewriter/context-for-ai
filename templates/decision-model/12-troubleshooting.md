---
template_id: DEC-12
title: "Troubleshooting"
doc_type: how-to
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Troubleshooting guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Troubleshooting (troubleshooting page)
Purpose: Help readers diagnose and fix common problems with decisions. Organize by
the symptom the reader sees.
Audience: Operators, developers, and support.
Internal or external:
- External: list fixes the reader can apply. End with how to contact support.
- Internal: add the decision log queries, dashboards, and escalation path.
Before you write, ask the builders:
- Which problems did each fix in the issue tracker resolve, and is each fix still
  current?
- Collect the most common problems from reversed decisions, support tickets, and
  issue trackers.
- Reproduce each problem and confirm each fix.
Rules:
- Follow the writing style in ../style.md.
- Use the symptom as the heading, in the reader's words.
- Give each problem a cause and a fix.
Agent notes:
- Infer from the issue tracker and error handling code: symptoms, error messages, and
  fixes. Reproduce each one before you write it down.
- Ask a person: which problems are most common and when a reader should contact
  support.
Delete this comment before you publish.
-->

# Troubleshoot [system name]

This page describes common problems with [system name]'s decisions and how to fix
them. Each section starts with what you see.

## Who this page is for

This page is for developers who are investigating a request error or an unexpected answer.

## Prerequisites

Before you begin, make sure you have the following:

- The request you sent and the response you received

## A decision is wrong, but its confidence was high

**Cause:** The criteria don't match how the team actually decides, or the state is
missing information the team uses.

To fix this problem, do the following:

1. Open the decision in [location], and read the state the model received.
2. Compare the state with the criteria in
   [Questions and criteria](07-questions-and-criteria.md).
3. If the state is missing information, see [State and inputs](06-state-and-inputs.md).
4. If the criteria are unclear or too narrow, propose a change to [owner]. Record the
   change in the [change history](14-change-history.md).

## Too many items go to a person

**Cause:** Confidence is often lower than the threshold, usually because options overlap
or the state lacks information.

To fix this problem, do the following:

1. In [location], filter decisions by confidence lower than [threshold].
2. Look for options that appear together with similar probabilities.
3. Clarify the definitions of those options, or add the missing information to the
   state.

Don't lower the threshold until you've checked how often decisions at the lower
confidence are correct. For the current results, see [Evaluation](13-evaluation.md).

## Decisions changed without a configuration change

**Cause:** The model version changed, or the content of the state changed.

To fix this problem, do the following:

1. Compare the `model` value recorded with recent decisions to earlier ones.
2. Check the [change history](14-change-history.md) for changes to inputs or criteria.

## A score falls between two levels

**Cause:** This behavior is expected. A score is a weighted value, so 1.4 means the
model found evidence for both level 1 and level 2.

To fix this problem, act on a range of scores rather than a level. For the ranges
[system name] uses, see [Confidence and actions](08-confidence-and-actions.md).

## Requests fail with error [code]

**Cause:** [Cause].

To fix this problem, [fix]. For all error codes, see [Errors](09-reference.md#errors).

## Get help

If your problem isn't listed on this page, [contact method]. Include the decision ID,
the time of the decision, and what you expected instead.
