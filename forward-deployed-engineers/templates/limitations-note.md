---
template_id: FDE-05
title: "Limitations note"
doc_type: concept
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Known issues"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Limitations note (concept page)
Purpose: Tell a non-engineer operator what the system will not do.
Audience: The person who relies on the system and does not read the architecture.
Internal or external:
- External: this is customer-facing. Use the operator's words for the task.
- Internal: you may add a link to the evaluation row that justifies each limit.
Before you write, ask the builders:
- What will a reasonable operator assume the system can do that it cannot?
- Which limits are permanent, and which are this release only?
- What should the operator do instead, in one sentence?
Rules:
- Follow the writing style in ../../templates/style.md.
- Write the task in the operator's language. Do not lead with a model or index name.
- One limit per row. Say what to do instead.
- Do not describe a past defect. Describe the current boundary.
Agent notes:
- Infer from the evaluation results and issue tracker: what the system does not do or
  does badly.
- Ask a person: which limits the customer has agreed to and which ones the product
  team plans to address.
Delete this comment before you publish.
-->

# What [system name] will not do

This page lists the tasks [system name] will not do for [operator role], and
what to do instead. Read it before you rely on the system for [the decision or
task the operator cares about].

## Who this page is for

This page is for [operator role]. You do not need to know how the system is
built.

## Prerequisites

Before you begin, make sure you have the following:

- Access to [system name]
- The handover page, if someone else still operates the daily path

## Limits

The following table is the current boundary. A task that is not listed is not
a promise that the system can do it. Ask [owner] before you depend on it.

| You might expect | What actually happens | Do this instead |
|---|---|---|
| [Task in the operator's words] | [What the system does, including a refusal] | [The manual step or the person to ask] |
| [Task] | [What happens] | [What to do instead] |

These limits apply to [version or date]. A later release can move a row. The
change history at [location] is where that move is recorded.

## How to tell a limit from a failure

The system is inside this page when it [observable behavior, for example "says it cannot complete the task and points you here"].

The system has failed when it [observable behavior, for example "presents an action as finished and the source system did not change"]. Use the runbook for that case. Do not treat a failure as a limit, and do not treat a limit as an outage.
