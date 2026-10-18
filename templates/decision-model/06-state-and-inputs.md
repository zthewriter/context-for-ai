---
template_id: DEC-06
title: "State and inputs"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Data model"
version: 1.0.0
---
<!--
SECTION TEMPLATE: State and inputs (concept and reference page)
Purpose: Document exactly what content each decision reads, where it comes from, and
what is deliberately left out. The state is the only thing the model sees, so this
page explains most surprising decisions.
Audience: Developers, operators, and privacy reviewers.
Internal or external:
- External: describe the information used, in terms the affected person recognizes.
  Don't name internal systems.
- Internal: add the system and table each field comes from, and link to the code
  that builds the state.
Before you write, ask the builders:
- Exactly which fields go into the state, and from which systems?
- Is the state a single string, a JSON object, or a list?
- Is any retrieved content, such as policies or past records, included?
- What is deliberately left out, such as personal data or internal notes?
- What happens when a field is missing or very long?
Rules:
- Follow the writing style in ../style.md.
- Give every field an example value.
Agent notes:
- Infer from the code: every input field, its type, and where its value comes from.
- Ask a person: which fields contain personal data and which fields must never be sent
  to the model.
Delete this comment before you publish.
-->

# State and inputs

Each decision that [system name] makes reads one state: the content the model
evaluates. Nothing outside the state affects the decision. This page describes what
the state contains, what's excluded, and the limits that apply.

## Who this page is for

This page is for developers who prepare the text that [model name] reads.

## Prerequisites

Before you begin, make sure you have the following:

- A read of [About [model name]](03-concepts-overview.md)
- The text your application will send as state, with examples of real inputs

## What the state contains

[System name] sends the state as [a JSON object | a single string | a list of
messages]. The following table lists each field:

| Field | Source | Example | Why it's included |
|---|---|---|---|
| `[subject]` | [Support inbox] | `"Invoices bouncing"` | [The customer's request] |
| `[message]` | [Support inbox] | `"Every invoice I send bounces."` | [The customer's request] |
| `[plan]` | [Accounts database] | `"Business"` | [Some decisions depend on the customer's plan] |
| `[policy]` | [Documentation page] | `"Duplicate charges are refunded."` | [The rule the decision is checked against] |

The following example shows a complete state:

```json
{
  "[subject]": "[Example]",
  "[message]": "[Example]",
  "[plan]": "[Example]"
}
```

## Why the state is limited to these fields

[System name] includes only the content each decision needs. Extra detail that
doesn't relate to the questions makes decisions less accurate, and current
information from [your records] is more reliable than what the model learned during
training.

## Excluded content

The following content is deliberately excluded from the state:

| Content | Why it's excluded |
|---|---|
| [Payment card numbers] | [Not needed for the decision, and sensitive] |
| [Internal agent notes] | [Could bias the decision] |

## Missing and long content

[System name] handles missing and long content as follows:

- **Missing fields:** [behavior, for example "The field is omitted. Decisions that
  depend on it usually have lower confidence and go to a person."]
- **Long content:** [behavior, for example "Messages longer than the input limit are
  shortened from the middle, keeping the first and the latest message."]

## Format and language

The state must be text: [a string, a JSON object, or a list of strings]. [System
name] doesn't send [images, audio, video, or attachments]; [what happens to items
that contain only those].

[State the languages the inputs arrive in, and any known accuracy differences for
languages other than the model's primary training language.]

## Next steps

To continue, see the following pages:

- To see the questions asked about the state, see
  [Questions and criteria](07-questions-and-criteria.md).
- For input size limits, see [Limits](09-reference.md#limits).
