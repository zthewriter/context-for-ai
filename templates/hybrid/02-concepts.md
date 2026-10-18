---
template_id: HYB-02
title: "Hybrid concepts"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Concept page"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Hybrid concepts (concept page)
Purpose: Define what it means to combine retrieval-augmented generation (RAG) with a
decision model, explain the three common patterns, and help the reader
choose one. Link to the RAG and decision-model concept pages instead of repeating them.
Audience: Architects, developers, and technical writers who document a combined
system.
Internal or external: Both.
Before you write, ask the builders:
- Which of the three patterns does [product] follow, and why was it chosen?
- Name the pattern your system follows, and fill in the final section from your
  real system.
Rules:
- Follow the writing style in ../style.md.
- Keep this page about the combination. Put single-technique concepts on the RAG and
  decision-model pages.
Agent notes:
- Infer from the code: which pattern the system follows and how the parts hand off.
- Ask a person: why that pattern was chosen and which alternatives were rejected.
Delete this comment before you publish.
-->

# About combining retrieval and decisions

This page defines what it means to combine retrieval-augmented generation (RAG) with
a decision model, describes the three common patterns, and helps you choose one.

## Who this page is for

This page is for architects and developers who design a combined system, and for
writers who document one. It assumes you have read the following pages:

- [About retrieval-augmented generation](../rag/03-concepts-overview.md)
- [About the decision model](../decision-model/03-concepts-overview.md)

## Prerequisites

Read the [RAG concepts overview](../rag/03-concepts-overview.md) and the [decision model concepts overview](../decision-model/03-concepts-overview.md) first, because this page combines their terms.

## What is a hybrid system?

A *hybrid system*, in this documentation, is a system that uses both RAG and a
decision model. RAG finds content and writes text from it. A decision model makes
typed judgments, such as "is this passage relevant?" or "which team should handle
this?" Combining them lets your code control what the language model sees or says,
using policies that you write down.

## Why combine them

RAG ranks passages by similarity, and similarity isn't policy. A decision step can
apply what the ranking can't know: whether a passage applies to this reader, whether
it's current, and whether it contains instructions for the model. It can also decide
whether a question needs a generated answer at all.

The combination adds time, cost, and a part that can fail. Use it only where a wrong
answer costs more than the added complexity.

## The three patterns

The following table compares the patterns:

| Pattern | Where the decision runs | What it controls | Use when |
|---|---|---|---|
| Route, then answer | Before retrieval | Which handler gets the question | Questions differ in kind, and some need a person or fixed logic |
| Retrieve, check passages, then answer | Between retrieval and generation | Which passages the model reads | Similar but unusable passages are a problem |
| Answer, then verify | After generation | Whether the answer is shown | A wrong answer is costly, and you can check claims against citations |

For diagrams of each pattern, see the [hybrid README](README.md#common-hybrid-patterns).

## Choose a pattern

Choose the pattern from the failure you need to prevent:

| If the problem is | Start with |
|---|---|
| Questions that shouldn't be answered by a model | Route, then answer |
| Passages for the wrong version, audience, or time | Retrieve, check passages, then answer |
| Answers that claim more than the sources say | Answer, then verify |

Start with one pattern. Measure it against the application without it, and add a
second only if the measurements show a gap.

## Core concepts

The following table defines the concepts that are specific to hybrid systems:

| Concept | Definition |
|---|---|
| Handoff | The point where one part passes its output to the next, and the rule that governs it. |
| Passage check | A set of questions that a decision model answers about each retrieved passage. |
| Retained set | The passages that remain after the check. |
| Fail open | Continue when a part is unavailable, accepting an unchecked result. |
| Fail closed | Stop when a part is unavailable, and report that no answer can be given. |
| Empty after filter | A check that removes every candidate. Treat it as a normal outcome and decline. |
| Trace | The record that shows what each part received and returned for one request. |

## How [product] applies these concepts

The following table shows how [product] combines the parts. Document your own
choices:

| Question | [Product]'s choice |
|---|---|
| Which pattern? | [Pattern] |
| Which policies does the decision step apply? | [List the questions] |
| What happens if the decision step fails? | [Fail open or fail closed, and why] |
| What happens if nothing passes? | [What the application says] |
| Where is the trace? | [Link] |

## Next steps

To continue, use one of the following pages:

- To build a combined system, see the [tutorial](01-tutorial.md).
- To document how the parts connect, see [System overview](03-system-overview.md).
- To plan for failures, see [Failure modes](05-failure-modes.md).
