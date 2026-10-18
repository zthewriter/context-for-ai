---
template_id: AIE-01
title: "Evaluation spec"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Test plan"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Evaluation spec (reference page)
Purpose: Define the question set, the grader, and the result that blocks a release.
Audience: The engineers and writers who change the agent, and the person who approves a release.
Internal or external:
- Internal: include the dataset location, the script, and results that got worse.
- External: publish only the definition of a passing result that your organization has approved. Put measured scores on the evaluation page in the RAG set, not here.
Before you write, ask the builders:
- Who wrote the questions, and how many are there?
- Which questions must pass, and which are informational?
- What grades an answer: a person, a second model, a rule, or more than one?
- What happens when the grader and a person disagree?
- Which version of the content and the model did the last run use?
Rules:
- Follow the writing style in ../../templates/style.md.
- One fact per section. A coding agent should be able to update one section without rewriting the page.
- Put the method beside every number.
- If a result is not measured, say so.
- Copy this page once per agent or workflow. Do not cover two agents on one page.
Agent notes:
- Infer from the evaluation harness: the question set location, its size, the grader,
  and the script that runs it.
- Ask a person: which questions must pass, what result blocks a release, and who
  settles a disagreement between the grader and a person.
Delete this comment before you publish.
-->

# Evaluation spec for [agent or workflow name]

This page defines the questions, the grader, and the bar [agent or workflow name]
has to clear before a change ships. It is the contract the team tests against.
Measured scores from a run belong in a results note linked from this page.

## Who this page is for

This page is for the people who change [agent or workflow name] and for the person
who approves a release.

## Prerequisites

Before you begin, make sure you have the following:

- A read of [Concepts overview](https://github.com/zthewriter/context-for-ai/blob/v1.0.0/templates/rag/03-concepts-overview.md) if the system answers from retrieved content
- Access to the question set, stored at [location]
- The name of the person who can add or retire a question

## What a good result is

A result is good enough to ship when all of the following are true:

- [Required outcome, for example "The answer cites a source that contains the claim."]
- [Required outcome, for example "The agent calls only tools listed in the tool contract."]
- [Required outcome, for example "The agent says it cannot answer when the source does not cover the question."]

A result fails when any of the following are true:

- [Failure, for example "The answer states a fact that is not in the cited source."]
- [Failure, for example "The agent takes an action the tool contract does not allow."]

## The golden set

The golden set is the fixed list of questions this spec tests. [Team name] owns
it. Questions are added when a production failure should never happen again.
Questions are retired only when [condition, for example "the product no longer supports that task"].

The following table is the set. Replace the rows. Keep one task per row.

| ID | Question or task | Expected evidence | Must pass before release |
|---|---|---|---|
| [Q-001] | [What the user asks or what the agent must do] | [The source, tool result, or end state that proves it] | [Yes or No] |
| [Q-002] | [A question the content does not answer] | [The agent refuses or asks for the missing fact] | [Yes or No] |

Last reviewed: [date]. Content version: [version]. Model: [model name and version].

## How a result is graded

Each required row is graded by [person, rule, model, or combination]. The grader
checks the following:

- [Check, for example "Every factual claim has a citation that contains it."]
- [Check, for example "The tool call used the arguments in the tool contract."]
- [Check, for example "The trajectory finished the task, not only the last message."]

When the grader and a person disagree, [who] decides, and the decision is written
on the row. Do not delete the disagreement.

## What blocks a release

A change does not ship when any "must pass" row fails, or when [other gate, for
example "the share of refused questions drops below the last run"].

Informational rows are reported and do not block a release. They become required
when [condition].

## What this spec does not cover

This spec does not cover the following:

- Load, latency, or cost. Those belong on the [quality, latency, and cost card](quality-latency-cost.md).
- Which tools exist. Those belong on the [tool contract](tool-contract.md).
- How an operator responds to a live failure. That belongs on the [agent runbook](agent-runbook.md).
