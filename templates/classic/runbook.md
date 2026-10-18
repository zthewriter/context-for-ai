---
template_id: CLS-19
title: "Runbook"
doc_type: operational
template_class: upgraded-classic
personas: [internal-engineer, technical-writer]
replaces_or_extends: "Runbook"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Runbook (operational page)
Purpose: Give the person on call a tested procedure for one alert or operation on a
service.
Audience: On-call engineers, who may not have built the service, and agents that
assist with incident response.
Internal or external:
- Internal: the default.
- External: publish only procedures customers run on their own installations.
Before you write, ask the builders:
- Which alert or request starts this procedure?
- How does the on-call engineer confirm the problem is real?
- Which steps are safe to run alone, and which need approval?
- When should they escalate, and to whom?
Rules:
- Follow the writing style in ../style.md.
- Copy this page once per alert or operation.
- Put the alert name in the title, so the person who gets the alert finds the page.
- Mark every step that changes production, and say who must approve it.
- Test the procedure in a drill, and record the date in "Last tested."
Agent notes:
- Infer from the repo: alert definitions, dashboard links, commands, and the services
  involved.
- Ask a person: which steps need approval, the escalation path, and when the
  procedure was last tested.
Delete this comment before you publish.
-->

# Runbook: [alert name or operation]

This runbook tells you what to do when [alert fires or operation is needed] for
[service].

## Who this page is for

This page is for the on-call engineer for [service].

## Prerequisites

Before you begin, make sure you have the following:

- [Access, for example production read access]
- [Tools, for example the service CLI]

## Last tested

This procedure was last tested on [YYYY-MM-DD] by [name or team].

## What [alert name] means

[What the alert detects, and what users experience while it fires.]

## Confirm the problem

To confirm the problem is real, [check, with a dashboard link or command].

## Fix [alert name]

To fix the problem, do the following:

1. [Step.]
1. [Step that changes production.] **Needs approval from [role].**
1. [Step.]

## Verify recovery

To confirm the service has recovered, [check].

## Escalate

Escalate to [team or role] through [channel] if [condition, for example "the alert
fires again within an hour"].

## Example

The following example shows the confirm step filled in for a fictional hosting
platform:

```markdown
## Confirm the problem

Open the build queue dashboard. If the queue depth is above 500 and rising for more
than five minutes, the problem is real.
```
