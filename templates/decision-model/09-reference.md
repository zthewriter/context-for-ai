---
template_id: DEC-09
title: "Reference"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "API reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Reference (reference page)
Purpose: List every request field, response field, answer type, error, and limit,
with exact names and types.
Audience: Developers.
Internal or external:
- External: document your own system's interface. If your system passes requests
  straight to the model, document only the fields your readers set.
- Internal: add where each value is configured and the model version in use.
Before you write, ask the builders:
- Which request and response fields does [product] send and read, and for which model
  version?
- The field names in this template match your model's request and response format (the examples use the decision model's) at the
  time of writing. Confirm every name, type, and limit against the model provider's
  current API reference before you publish.
- Test every example.
Rules:
- Follow the writing style in ../style.md.
- Use tables. Keep descriptions to one or two sentences.
- Write names exactly as they appear in code, in code font.
Agent notes:
- Infer from the code or the provider's API description: request and response fields,
  types, limits, and error codes.
- Ask a person: which model version this page covers and which fields are public.
Delete this comment before you publish.
-->

# [System name] reference

This page lists the request fields, response fields, answer types, errors, and limits
for [system name].

## Who this page is for

This page is for developers who call [model name].

## Prerequisites

Before you begin, make sure you have the following:

- [Access to the model: an API key or a local install, with a link]
- A working call from the [quick start](02-quickstart.md)

## Request

The following example shows a request with one question of each type:

```json
{
  "state": {"message": "Every invoice I send bounces and I can't get paid."},
  "model": "[model]",
  "questions": {
    "ticket_area": {
      "type": "choice",
      "instructions": "Which team should handle this ticket?",
      "criteria": {"billing": "[Definition]", "technical": "[Definition]", "other": null}
    },
    "urgency": {
      "type": "score",
      "instructions": "How quickly does this customer need a response?",
      "criteria": ["[Level 0]", "[Level 1]", "[Level 2]"]
    },
    "refund_requested": {
      "type": "noul",
      "instructions": "Is the customer asking for a refund?"
    }
  }
}
```

The request contains the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `state` | String, object, or array | Yes | The content the model evaluates. See [State and inputs](06-state-and-inputs.md). |
| `model` | String | Yes | The model that answers the questions. |
| `questions` | Object | Yes | A map of question IDs to questions. Each answer is returned under the same ID. |

### Question fields

Each question contains the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `type` | `noul`, `choice`, or `score` | Yes | The question type. |
| `instructions` | String, object, or array | Yes | The question to answer. An object can hold the question in one field and data it refers to in others. |
| `criteria` | Depends on `type` | Yes for `choice` and `score` | The definitions the model judges against. See the following table. |

The format of `criteria` depends on the question type:

| Type | `criteria` format | Example |
|---|---|---|
| `noul` | Optional object with `true` and `false` definitions | `{"true": "Explicitly time-sensitive", "false": "No urgency expressed"}` |
| `choice` | Object that maps each option to a definition, or to `null` | `{"billing": "Charges and refunds", "other": null}` |
| `score` | Ordered array of level definitions, lowest first | `["Calm", "Frustrated", "Very angry"]` |

## Response

The following example shows a response:

```json
{
  "model": "[model version]",
  "answers": {
    "ticket_area": {
      "type": "choice",
      "choice": "billing",
      "probabilities": {"billing": 0.88, "technical": 0.1, "other": 0.02},
      "confidence": 0.81
    },
    "urgency": {
      "type": "score",
      "score": 1.9,
      "legend": {"0": "[Level 0]", "1": "[Level 1]", "2": "[Level 2]"},
      "probabilities": {"0": 0.02, "1": 0.06, "2": 0.92},
      "confidence": 0.88
    },
    "refund_requested": {"type": "noul", "noul": 0.07}
  },
  "usage": {"input_tokens": 320, "output_tokens": 40}
}
```

The response contains the following fields:

| Field | Type | Description |
|---|---|---|
| `model` | String | The model version that answered. Record it with each decision. |
| `answers` | Object | One answer for each question, under the question's ID. |
| `usage` | Object | The number of input and output tokens used. |

### Answer types

Each answer contains the fields for its type:

| Type | Field | Type | Description |
|---|---|---|---|
| `noul` | `noul` | Number, 0 to 1 | The probability that the answer is yes. A yes-or-no answer has no confidence field. |
| `choice` | `choice` | String | The option with the highest probability. |
| `choice` | `probabilities` | Object | The probability of each option. The values add up to 1. |
| `choice` | `confidence` | Number, 0 to 1 | How certain the model is overall. |
| `score` | `score` | Number | The probability-weighted level. It can fall between levels. |
| `score` | `legend` | Object | Each level's position, as a string, mapped to its definition. |
| `score` | `probabilities` | Object | The probability of each level, keyed by position. The values add up to 1. |
| `score` | `confidence` | Number, 0 to 1 | How certain the model is overall. |

## Errors

The following table lists errors and what to do about each one:

| Code | Cause | What to do |
|---|---|---|
| `400` | [The request is invalid, for example a `choice` question with no `criteria`.] | [Check the request against the field tables on this page.] |
| `401` | [The API key is missing or invalid.] | [Check the `Authorization` header.] |
| `429` | [Too many requests.] | [Wait, and then retry with backoff.] |
| `500` | [An error occurred on the server.] | [Retry. If the error continues, follow the fallback in [Confidence and actions](08-confidence-and-actions.md).] |

## Limits

The following table lists the limits that apply. Confirm current values with the
model provider:

| Limit | Value |
|---|---|
| Input size | [For example "64,000 tokens"] |
| Options in a `choice` question | [For example "255"] |
| Levels in a `score` question | [For example "2 to 10"] |
| Input types | [For example "Text only"] |
| Requests per minute | [Value] |
