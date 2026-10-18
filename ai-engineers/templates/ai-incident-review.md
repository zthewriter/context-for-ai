---
template_id: AIE-10
title: "AI incident review"
doc_type: operational
template_class: new
personas: [ai-engineer, technical-writer, internal-engineer]
replaces_or_extends: "Postmortem"
version: 1.0.0
---
<!--
SECTION TEMPLATE: AI incident review (operational page)
Purpose: Review an AI result that was wrong, harmful, or costly: what happened, the
trace that shows why, the impact, and what changes.
Audience: The team that owns the system, leadership, and, for external incidents,
affected customers.
Internal or external:
- Internal: include the full trace, the timeline, and every contributing cause.
- External: publish an approved summary with the impact, the cause in plain language,
  and what changed.
Before you write, ask the builders:
- What was the result, who saw it, and when was it reported?
- What does the trace show the system retrieved, decided, or called?
- Which content, prompt, model, or setting contributed?
- What will change, who owns each change, and by when?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per incident.
- Write without blame. Describe what the system and the process did, not who erred.
- Quote the trace. An AI incident review without the trace is a guess.
- Remove personal data from quoted inputs and outputs.
Agent notes:
- Infer from the logs and repo: the trace, the timeline from logs, and the content,
  prompt, and model versions in use at the time.
- Ask a person: the impact, who reported it, the contributing causes, and the agreed
  actions.
Delete this comment before you publish.
-->

# Incident review: [short description]

This review describes an incident on [YYYY-MM-DD] in which [system name] [what went
wrong], its causes, and what changes as a result.

## Who this page is for

This page is for the team that owns [system name] and anyone who needs to know what
changed after the incident.

## Prerequisites

You need read access to the traces at [location] to follow the links on this page.

## Summary of the incident

The following table summarizes the incident:

| Field | Value |
|---|---|
| Date | [YYYY-MM-DD] |
| Reported by | [Role, not name, for external reports] |
| Impact | [Who was affected and how] |
| Severity | [Level, with a link to the severity scale] |
| Status | [Open or resolved] |

## What happened

[What the user asked or sent, what the system returned, and why it was wrong,
harmful, or costly.]

## The trace

The following excerpt shows what the system retrieved, decided, or called:

```text
[trace excerpt, with personal data removed]
```

## Timeline

The following table lists events in order:

| Time (UTC) | Event |
|---|---|
| [HH:MM] | [Event] |

## Contributing causes

- **[Content, prompt, model, setting, or process]:** [What contributed, and how.]

## Actions

The following table lists the agreed changes:

| Action | Owner | Due |
|---|---|---|
| [Change] | [Name or team] | [YYYY-MM-DD] |

## Example

The following example shows contributing causes filled in for a fictional hosting
platform:

```markdown
## Contributing causes

- **Content:** the retired v2 deploy guide was still indexed, and it ranked above the
  current guide.
- **Process:** retiring a guide did not trigger removal from the index.
```
