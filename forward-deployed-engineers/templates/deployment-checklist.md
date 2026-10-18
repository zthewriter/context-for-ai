---
template_id: FDE-10
title: "Deployment checklist"
doc_type: operational
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Go-live checklist"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Deployment checklist (operational page)
Purpose: List the go-live steps in the customer's environment, in order, each with an
owner who signs it off.
Audience: The forward deployed team and the customer's operators on the day of
go-live.
Internal or external:
- Shared with the customer: the default.
- Internal only: add internal escalation contacts.
Before you write, ask the builders:
- Which steps must happen before, during, and after go-live?
- Who on each side owns each step?
- What is the rollback trigger, and who decides to roll back?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per deployment.
- Give every step an owner. A step with no owner does not happen.
- Rehearse the checklist in a test environment, and record the date.
Agent notes:
- Infer from the repo: deployment commands, configuration values to set, and
  health checks.
- Ask a person: the owner of each step, the go-live window, and the rollback
  decision maker.
Delete this comment before you publish.
-->

# Deployment checklist: [customer] [engagement name]

This checklist lists the steps to put [system name] live in [customer]'s environment
on [YYYY-MM-DD], with the owner who signs off each step.

## Who this page is for

This page is for the forward deployed team and [customer]'s operators on go-live day.

## Prerequisites

Before you begin, make sure you have the following:

- Sign-off on the [success criteria](success-criteria.md)
- Access to [customer]'s [environment]
- A rehearsal of this checklist, completed on [YYYY-MM-DD]

## Before go-live

- [ ] [Step.] Owner: [name]. Signed off: [date].

## During go-live

- [ ] [Step.] Owner: [name]. Signed off: [date].

## After go-live

- [ ] [Run the health check and confirm the result.] Owner: [name]. Signed off:
  [date].

## Roll back

Roll back if [trigger]. [Name or role] decides. To roll back, [steps].

## Example

The following example shows a go-live step filled in for an engagement with Kestrel, a fictional hosting platform:

```markdown
## During go-live

- [ ] Point the Kestrel helpdesk webhook at the docs assistant URL. Owner: Kestrel
  IT. Signed off: [date].
```
