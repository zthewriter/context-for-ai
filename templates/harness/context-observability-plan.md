---
template_id: HRN-13
title: "Context observability plan"
doc_type: operational
template_class: new
personas: [context-engineer, ai-engineer, technical-writer]
harness_part: context
replaces_or_extends: "Monitoring plan"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Context observability plan (operational page)
Purpose: Decide which signals show how an agent consumes, uses, and cites its
context, how each signal is measured, and what happens when a signal moves.
Audience: Context engineers and AI engineers who run the agent, and writers who own
the sources it reads.
Internal or external:
- Internal: include every signal, where it is stored, and who can read it.
- External: usually internal. Publish only what customers can check themselves, such
  as which sources an answer may cite.
Before you write, ask the builders and your privacy team:
- Which logs already exist: retrieval logs, tool call logs, server access logs,
  citation records, user feedback?
- Does any log hold the user's question or the passage returned, and how long is it
  kept?
- Which questions does the evaluation set already cover, and how often does it run?
Rules:
- Follow the writing style in ../style.md.
- One row per signal. Every signal names where it is captured and who owns it.
- Every metric states how it is measured and over what window. A number without a
  method can't be compared with next month's.
- List what is not observed. A gap you name is a gap someone can close.
- A signal that holds user text states its retention period.
Agent notes:
- Infer from the repo: log tables, telemetry calls, analytics events, and evaluation
  scripts that already exist.
- Ask a person: thresholds, owners, retention periods, and who acts on each signal.
Delete this comment before you publish.
-->

# Context observability plan for [agent name]

This page records how the team behind [agent name] observes the agent's context:
which sources it retrieves, which ones it cites, which questions it can't answer, and
what the team does when those signals change.

## Who this page is for

This page is for the people who run [agent name] and the writers who own the sources
it reads. Read it before you change a source, a retrieval rule, or an instruction, so
you know which signal will show the effect.

## Prerequisites

Read the [context source map](context-source-map.md) and the
[context delivery plan](context-delivery-plan.md) first. Context observability
measures the sources and channels those pages name.

## Questions this context observability plan answers

The following list states the questions the context observability plan exists to
answer:

- Which sources does [agent name] retrieve for each kind of question?
- Which retrieved sources end up cited in the answer?
- Which questions return no good match, and which topics do they share?
- Did the last context change move any of these signals?

## Context observability signals

The following table lists each signal, where it is captured, and what it tells you:

| Signal | Captured in | What it tells you | Retention | Owner |
|---|---|---|---|---|
| [Signal, for example retrieved sources per question] | [Log, table, or tool] | [Question it answers] | [Period] | [Team] |

## Context observability metrics and thresholds

The following table lists each metric, how it is measured, and the action when it
crosses its threshold:

| Metric | How it is measured | Window | Threshold | Action when crossed |
|---|---|---|---|---|
| [Metric] | [Method and data source] | [Period] | [Value] | [Action and owner] |

## Context observability review cadence

[Who reviews the signals, how often, and where the result is recorded. Record each
change that follows from a review in the [context changelog](context-changelog.md).]

## What context observability doesn't cover

The following list names what the context observability plan doesn't observe, and
why:

- [Gap], because [reason].

## Example

The following example shows the plan filled in with fake values for the Kestrel docs
assistant, a fictional hosting platform's agent:

```markdown
## Context observability signals

| Signal | Captured in | What it tells you | Retention | Owner |
|---|---|---|---|---|
| Retrieved sources per question | MCP server tool call log | Which of the guides, API reference, and status page `search_docs` returned | 90 days | Docs team |
| Cited sources per answer | Assistant response log | Which retrieved sources the answer linked | 90 days | Docs team |
| Questions with no good match | Weak-match flag in the tool call log | Topics the docs don't cover | 90 days | Docs team |
| Pages fetched by agents | Docs site access log, `llms.txt` user agents | Which pages outside agents read | 30 days | Platform team |

## Context observability metrics and thresholds

| Metric | How it is measured | Window | Threshold | Action when crossed |
|---|---|---|---|---|
| Error questions citing the API reference | Share of evaluation questions tagged "error" whose answer links the API reference | Each evaluation run | Below 8 of 10 | Docs team checks the rule "Errors prefer the API reference" |
| No-match rate | Questions flagged weak match divided by all questions | Weekly | Above 15% | Docs team adds the top three topics to the content backlog |

## What context observability doesn't cover

- Whether the customer acted on the answer, because the assistant can't see the
  customer's deployment.
```
