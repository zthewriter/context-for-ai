<!--
SECTION TEMPLATE: Jev concepts in depth (concept page)
Purpose: Explain each Jev concept in enough depth that a reader can make a design
decision: what it is, the options, how to choose, and what to document about your
own choice.
Audience: Developers and technical writers who have read the concepts overview.
Internal or external: Both.
Before you write:
- Verify every limit and model name against https://docs.typesafe.ai, and run the
  worked examples against the real API.
- Replace the example values with ones from your own decision.
Rules:
- Follow the writing style in ../style.md.
- Each concept section has the same shape: definition, why it matters, options, how
  to choose, what to document.
- Describe what the model answers badly as plainly as what it answers well.
Delete this comment before you publish.
-->

# Concepts in depth

This page explains each core Jev concept in the order that a request uses them. For
short definitions, see the [concepts overview](03-concepts-overview.md).

## Who this page is for

This page is for developers who are designing a decision with Jev, and for writers
who document the design. You should have read the
[concepts overview](03-concepts-overview.md).

## State

The *state* is the text that Jev reads. Jev decides only from the state. It has no
access to your database, your users, or anything you leave out.

### Why it matters

The state sets the ceiling for the decision. If the fact that matters isn't in the
state, Jev can't use it, and it won't tell you that it's missing.

### Options

The state can take any of the following forms:

| Form | Example | Use when |
|---|---|---|
| String | `"Every invoice I send bounces."` | The content is one block of text |
| JSON object | `{"subject": "...", "plan": "enterprise"}` | The content has named fields |
| List of strings | `["First message", "Second message"]` | The content is a sequence, such as a conversation |

The state must be text. Convert numbers, dates, and other values into text before you
send them.

### How to choose

Send the fields that a human reviewer would need to make the same decision, and no
more. Irrelevant fields can distract the model. Give fields descriptive names, because
the names are part of the text that Jev reads.

### What to document

List each field in the state, where it comes from, how you clean it, and which data
you remove before sending. See [State and inputs](06-state-and-inputs.md).

## Questions and question types

A *question* is one judgment that Jev makes about the state. A request can contain
several questions, and each has a *type* that sets the shape of its answer.

### Why it matters

The type decides what your code can do with the answer. A yes-or-no question can
gate an action. A choice question can route. A score question can prioritize.

### Options

The following table compares the three question types:

| Type | Question it fits | Answer contains | Limits |
|---|---|---|---|
| Noul | Is this true? | A probability of yes, from 0 to 1. No confidence value. | One statement for each question |
| Choice | Which one of these? | The chosen option, a probability for every option, and a confidence value | Up to 255 options |
| Score | How much, on this scale? | A score, a legend that maps each level number to its criterion, a probability for each level, and a confidence value | 2 to 10 ordered levels |

### How to choose

Pick the type from the action that follows:

- Use Noul when the action is a yes-or-no gate, such as "contains a refund
  request."
- Use Choice when each option leads to a different action, such as a team queue.
- Use Score when the options form a scale and the order matters, such as urgency.

Don't use Choice for an ordered scale, because Choice treats the options as unrelated
and loses the order.

### What to document

For each question, state its type, the decision it supports, and the action that
follows each outcome. See [Questions and criteria](07-questions-and-criteria.md).

## Criteria

*Criteria* are the written definitions that Jev judges against. For a Choice
question, they define each option. For a Score question, they define each level in
order.

### Why it matters

Jev reads criteria literally. Vague criteria give vague, inconsistent answers, and
criteria that overlap or contradict each other lower confidence.

### Options

The following table shows weak and strong criteria for the same Choice question:

| Weak | Strong |
|---|---|
| `billing`: "Billing stuff" | `billing`: "The customer asks about a charge, an invoice, a refund, or a payment method." |
| `technical`: "Technical problems" | `technical`: "The customer reports that the product doesn't work as documented, or asks how to use a feature." |

### How to choose

Write each criterion so that a new team member could apply it without asking you.
Make the options mutually exclusive. If two options can both be true, either merge
them or ask two separate questions.

### What to document

Publish the criteria, because they're the policy. When a criterion changes, record the
date and the reason in the [change history](14-change-history.md).

## Probability and confidence

Every Jev answer carries probabilities, and most also carry a *confidence* value.

- A *probability* is how likely Jev considers one outcome, from 0 to 1. For a Choice
  question, the probabilities across all options add up to 1.
- *Confidence* is how certain Jev is about the answer as a whole, from 0 to 1.

### Why it matters

The two can disagree. For example, a request might give one option a probability of
0.55 and a low confidence, because the state was ambiguous or the criteria didn't
fit it. Treat the highest probability as a result only when confidence is high.

### How to choose

Use confidence to decide whether to act. Use probabilities to show a reviewer why the
model chose what it chose. Noul answers have no confidence value, so use the
probability itself, and test your cutoffs on labeled examples.

### What to document

Explain both numbers to your readers, with one real example of each case: confident
and clear, and uncertain and ambiguous.

## Thresholds

A *threshold* is the minimum confidence that an answer needs before your code acts on
it automatically. Below the threshold, the decision goes to a person.

### Why it matters

A threshold trades speed against errors. A low threshold automates more decisions and
lets more mistakes through. A high threshold sends more decisions to people.

### How to choose

Set the threshold from the cost of a wrong decision, not from a default:

| Cost of a wrong decision | Example | Threshold |
|---|---|---|
| Low, easy to undo | Tagging a request | Lower |
| Moderate | Routing to a team | Higher |
| High, hard to undo | Closing an account | Highest, or always send to a person |

Then calibrate the thresholds on labeled examples from your own data: count how many
decisions are right at each threshold, and how many go to people.

### What to document

State each threshold, who set it, the date, and the evidence. See
[Confidence and actions](08-confidence-and-actions.md).

## Model versions

Jev is released in versions. Aliases such as `jev-latest` and `jev-preview` move to
newer releases over time. A specific version, such as `jev-1.13.0`, doesn't move.

### Why it matters

An alias can start pointing to a new version, and the same state might then produce a
different answer. That shift can move an answer across your threshold without any
change on your side.

### How to choose

Pin a specific version in production. Test a new version on your labeled examples
before you change the pin.

### What to document

State which version you use, when you last changed it, and your upgrade process.
Check the current model names at the
[official documentation](https://docs.typesafe.ai).

## Limits

The request is limited in size. At the time of writing, the state plus the longest
question can't exceed 32,000 tokens, and the state plus all questions can't exceed
64,000 tokens. Confirm the current limits in the
[official documentation](https://docs.typesafe.ai).

When you document your own application, state the largest state you send, and what
happens when a state is too long: truncate it, summarize it, or send the decision to a
person.

## What Jev answers badly

A decision model isn't the right tool for every judgment. Document the following
limits for your readers, and test your own decision against each:

| Limit | What happens | What to do instead |
|---|---|---|
| Literal reading | It follows the wording of the criteria, and can miss intent | Write criteria in the words your content uses |
| Arithmetic, counting, and dates | Answers might be wrong | Compute in code, and pass the result as state |
| Indirection | Facts that need several inferences might be missed | State the fact in the state |
| Irrelevant context | Extra text lowers accuracy | Send only the fields that matter |
| Adversarial text | Text in the state can try to steer the answer | Treat the state as untrusted, and don't let one answer trigger a high-risk action alone |
| Contradictory criteria | Confidence drops | Make the options mutually exclusive |
| Structural invariants | It can't guarantee a rule such as "exactly one of these" | Enforce the rule in code |
| Generation | It doesn't write text | Use a text-generating model |

## Measure on your own data

Before you rely on a decision, run it against examples that you've labeled yourself.
General claims about a model don't tell you how it behaves on your content.

1. Collect at least [number] real examples, covering the common cases and the
   ambiguous ones.
2. Label each with the decision a careful person would make.
3. Run them through Jev and compare.
4. Record the method, the results, and the date. See
   [Evaluation](13-evaluation.md).

## Related pages

For more information, see the following pages:

- [Concepts overview](03-concepts-overview.md)
- [Reference](09-reference.md)
- [Limitations](11-limitations.md)
