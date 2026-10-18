---
template_id: CLS-23
title: "Case study"
doc_type: concept
template_class: classic
personas: [technical-writer, developer-advocate]
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Case study (concept page)
Purpose: Show what an AI system achieved for one team, with evidence, so a reader can
decide whether to build or buy something similar.
Audience: Evaluators and decision makers. Usually external; for internal use, write
it as a project retrospective and keep the same evidence rules.
Internal or external:
- External: get written approval from the team before you publish, and remove internal
  system names.
- Internal: write it as a project retrospective and keep the same evidence rules.
Before you write, ask the builders:
- What was measured, over what period, and how?
- Who can be quoted, and has each person given permission?
Rules:
- Follow the writing style in ./style.md.
- Put the method beside every result: what was measured, over what period, and how.
- Quote real people with permission, and name their role.
- Describe what the team got, not how the system was built.
- Don't publish bare accuracy claims. Say what "correct" meant.
Agent notes:
- Infer from the repo: at most the system type and launch date. A case study is built
  from interviews and measured results, not from code.
- Ask a person: every result and its method, every quote and its permission, and
  approval to publish.
Delete this comment before you publish.
-->

# How [team or company] [achieved outcome] with [system]

[In one or two sentences, state who the team is, what they did, and the headline
result with its time frame.]

The following table summarizes the project:

| Field | Value |
|---|---|
| Team | [Name, size, and industry] |
| System type | [RAG, decision-model, or hybrid] |
| Time to launch | [Duration] |
| Headline result | [Result, with the period measured] |

## Who this page is for

This page is for [evaluators and decision makers] who are deciding whether to build or buy a system like [system].

## Prerequisites

This case study assumes you know what [system type, for example a RAG system] is. If not, start with [the concepts overview, with a link].

## The situation

[Describe what the team was trying to do and what was getting in the way. Use their
numbers, such as ticket volume, time spent, or error rate.]

## What they built

[Describe the system in plain language, and include one at-a-glance diagram from the
[diagram templates](diagrams/). Name the content it uses and the decisions it makes.]

## How they rolled it out

The team rolled out the system in the following stages:

1. [First stage, for example "Ran it alongside agents for two weeks without acting on
   its output."]
2. [Second stage]
3. [Third stage]

## Results

The following table shows what changed and how each result was measured:

| What changed | Before | After | How it was measured |
|---|---|---|---|
| [Measure] | [Value] | [Value] | [Source and period] |
| [Measure] | [Value] | [Value] | [Source and period] |

> "[Quote from a named person about the result.]"
>
> [Name, role]

## What they learned

The team's lessons for others building something similar:

- [A practical lesson another team can use]
- [A practical lesson another team can use]

## Next steps

[Give one factual next step, such as a template, a guide, or a demo.]
