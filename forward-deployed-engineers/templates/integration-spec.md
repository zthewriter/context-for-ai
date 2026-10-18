---
template_id: FDE-08
title: "Integration spec"
doc_type: reference
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Interface control document"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Integration spec (reference page)
Purpose: Document each connection between the system and a customer system:
direction, authentication, data mapping, and what happens when it fails.
Audience: The engineers on both sides who build and maintain the connection, and the
customer's operators.
Internal or external:
- Shared with the customer: the default.
- Internal only: add internal credentials handling and your monitoring.
Before you write, ask the builders:
- Which customer systems does the system connect to, and in which direction?
- How does each connection authenticate, and who owns the credentials?
- Which fields map to which, and what transformations apply?
- What happens when the customer system is slow, down, or returns bad data?
Rules:
- Follow the writing style in ../../templates/style.md.
- Give each integration its own section, so each one can be retrieved alone.
- Never put a real credential, hostname, or record in this page.
- State failure handling for every integration.
Agent notes:
- Infer from the integration code: endpoints called, field mappings, retry and
  timeout settings, and error handling.
- Ask a person: who owns each credential, the customer's rate limits, and the agreed
  behavior when the customer system is down.
Delete this comment before you publish.
-->

# Integrations for [customer] [engagement name]

This page documents each connection between [system name] and [customer]'s systems.

## Who this page is for

This page is for the engineers who build and maintain these connections, and for
[customer]'s operators.

## Prerequisites

Read the [reference architecture](reference-architecture.md) for [engagement name]
first.

## Summary of integrations

The following table lists each integration:

| Integration | Customer system | Direction | Owner |
|---|---|---|---|
| [Name] | [System] | [Reads from, writes to, or both] | [Team] |

## [Integration name]

- **Direction:** [Reads from, writes to, or both.]
- **Trigger:** [Schedule, event, or request.]
- **Authentication:** [Method, and who owns the credential.]
- **Rate limits:** [Customer system limits.]

The following table maps fields:

| [Customer system] field | [System name] field | Transformation |
|---|---|---|
| `[field]` | `[field]` | [None, or the rule] |

### Failure handling for [integration name]

The following table lists what happens on each failure:

| Failure | Behavior | Alert |
|---|---|---|
| [Timeout, error, or bad data] | [Retry, skip, or stop] | [Who is told] |

## Example

The following example shows a field mapping filled in for an engagement with Kestrel, a fictional hosting platform:

```markdown
| Kestrel helpdesk field | Docs assistant field | Transformation |
|---|---|---|
| `ticket.subject` | `question.title` | None |
| `ticket.body` | `question.text` | Remove email signatures |
```
