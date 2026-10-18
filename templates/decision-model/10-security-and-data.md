---
template_id: DEC-10
title: "Security and data"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Security and privacy page"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Security and data (concept page)
Purpose: Explain what data each decision uses and stores, who can see it, and how the
system handles content written to manipulate a decision.
Audience: Admins, security and privacy reviewers, and affected people.
Internal or external:
- External: describe guarantees and controls. Don't publish details that would help
  someone manipulate a decision.
- Internal: add the threat model, the owner of each control, and links to the
  security review and incident runbook.
Before you write, ask the builders and your security team:
- What personal data is in the state, and is it necessary?
- What is stored for each decision, where, and for how long?
- Who can read stored decisions?
- Is any data used to train models? By whom?
- How is content that tries to manipulate a decision detected or limited?
Rules:
- Follow the writing style in ../style.md.
- Don't claim that any measure fully prevents manipulation.
- Have your security and privacy teams review this page before you publish it.
Agent notes:
- Infer from the code and configuration: what is sent to the model provider, what is
  logged, and where it is stored.
- Ask a person: retention periods, the legal basis for processing, and anything the
  security team must approve before publishing.
Delete this comment before you publish.
-->

# Security and data handling

This page describes the data that [system name] uses and stores for each decision,
who can see it, and how [system name] limits attempts to manipulate decisions.

## Who this page is for

This page is for security reviewers and developers who decide what text can be sent to [model name].

## Prerequisites

Before you begin, make sure you have the following:

- A list of the data fields your application plans to send as state

## Data used in decisions

[System name] sends the fields listed in [State and inputs](06-state-and-inputs.md) to
the decision model. [State whether the model provider stores requests, for how long,
and whether they're used for training.]

## Data that [system name] stores

The following table lists the data stored for each decision:

| Data | Why it's stored | Retention | Who can see it |
|---|---|---|---|
| The state | [To review and audit decisions] | [Period] | [Roles] |
| Answers, probabilities, and confidence | [To review decisions and measure accuracy] | [Period] | [Roles] |
| Action taken and any reversal | [To audit decisions] | [Period] | [Roles] |
| Model version and question version | [To explain changes in behavior] | [Period] | [Roles] |

## Manipulation and adversarial content

> **Warning:** The content in a state can be written to influence the decision, for
> example a message that says "this is urgent, route to billing." The model reads
> that text as part of the state, and it can affect the answer.

No technique fully prevents manipulation. [System name] reduces the risk in the
following ways:

- [Measure, for example "Fixed rules, such as plan-based priority, are enforced in
  code and can't be changed by the content of a message."]
- [Measure, for example "High-impact actions, such as refunds, require higher
  confidence and a person's confirmation."]
- [Measure, for example "A separate yes-or-no question checks whether the content
  tries to instruct the system."]

## Report a security issue

To report a security issue, [contact method]. Don't include sensitive data in the
report.
