---
template_id: DEC-02
title: "Decision model quick start"
doc_type: tutorial
template_class: new
personas: [technical-writer, ai-engineer, developer-advocate]
replaces_or_extends: "Quick start"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Decision model quick start (tutorial page)
Purpose: Get a reader to a first decision they can inspect, in about 10 minutes, using
one request and one question. It's shorter than the tutorial: it teaches one request
and one response.
Audience: Developers evaluating or starting with a decision step built on a decision model.
Internal or external:
- External: assume a new account, and link to sign-up and API key pages.
- Internal: list the access requests a new team member needs, with links.
How it differs from the tutorial (01-tutorial.md):
- The quick start sends one request and reads one response.
- The tutorial builds the whole decision step, with thresholds and a review path.
Before you write, ask the builders:
- What is the shortest path from a new account to a first decision?
- Run every step on a fresh account, and copy the real output.
- Check model names and the endpoint against your model's official documentation.
- Choose a sample item that produces a clear, high-confidence decision, and a second
  one that produces a low-confidence decision.
Rules:
- Follow the writing style in ../style.md.
- One action for each step. Show the expected result after each step.
- Every code sample must run when copied on its own.
Agent notes:
- Infer from the repo: setup commands, environment variable names, and the first
  request.
- Ask a person: which plans or roles can run the quick start and which keys work in
  which environment.
Delete this comment before you publish.
-->

# [Product or feature] quick start

## About this task

This quick start shows you how to send one item and one question to [model name], read the
typed answer, and see what a low-confidence answer looks like.

*Time required: [number] minutes*

### Who this quick start is for

This quick start is for developers who are new to [model name]. You should be comfortable with
[skills, for example "the command line and JSON"]. You don't need prior experience
with [model name].

### What you'll learn

In this quick start, you complete the following steps:

1. Send a state and a choice question to [model name].
2. Read the answer, including its probabilities and confidence.
3. Send an ambiguous state, and see how the answer changes.

## Concepts you'll use

*[Model name]* is a decision model from [provider, with a link to its documentation]. Examples include Jev from [TypeSafe AI](https://docs.typesafe.ai) and open source zero-shot classifiers such as [facebook/bart-large-mnli](https://huggingface.co/facebook/bart-large-mnli). It reads
text, called the *state*, and answers typed *questions* about it. Each answer has
*probabilities* for the possible outcomes, and most have a *confidence* value for the
answer as a whole. For the full definitions, see the
[concepts overview](03-concepts-overview.md).

## Who this page is for

This quick start is for developers who want to send [product or feature] a first request and read the decision it returns.

## Prerequisites

Before you begin, make sure you have the following:

- [Access to the model: an account and API key, or a local install, with a link]
- [Tools and versions, for example "curl, or Python 3.10 or later"]

Set the key as an environment variable:

```bash
export TYPESAFE_API_KEY="your-api-key"
```

## Send a request

The following request uses Jev as the example model. Replace the endpoint, field
names, and model version with your model's. For an open source classifier, see
[Map the steps to another model](01-tutorial.md#map-the-steps-to-another-model).

The following request sends one state and one choice question:

```bash
curl https://api.typesafe.ai/v1/systemone \
  -H "Authorization: Bearer $TYPESAFE_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "state": {"subject": "Invoices bouncing",
              "message": "Every invoice I send bounces and I can'\''t get paid."},
    "model": "[pinned model version]",
    "questions": {
      "area": {
        "type": "choice",
        "instructions": "Which team should handle this request?",
        "criteria": {
          "billing": "The customer asks about a charge, an invoice, a refund, or a payment method.",
          "technical": "The customer reports that the product does not work as documented.",
          "account": "The customer asks about sign-in, users, permissions, or closing an account."
        }
      }
    }
  }'
```

Confirm the endpoint and field names in the
[model provider's official documentation] before you publish this step.

## Read the answer

[Model name] returns a response similar to the following:

```json
{
  "model": "[pinned model version]",
  "answers": {
    "area": {
      "type": "choice",
      "choice": "technical",
      "probabilities": {"billing": 0.08, "technical": 0.89, "account": 0.03},
      "confidence": 0.84
    }
  }
}
```

[Replace this output with the real response from your run.]

The response shows the following:

- `choice` is the option with the highest probability.
- `probabilities` shows how likely [model name] considers each option. For a choice question,
  they add up to 1.
- `confidence` shows how certain [model name] is about the answer as a whole, from 0 to 1.

## Send an ambiguous item

Change the message to something that fits several options:

```text
I can't see my invoices.
```

Run the request again. The probabilities are closer together, and the confidence is
lower, for example:

```json
{"choice": "billing",
 "probabilities": {"billing": 0.46, "technical": 0.37, "account": 0.17},
 "confidence": 0.41}
```

[Replace this output with the real response from your run.]

A low confidence means that [model name] isn't sure. In an application, you would send this
decision to a person instead of acting on it.

## Learning summary

This quick start showed you how to do the following:

- Send a state and a typed question to [model name].
- Read an answer's probabilities and confidence.
- Recognize an uncertain answer.

To learn more about each concept, see the following pages:

| Concept | What it is | Learn more |
|---|---|---|
| State | The text [model name] reads | [State](04-concepts-in-depth.md#state) |
| Question type | The shape of the answer | [Questions and question types](04-concepts-in-depth.md#questions-and-question-types) |
| Confidence | How certain [model name] is about the answer | [Probability and confidence](04-concepts-in-depth.md#probability-and-confidence) |

## Next steps

Now that you've seen a decision, continue with the following pages:

- To build a complete decision step with thresholds, see the [tutorial](01-tutorial.md).
- To write better questions, see [Questions and criteria](07-questions-and-criteria.md).
- For every request and response field, see the [reference](09-reference.md).
