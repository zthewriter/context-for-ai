<!--
SECTION TEMPLATE: Limitations (concept page)
Purpose: Tell readers what the system can't decide reliably, what happens instead,
and which kinds of input lower accuracy. Write it early.
Audience: Everyone, including affected people.
Internal or external:
- External: describe limits in terms of what happens to the reader.
- Internal: add the evidence for each limit, such as test cases, and the issue that
  tracks it.
Before you write:
- Ask the team which decisions they would never automate, and why.
- Read the model provider's published list of known issues for the model version you
  use, and test each one that applies to your system.
- Review the decisions that reviewers reversed most often.
Rules:
- Follow the writing style in ../style.md.
- Pair every limit with what happens instead.
- Delete the failure categories that don't apply, and say why in your internal notes.
Delete this comment before you publish.
-->

# Limitations

[System name] is designed to decide [purpose]. This page lists what it can't decide
reliably, what happens instead, and the kinds of input that lower its accuracy.

## Who this page is for

This page is for developers and owners who decide whether a decision belongs with Jev.

## Prerequisites

Before you begin, make sure you have the following:

- A read of [About Jev](03-concepts-overview.md)

## What [system name] doesn't do

The following table lists what [system name] doesn't do and what happens instead:

| [System name] doesn't | What happens instead |
|---|---|
| [Write replies or explanations] | [Agents or a separate system write replies.] |
| [Decide from information that isn't in the state] | [Missing information lowers confidence, and the item goes to a person.] |
| [Read images, audio, or attachments] | [Items that contain only those go to a person.] |
| [Make final decisions about (high-stakes area)] | [It recommends, and a person decides.] |

## Input that lowers accuracy

Decision models are less accurate with certain kinds of input. The following table
lists the kinds that affect [system name] and how [system name] handles each one:

| Input | Why it's harder | How [system name] handles it |
|---|---|---|
| Criteria read too literally | The model applies the exact wording, so a definition that's too narrow excludes items that a person would include. | [Criteria are reviewed against reversed decisions every [period].] |
| Counting and arithmetic | Counting items or calculating totals is less reliable than reading. | [Totals are calculated in code and added to the state.] |
| Dates and times | Comparing dates, especially relative dates such as "last Tuesday," is less reliable. | [Dates are compared in code.] |
| References to missing information | The state refers to something it doesn't contain, such as "see my previous email." | [Decisions usually have lower confidence and go to a person.] |
| Long states with irrelevant detail | Unrelated content makes the relevant part harder to find. | [Only the fields in [State and inputs](06-state-and-inputs.md) are sent.] |
| Content written to influence the decision | Text such as "this is urgent" can affect the answer. | [See [Security and data handling](10-security-and-data.md).] |
| Contradictory criteria | Definitions that overlap or contradict the instructions produce inconsistent answers. | [Criteria are reviewed before every change.] |
| Option order | The order of options can affect close decisions. | [Options are listed in a fixed order, and close decisions have low confidence.] |
| Other languages | Accuracy is highest in the model's primary training language. | [State the languages your inputs arrive in, and the measured accuracy for each.] |
| Very short input | A message such as "help!" doesn't contain enough to decide. | [These usually have low confidence and go to a person.] |

## Options that are often confused

The following pairs of options are confused most often:

| Options | Example | What's being done |
|---|---|---|
| [`account` and `billing`] | ["I can't see my invoices," which could be either] | [Criteria are being clarified.] |

## Report a wrong decision

To report a wrong decision, [method]. [State what happens next.]
