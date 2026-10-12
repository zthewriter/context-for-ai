<!--
SECTION TEMPLATE: Questions and criteria (reference page)
Purpose: Publish every question the model answers and the criteria it judges against.
The wording on this page is the system's behavior: changing a definition changes
every future decision.
Audience: Operators, reviewers, writers, and affected people who want to understand a
decision.
Internal or external:
- External: publish the questions and criteria, or a faithful plain-language summary
  if the exact wording is confidential.
- Internal: copy the exact configured wording, and link to the file or setting that
  defines each question.
Before you write:
- Copy each question exactly as configured.
- Check that options don't overlap, and that an explicit "other" option exists where
  an item might fit none of them.
- Check that the criteria don't contradict each other or the instructions.
- Confirm current limits with the model provider. At the time of writing, a Choice
  accepts up to 255 options and a Score accepts an ordered list of 2 to 10 levels.
Rules:
- Follow the writing style in ../style.md.
- Use one section for each question. Use the question's purpose as the heading.
- Write criteria as definitions a new team member could apply, not as labels.
Delete this comment before you publish.
-->

# Questions and criteria

This page lists every question [system name] asks about each state and the criteria
the model judges against. The model answers only these questions, and only from the
state.

[System name] uses three types of question:

| Type | Asks | Returns |
|---|---|---|
| Yes or no (`noul`) | Whether something is true | The probability that the answer is yes, from 0 to 1 |
| Choice (`choice`) | Which one option applies | The most likely option, a probability for each option, and a confidence |
| Score (`score`) | Where the state falls on an ordered scale | A weighted score, a probability for each level, and a confidence |

## Who this page is for

This page is for developers and domain experts who write the questions and criteria that Jev answers.

## Prerequisites

Before you begin, make sure you have the following:

- A read of [About Jev](04-concepts-in-depth.md#questions-and-question-types)
- The decision you want Jev to make, written as a sentence

## [Ticket area]

<!-- Choice example. -->

This question decides [what the answer controls, for example "which team's queue the
ticket goes to"].

- **ID:** `[ticket_area]`
- **Type:** Choice
- **Instructions:** "[Exact instruction text, for example "Which team should handle
  this ticket?"]"

The following table lists each option and its criteria:

| Option | Criteria |
|---|---|
| `[billing]` | [Definition, for example "Charges, refunds, invoices, or payment methods for the customer's own account"] |
| `[technical]` | [Definition, for example "The product behaves differently from its documentation, with steps the customer can describe"] |
| `[account]` | [Definition, for example "Signing in, profile, team members, or permissions"] |
| `[other]` | [Definition, for example "Anything that fits none of the preceding options, including sales questions"] |

## [Urgency]

<!-- Score example. -->

This question decides [what the answer controls, for example "the response target"].

- **ID:** `[urgency]`
- **Type:** Score
- **Instructions:** "[Exact instruction text]"

Score levels are an ordered list, not named options. Answers refer to each level by
its position, starting at 0, and the score is a weighted value that can fall between
levels. The following table lists each level and its criteria:

| Level | Criteria |
|---|---|
| 0 | [Lowest level, for example "A question or request with no deadline"] |
| 1 | [Definition] |
| 2 | [Highest level, for example "The customer can't send invoices or get paid"] |

## [Refund requested]

<!-- Yes-or-no example. Criteria are optional for this type. -->

This question decides [what the answer controls].

- **ID:** `[refund_requested]`
- **Type:** Yes or no
- **Instructions:** "[Exact instruction text, for example "Is the customer asking for
  a refund?"]"
- **Yes means:** [Optional definition]
- **No means:** [Optional definition]

## Questions that depend on other answers

[System name] answers all questions in one request independently: no answer can see
another answer. [If a decision depends on another decision's result, describe the
order and say that the dependent question is sent in a separate request. If no
questions depend on each other, delete this section.]

## Who can change these questions

[State the owner, the review process, and where changes are recorded.] Every change to
a question or its criteria is recorded in the [change history](14-change-history.md),
because it changes future decisions.
