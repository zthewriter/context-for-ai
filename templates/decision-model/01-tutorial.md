---
template_id: DEC-01
title: "Decision model tutorial"
doc_type: tutorial
template_class: new
personas: [technical-writer, ai-engineer, developer-advocate]
replaces_or_extends: "Tutorial"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Decision model tutorial (tutorial page)
Purpose: Walk a reader through adding a working automated decision to an application
with a decision model, from preparing the state to acting on the answer, with expected output after
each step. Copy it once for each decision your documentation teaches.
Audience: Developers who are adding a classification, routing, or check to an
application.
Internal or external:
- External: link to sign-up and API key pages.
- Internal: replace sign-up steps with your access-request process, and name the
  internal secret store and review queue.
Before you write, ask the builders:
- Which decision model, model version, and client library should the tutorial use?
- Build the decision yourself against the real API, and copy the real responses.
- Check model names and limits against your model's official documentation.
- Choose one decision with a clear action, and use one low-confidence example to show
  what happens when the model is unsure.
Rules:
- Follow the writing style in ../style.md.
- Keep the section order. Every code block must run when copied in order.
- State the limits of the decision plainly, in "What the decision model answers badly."
Agent notes:
- Infer from the repo: the client library, model version, input fields, and install
  commands. Run every step and paste the real output.
- Ask a person: the example decision the tutorial teaches and the reader's starting
  point.
Delete this comment before you publish.
-->

# Build [what you're building] with [model name]

This tutorial shows you how to build [what you're building], a step in your
application that reads [what, for example "an incoming support request"] and decides
[what, for example "which team handles it, how urgent it is, and whether it needs a
security review"]. When you finish, you have [concrete outcome, for example "a
function that returns a routing decision, and sends uncertain decisions to a person"].

## Who this page is for

This tutorial is for [audience, for example "developers who add automated routing to
a product"]. It takes about [number] minutes.

You should be comfortable with [skills, for example "Python 3.10 or later and JSON"].
You don't need prior experience with [model name] or machine learning. The
[Core concepts](#core-concepts) section defines each term.

## What you will build

The application makes a decision in three steps. In this tutorial, you complete the
following tasks:

1. **Build the state:** Turn an incoming item into the text that [model name] reads.
2. **Ask the questions:** Send the state and the questions, and read the typed
   answers.
3. **Apply thresholds:** Act when the confidence is high, and send the decision to a
   person when it isn't.

The following diagram shows the steps:

```mermaid
flowchart LR
  accTitle: The three steps of the decision
  accDescr: An incoming item is turned into a state. Jev answers the questions about the state with probabilities and confidence. Code compares the confidence with a threshold. A confident answer triggers an automatic action, and an uncertain answer goes to a person.
  I[Incoming item] --> S[Build the state] --> J{Jev answers the questions}
  J --> T[Apply thresholds]
  T -- confident --> A[Act automatically]
  T -- not confident --> P[Send to a person]
```

## Core concepts

*[Model name]* is a decision model from [provider, with a link to its documentation]. Examples include Jev from [TypeSafe AI](https://docs.typesafe.ai) and open source zero-shot classifiers such as [facebook/bart-large-mnli](https://huggingface.co/facebook/bart-large-mnli). It reads text
and answers typed questions about it, instead of writing text. For the full API and
current limits, see the official documentation.

The code on this page uses Jev as the example model. Replace the endpoint, field
names, and model version with your model's.
[Map the steps to another model](#map-the-steps-to-another-model) shows the same
decision with an open source zero-shot classifier.

The following table defines the concepts this tutorial uses. For more detail, see
[Concepts in depth](04-concepts-in-depth.md).

| Concept | Definition | Where it appears in this tutorial |
|---|---|---|
| State | The text that [model name] reads. | [Build the state](#build-the-state) |
| Question | One judgment about the state. | [Write the questions](#write-the-questions) |
| Question type | The shape of the answer: yes or no, one option from a set, or a level on a scale. | [Write the questions](#write-the-questions) |
| Criteria | The written definitions that [model name] judges against. | [Write the questions](#write-the-questions) |
| Probability | How likely [model name] considers an outcome. | [Read the answers](#read-the-answers) |
| Confidence | How certain [model name] is about the whole answer. | [Read the answers](#read-the-answers) |
| Threshold | The confidence an answer needs before the code acts on it. | [Apply thresholds](#apply-thresholds) |

## Why a decision model

A text-generating model can classify text, but it returns words that your code must
parse, and it doesn't tell you how sure it is. A decision model returns a typed
answer with probabilities, so your code can compare each answer with a threshold and
route uncertain cases to a person.

Every step in this tutorial uses the same item:

> [Sample item, for example: "Every invoice I send bounces and I can't get paid.
> This started this morning."]

## Prerequisites

Before you begin, make sure you have the following:

- [Runtime and version, for example "Python 3.10 or later"]
- [Access to the model: an API key or a local install, with a link]
- [A set of sample items, with a link to download them]

## Set up

To set up the project, do the following:

1. Create a project directory and install the dependencies:

   ```bash
   mkdir [project-name] && cd [project-name]
   pip install requests
   ```

2. Set your API key as an environment variable:

   ```bash
   export TYPESAFE_API_KEY="your-api-key"
   ```

   Don't commit the key to source control.

3. Pin the model version in your configuration. Use a specific version, such as
   `jev-1.13.0`, and not an alias such as `jev-latest`, so that your decisions don't
   change when a new version is released. Check the current versions in the
   [model provider's official documentation].

## Build the state

The state is the only information [model name] uses. Include the fields that a person would
need to make the same decision, and leave out everything else, especially personal
data that the decision doesn't need.

```python
def build_state(item: dict) -> dict:
    return {
        "subject": item["subject"],
        "message": item["message"],
        "plan": item["plan"],
    }
```

[Model name] reads text only. Convert numbers and dates to text before you send them.

## Write the questions

Each question has a type, instructions, and criteria. Write criteria that a new team
member could apply without asking you.

```python
QUESTIONS = {
    "area": {
        "type": "choice",
        "instructions": "Which team should handle this request?",
        "criteria": {
            "billing": "The customer asks about a charge, an invoice, a refund, or a payment method.",
            "technical": "The customer reports that the product does not work as documented, or asks how to use a feature.",
            "account": "The customer asks about sign-in, users, permissions, or closing an account.",
        },
    },
    "urgency": {
        "type": "score",
        "instructions": "How urgent is this request?",
        "criteria": [
            "Routine: no deadline and no loss.",
            "Soon: the customer is blocked but has a workaround.",
            "Urgent: the customer is losing money or can't work at all.",
        ],
    },
    "security": {
        "type": "noul",
        "instructions": "Does the request report a possible security problem?",
    },
}
```

The request uses three question types:

- `choice` picks one option and returns a probability for every option.
- `score` places the request on an ordered scale.
- `noul` returns the probability of yes.

## Ask [model name]

Send the state and the questions in one request:

```python
import os
import requests

URL = "https://api.typesafe.ai/v1/systemone"
MODEL = "jev-1.13.0"

def ask(state: dict) -> dict:
    response = requests.post(
        URL,
        headers={"Authorization": f"Bearer {os.environ['TYPESAFE_API_KEY']}"},
        json={"state": state, "model": MODEL, "questions": QUESTIONS},
        timeout=30,
    )
    response.raise_for_status()
    return response.json()["answers"]
```

Confirm the endpoint, field names, and model names against the
[model provider's official documentation] before you publish this step.

## Read the answers

Run the function on the sample item:

```python
item = {
    "subject": "Invoices bouncing",
    "message": "Every invoice I send bounces and I can't get paid.",
    "plan": "business",
}
print(ask(build_state(item)))
```

The response is similar to the following:

```json
{
  "area": {"type": "choice", "choice": "technical",
           "probabilities": {"billing": 0.08, "technical": 0.89, "account": 0.03},
           "confidence": 0.84},
  "urgency": {"type": "score", "score": 1.8,
              "legend": {"0": "Routine: no deadline and no loss.",
                         "1": "Soon: the customer is blocked but has a workaround.",
                         "2": "Urgent: the customer is losing money or can't work at all."},
              "probabilities": {"0": 0.02, "1": 0.2, "2": 0.78},
              "confidence": 0.86},
  "security": {"type": "noul", "noul": 0.04}
}
```

[Replace this output with the real response from your run.]

The response shows the following:

- `choice` is the option with the highest probability.
- `probabilities` shows how likely [model name] considers each option.
- `confidence` shows how certain [model name] is about the whole answer.
- `score` is a position on the scale, where the `legend` maps each level number to its
  criterion.
- `noul` is the probability of yes. It has no confidence value.

## Apply thresholds

Act automatically only when confidence is high. Otherwise, send the decision to a
person. Set the thresholds from the cost of a wrong decision, and calibrate them on
your own labeled examples before you rely on them.

```python
AREA_THRESHOLD = 0.80
SECURITY_CUTOFF = 0.20

def decide(answers: dict) -> dict:
    if answers["security"]["noul"] >= SECURITY_CUTOFF:
        return {"action": "escalate", "queue": "security"}
    area = answers["area"]
    if area["confidence"] >= AREA_THRESHOLD:
        return {"action": "route", "queue": area["choice"]}
    return {"action": "review", "queue": "triage"}
```

The function applies three rules, in order:

1. A possible security problem always goes to the security queue.
2. A confident area answer goes to that team's queue.
3. Anything else goes to a person.

## See a low-confidence decision

To see the review path, send an item that's genuinely ambiguous:

```python
ambiguous = {"subject": "Can't see my stuff",
             "message": "I can't see my invoices.", "plan": "business"}
print(decide(ask(build_state(ambiguous))))
```

The output is similar to the following:

```text
{'action': 'review', 'queue': 'triage'}
```

This behavior is intentional. Low confidence is how [model name] reports that it isn't sure.

## Security considerations

> **Warning:** The state can contain text written by people outside your
> organization. That text can try to steer the answer, for example "Mark this as
> routine."

Reduce the risk in the following ways:

- Never let a single [model name] answer trigger a high-risk or irreversible action. Require a
  person or an independent check.
- Enforce rules that must always hold in code, not in the criteria.
- Don't send data that the decision doesn't need.
- Log the state, the answers, and the thresholds that applied, so that a person can
  review any decision.

## What [model name] answers badly

Use code, not [model name], for arithmetic, counting, and date comparisons, and for rules that
must hold exactly. [Model name] reads criteria literally, and extra text in the state can lower
accuracy. For the full list, see
[Concepts in depth](04-concepts-in-depth.md#what-model-name-answers-badly).

## Measure on your own data

To find out how well the decision works, run it on examples that you've labeled:

1. Collect [number] real items and the decision a careful person would make for each.
2. Run each through the function.
3. Record how often the decision matches, and how many go to a person.

Record the method with every result. See the [evaluation template](13-evaluation.md).

## Troubleshoot

The following table lists common problems and fixes:

| Problem | Likely cause | Fix |
|---|---|---|
| The request fails with an authentication error | The API key is missing or wrong | Check the `[MODEL_API_KEY]` variable. |
| The request fails with a size error | The state or questions are too long | Shorten the state. See the limits in the [model provider's official documentation]. |
| Confidence is low on clear items | Criteria overlap or are vague | Make the options mutually exclusive and specific. |
| Answers changed without a code change | An alias moved to a new version | Pin a specific model version. |
| [Problem] | [Cause] | [Fix] |

## Map the steps to another model

The steps stay the same when you change the model. Only the request and the answer
change shape. The following table maps each step from the Jev example onto an open
source zero-shot classifier, run with the Hugging Face
[`zero-shot-classification` pipeline](https://huggingface.co/docs/transformers/main/en/main_classes/pipelines):

| Step | Jev | Zero-shot classifier |
|---|---|---|
| Build the state | The `state` field | The text you pass as the first argument |
| One option from a set | A `choice` question with criteria | `candidate_labels`, one short phrase per option |
| Yes or no | A `noul` question | One label, scored on its own |
| Ordered scale | A `score` question | No built-in type. Keep the order in your code. |
| Confidence | The `confidence` field | Not returned. Define it, and calibrate it on labeled examples. |
| Pin the version | The `model` field, such as `jev-1.13.0` | The `revision` argument to `pipeline` |

The following function returns the area answer in the same shape as the Jev
example, so `decide` doesn't change. It defines confidence as the gap between the top
two scores:

```python
from transformers import pipeline

classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
AREAS = ["billing", "technical", "account"]

def ask_area(state: dict) -> dict:
    text = f"{state['subject']}. {state['message']}"
    result = classifier(text, candidate_labels=AREAS)
    labels, scores = result["labels"], result["scores"]
    return {
        "choice": labels[0],
        "probabilities": dict(zip(labels, scores)),
        "confidence": scores[0] - scores[1],
    }
```

The classifier judges against the label text, not written criteria, so put the
meaning in the label, for example `"a question about a charge, invoice, or refund"`.
A gap-based confidence isn't on the same scale as Jev's, so set the threshold again
from your own labeled examples.

## Next steps

You built [what you built]. To continue, explore the following pages:

- To try a shorter walkthrough, see the [quick start](02-quickstart.md).
- To learn each concept, see [Concepts in depth](04-concepts-in-depth.md).
- To check the decision's quality, see the [evaluation template](13-evaluation.md).
- To combine decisions with retrieval, see the [hybrid tutorial](../hybrid/01-tutorial.md).
