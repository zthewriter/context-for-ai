---
template_id: AIE-04
title: "Agent runbook"
doc_type: operational
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Runbook"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Agent runbook (task page)
Purpose: Tell an operator what to do when a live agent run looks wrong.
Audience: The on-call engineer or operator. Not the end user.
Internal or external:
- Internal: include log queries, dashboards, and who to page.
- External: include only the actions a customer operator is allowed to take.
Before you write, ask the builders:
- Which failures retry on their own, and how many times?
- Which failures stop and wait for a person?
- Where is the trace a person can read?
- What must the operator never do, such as replaying a write?
Rules:
- Follow the writing style in ../../templates/style.md.
- Write steps in order. One action per step.
- Name the condition that means the incident is over.
- Do not include secrets or customer data.
Agent notes:
- Infer from the repo: the commands, dashboards, and alerts the runbook refers to.
- Ask a person: the escalation path, who is on call, and which actions need approval.
Delete this comment before you publish.
-->

# Agent runbook for [agent name]

This page tells you what to do when a live run of [agent name] looks wrong. It
does not define whether a change is good enough to ship. That is the
[evaluation spec](eval-spec.md).

## Who this page is for

This page is for the operator on call for [agent name].

## Prerequisites

Before you begin, make sure you have the following:

- Access to the trace at [where]
- Permission to [pause the agent, or the name of the person who can]
- The tool contracts for the tools this agent calls

## What the agent does on its own

[Agent name] retries a step when [condition], up to [number] times, with
[backoff or "no wait"]. It does not retry when [condition, for example "the tool returned a permission error"].

The agent stops and waits for a person when:

- [Condition, for example "The next step would change a customer record"]
- [Condition, for example "Two graders disagree"]

While it waits, the user sees [what the product shows].

## Read a bad trace

Open [trace location]. Check the following, in order:

1. Confirm the run is [run id] and the agent version is [where the version is shown].
2. Read the last tool call. Compare the arguments with the tool contract.
3. Read the passages or records the agent used. Confirm each citation opens.
4. Decide which row in the following table matches the trace.

The following table maps a symptom to the first action. Do the action once,
then re-read the trace.

| What you see | What you do | Do not |
|---|---|---|
| [Symptom] | [First action] | [Action that makes it worse, for example "Do not replay a write"] |
| [Symptom] | [First action] | [Action to avoid] |

## When to escalate

Escalate to [team] when any of the following are true:

- The trace shows a tool call the contract does not allow
- More than [number] runs fail the same way in [time window]
- You cannot tell whether a write already happened

The incident is over when [observable condition], and you have written
[where the note goes]. If the failure should never ship again, add a row to
the evaluation spec.
