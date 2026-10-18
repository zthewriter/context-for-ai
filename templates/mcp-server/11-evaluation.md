---
template_id: MCP-11
title: "Evaluation"
doc_type: concept
template_class: new
personas: [context-engineer, ai-engineer, technical-writer]
replaces_or_extends: "Test plan"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Evaluation (concept page)
Purpose: Show whether agents choose the right tool and get the right answer from the
server, measured with a fixed question set.
Audience: Context engineers and AI engineers who change the server, and evaluators
deciding whether to trust it.
Internal or external:
- Internal: include the full question set, the runs, and results that got worse.
- External: publish only results the organization approves, with the method beside
  each one.
Before you write, ask the builders:
- Which questions are in the fixed set, and who wrote them?
- For each question, which tool should the agent call, and what is a correct answer?
- Which client and model ran the evaluation, and on what date?
Rules:
- Follow the writing style in ../style.md.
- Measure tool choice and answer quality separately. A right answer from the wrong
  tool hides a problem that surfaces on the next question.
- Put the method, the client, the model, and the date beside every number.
- If a result is not measured, say so.
Agent notes:
- Infer from the repo: the question set file, the evaluation script, and the latest
  results with their run date.
- Ask a person: which results may be published and which result blocks a release.
Delete this comment before you publish.
-->

# Evaluation of [server name]

This page describes how [server name] is evaluated: whether an agent chooses the right
tool, and whether it gets a correct answer.

## Who this page is for

This page is for the people who change [server name] and for evaluators deciding
whether to trust it.

## Prerequisites

Read the [tools reference](04-tools-reference.md) first.

## Question set

The fixed question set has [number] questions, written by [who] on [date], stored at
[location]. Each question records the tool an agent should call and the facts a
correct answer contains.

## How the evaluation runs

The evaluation runs [client] with [model] against [server name] [version] on each
change to tools, descriptions, or server instructions.

## Results

The following table shows the most recent run, on [YYYY-MM-DD]:

| Measure | Result | Method |
|---|---|---|
| Right tool chosen | [Number] of [number] | [How it was graded] |
| Correct answer | [Number] of [number] | [How it was graded] |

## What blocks a release

A change ships only if [condition].

## Example

The following example shows the results table filled in with fake values for a
fictional hosting platform:

```markdown
| Measure | Result | Method |
|---|---|---|
| Right tool chosen | 27 of 30 | Compared with the expected tool in the question set |
| Correct answer | 24 of 30 | Graded by a docs writer against the expected facts |
```
