---
template_id: HYB-05
title: "Failure modes"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Failure mode analysis"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Failure modes (reference page)
Purpose: Document what the whole system does when each part is wrong, unsure, or
unavailable, and how each failure is detected.
Audience: Operators and support.
Internal or external:
- External: describe what the reader sees in each case.
- Internal: add the alert, dashboard, and runbook for each failure.
Before you write, ask the builders:
- Which failures have happened in production, and how was each one detected?
- Turn off each part in a test environment and record what the system does.
- Fill in every cell. Write "Not applicable" only when a state can't occur, and say
  why in your notes.
Rules:
- Follow the writing style in ../style.md.
Agent notes:
- Infer from the code and test environment: what the system does when each part fails
  or is unsure. Test each state before you record it.
- Ask a person: which failures have happened in production and how each was detected.
Delete this comment before you publish.
-->

# Failure modes

This page describes what [system name] does when one of its parts is wrong, unsure,
or unavailable, and how each failure is detected.

## Who this page is for

This page is for developers and support staff who investigate a result that looks wrong.

## Prerequisites

Before you begin, make sure you have the following:

- A trace of the request that went wrong

## What happens when a part fails

The following table lists each part and what the system does in each failure state:

| Part | If it's wrong | If it's unsure | If it's unavailable |
|---|---|---|---|
| [Request classifier] | [The question goes to the wrong handler. The reader can click **Talk to a person**.] | [The question goes to a person.] | [Every question goes to the generated answer.] |
| [Search] | [Irrelevant passages are retrieved. The checker drops them, and the answer says nothing matched.] | Not applicable | [The answer says the content is temporarily unavailable.] |
| [Passage checker] | [A good passage is dropped, and the answer might be incomplete.] | [The passage is kept and marked as uncertain.] | [Passages go straight to the answer writer, without checks.] |
| [Answer writer] | [The wording is wrong. Citations let readers check it.] | Not applicable | [The passages are shown without a written answer.] |

## How failures are detected

The following table lists how each failure is detected and who responds:

| Failure | Signal | Who responds |
|---|---|---|
| [Classifier unavailable] | [Alert when the error rate is higher than [value] for [time]] | [Team] |
| [Checker dropping good passages] | [Weekly review of logged dropped passages] | [Team] |
| [Answers without support] | [Readers' reports, and a weekly sample review] | [Team] |
