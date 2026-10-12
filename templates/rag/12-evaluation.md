<!--
SECTION TEMPLATE: Evaluation (concept page)
Purpose: Report how well the system works, how that was measured, and what the
measurement doesn't show.
Audience: Evaluators, buyers, and leadership.
Internal or external:
- External: publish only results your organization has approved for release, each
  with its method.
- Internal: add every run, the dataset location, the script that produced each
  number, and results that got worse.
Before you write, ask the builders:
- Is there a labeled set of test questions? How many, and who wrote them?
- What counts as a correct result?
- Does the test include questions the content doesn't answer?
- When was it last run, and against which version of the content?
Rules:
- Follow the writing style in ../style.md.
- Put the method beside every number: what was asked, against what, and how it was
  judged.
- Translate metric names into plain language. Write "found the right passage in its
  top five results for 82 of 100 questions," not "recall@5 = 0.82."
- If something isn't measured, say so.
Delete this comment before you publish.
-->

# Evaluation

This page reports how accurately [system name] finds and uses the right content, how
those results were measured, and what they don't show.

## Who this page is for

This page is for evaluators, buyers, and anyone deciding how much to rely on [system name].

## Prerequisites

Before you begin, make sure you have the following:

- A read of [Concepts in depth](04-concepts-in-depth.md#relevance), especially relevance and ranking
- [Access to the question set, if readers can rerun it]

## How [system name] is tested

[Team name] tests [system name] against [number] questions written by [who], each
paired with the passage that answers it. [Number] of the questions aren't answered by
the content, to check that [system name] says so instead of guessing.

Last run: [date], against content as of [date].

## Results

The following table summarizes the results of the last run:

| What was measured | Result | What it means |
|---|---|---|
| Found the right passage in its top [number] results | [X] of [N] answerable questions | [Plain explanation] |
| Said it couldn't answer, when the content didn't cover the question | [X] of [N] unanswerable questions | [Plain explanation] |
| Answer was supported by its citations | [X] of [N] answers, judged by [who or what] | [Plain explanation] |

## What these results don't show

These results have the following limits:

- The questions were written by [who], and might not match how your users ask.
- [Other limits, for example "The test covers English questions only."]

## Run your own check

To check [system name] against your own needs, ask it 10 questions your team gets
every week and compare each answer with its cited sources. This check tells you more
about your use case than the results on this page.
