---
template_id: HYB-08
title: "Evaluation"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Test plan"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Evaluation (concept page)
Purpose: Report how well each part and the whole system work, side by side. An
improvement in one part can make the overall result worse, and a single blended
score hides that.
Audience: Evaluators, buyers, and leadership.
Internal or external:
- External: publish only results your organization has approved for release.
- Internal: add every run, the dataset location, and results that got worse.
Before you write, ask the builders:
- Which question set and which grader does each stage use?
- Which results block a release?
Rules:
- Follow the writing style in ../style.md.
- Report each part and the whole separately. Never blend them into one score.
- Put the method beside every number.
Agent notes:
- Infer from the evaluation harness: the question sets, graders, and latest results
  for each stage, with their run dates.
- Ask a person: which results may be published and which ones block a release.
Delete this comment before you publish.
-->

# Evaluation

This page reports how well each part of [system name] works, how well the whole
system works, and what changed compared with a simpler version.

Last run: [date].

## Who this page is for

This page is for developers and owners who need evidence about the whole system, not just one step.

## Prerequisites

Before you begin, make sure you have the following:

- A labeled question set
- Results for each step on its own, so that you can tell where a miss started

## Each part

The following table shows the result for each part:

| Part | What was measured | Result |
|---|---|---|
| [Request classifier] | [Sent the request to the correct handler] | [X] of [N] requests |
| [Search] | [Retrieved the right passage in the top [number]] | [X] of [N] questions |
| [Passage checker] | [Kept the right passage] | [X] of [N] passages |
| [Passage checker] | [Dropped planted passages that try to instruct the model] | [X] of [N] passages |
| [Answer writer] | [Wrote an answer supported by its citations] | [X] of [N] answers |

## The whole system

The following table shows the end-to-end result:

| What was measured | Result |
|---|---|
| [Correct answer, supported by its citations] | [X] of [N] questions |
| [Said it couldn't answer, when the content didn't cover the question] | [X] of [N] questions |

## Compared with the simpler version

The following table compares the system with and without [the added part]:

| What was measured | Without [part] | With [part] |
|---|---|---|
| [Measure] | [Result] | [Result] |

[Describe what the added part changed in both directions, including any cases where
the simpler version did better.]

## What these results don't show

These results have the following limits:

- [Where the test questions came from, and what they under-represent.]
