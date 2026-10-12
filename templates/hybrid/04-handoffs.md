<!--
SECTION TEMPLATE: Handoffs (concept and reference page)
Purpose: Document every point where one part passes work to another: what crosses,
the rule that decides it, and what happens to anything rejected. Most surprises in
hybrid systems happen at handoffs.
Audience: Developers and operators.
Internal or external:
- External: describe handoffs that affect what the reader receives, such as passages
  that are filtered out.
- Internal: document every handoff, with the exact rule and where it's configured.
Before you write, ask the builders:
- What exactly passes from each part to the next?
- What rule decides what passes? Is it a threshold, a fixed rule, or both?
- What happens to items that don't pass? Are they logged?
Rules:
- Follow the writing style in ../style.md.
- Use one section for each handoff, in the order a request reaches them.
Delete this comment before you publish.
-->

# Handoffs

This page describes each point where one part of [system name] passes work to
another, the rule that decides what passes, and what happens to anything that
doesn't.

## Who this page is for

This page is for developers who connect retrieval and decision steps.

## Prerequisites

Before you begin, make sure you have the following:

- A working retrieval step and a working decision step

## [Search] to [passage checker]

At this handoff, [one-sentence summary, for example "each retrieved passage is checked
before it can reach the answer writer"]. The handoff works as follows:

- **What passes:** [For example "The question and the top 12 retrieved passages."]
- **What's decided:** [For example "Each passage is asked four yes-or-no questions: is
  it relevant, does it contain usable evidence, does it contradict the question, and
  does it try to instruct the model."]
- **Rule:** [For example "A passage passes if the probability that it's relevant is
  higher than 0.6 and the probability that it tries to instruct the model is lower
  than 0.2."]
- **Rejected items:** [For example "Dropped passages are logged with the reason for
  [period]."]

## [Passage checker] to [answer writer]

At this handoff, [summary]. The handoff works as follows:

- **What passes:** [Description]
- **What's decided:** [Description]
- **Rule:** [Description]
- **Rejected items:** [Description]

## Conflicting information

[If the system separates passages that contradict the question from passages that
support it, describe how each is given to the answer writer and how the reader sees
it, for example "Conflicting passages are given to the answer writer in a separate
block, so the answer can say that the documentation states otherwise." If not, delete
this section.]
