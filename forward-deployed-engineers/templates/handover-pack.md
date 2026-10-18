---
template_id: FDE-04
title: "Handover pack"
doc_type: operational
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Handover document"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Handover pack (task page)
Purpose: Leave the customer able to run, edit, and turn off the system.
Audience: The customer operator and the engineer who accepts the system. The builder should be able to leave.
Internal or external:
- External: this is the page the customer keeps.
- Internal: add the account folder link and the date the builder rolled off.
Before you write, ask the builders:
- What does the operator do every day?
- What are they allowed to change without calling you?
- How do they turn the system off safely?
- Who do they contact when the trace looks wrong, after you are gone?
Rules:
- Follow the writing style in ../../templates/style.md.
- Write for the person who will be here in three months.
- If you cannot name an owner on the customer side, the handover is not done.
- Do not include secrets. Point at the vault entry.
Agent notes:
- Infer from the repos: what was built, where it runs, and how to deploy it.
- Ask a person: who owns each part after handover, the open issues, and the support
  terms.
Delete this comment before you publish.
-->

# Handover: [system name] at [account placeholder]

This page is how [role] runs [system name], changes the settings they own, and
turns it off. [Builder role] is not required for the daily path.

## Who this page is for

This page is for [customer role] and for the engineer who accepts the system
on the customer side.

## Prerequisites

Before you begin, make sure you have the following:

- Access granted to [customer role], recorded at [where access is tracked]
- The limitations note for this system
- The runbook, if the system is an agent

## Who owns it now

| Concern | Owner | How to reach them |
|---|---|---|
| Daily operation | [customer role] | [channel] |
| Access and secrets | [customer role] | [vault name, not the secret] |
| Product defects | [vendor or customer team] | [channel] |
| Whether a change is safe to ship | [role] | [where the evaluation spec lives] |

Handover date: [date]. Builder available for questions until [date], then only
through [channel].

## Run it

[Customer role] does the following to confirm the system is healthy:

1. Open [place].
2. Check [signal] is within [bound] for [window].
3. Complete [one real task] and confirm [expected result].

Do this [schedule].

## Change it

[Customer role] may change the following without a new build:

- [Setting]: [what it does, and the safe range]

[Customer role] asks [owner] before changing the following:

- [Setting or integration]: [why it is not a daily change]

## Turn it off

To stop [system name] from taking action:

1. [Step that stops new work].
2. [Step that finishes or cancels work already started].
3. Confirm [signal] shows stopped.

Turning it off does not delete [data]. Deletion is a separate decision owned by
[role] and is described in [security or data page].

## When something looks wrong

Use the runbook at [location]. If the runbook does not match the trace, contact
[owner] with the run id and the time. Do not replay a step that already wrote
data unless the runbook says to.
