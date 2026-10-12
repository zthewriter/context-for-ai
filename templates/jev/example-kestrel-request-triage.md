<!--
EXAMPLE: Jev documentation, filled in
This page combines the overview, state and inputs, questions and criteria, confidence
and actions, limitations, and evaluation templates in this folder, filled in for a
fictional product, Kestrel, a hosting platform for web apps. It shows how the section
templates fit together on one page. For a step-by-step build, see the tutorial
(01-tutorial.md).
Kestrel is fictional. The numbers in the evaluation section are invented to show the
format. Replace them with measurements from your own labeled examples, and never
publish figures without the method that produced them.
Delete this comment before you copy this page.
-->

# Request triage at Kestrel

Request triage reads each incoming support request, decides which team should handle
it, how urgent it is, and whether it reports a security problem, and then routes it.
It doesn't write replies.

## Who this page is for

This page is for support agents and team leads who work with routed requests, and for
the developers who maintain triage. It assumes no knowledge of machine learning.

## What is Jev?

Request triage uses Jev, a *decision model* from
[TypeSafe AI](https://docs.typesafe.ai). A decision model reads text and answers
typed questions about it, instead of writing text. For a definition of each concept,
see [About Jev](03-concepts-overview.md).

## Prerequisites

Before you use this page, make sure you have the following:

- The Support Lead role, to review and override decisions
- A read of the [quick start](02-quickstart.md), if you maintain triage

## What triage decides

The following table lists each decision, its outcomes, and what happens next:

| Decision | Possible outcomes | What happens next |
|---|---|---|
| Area | Billing, technical, account | The request goes to that team's queue. |
| Urgency | Routine, soon, urgent | Sets the response target: 2 days, 1 day, or 1 hour. |
| Security | A probability from 0 to 1 | At 0.20 or higher, the request goes to the security queue. |

## What triage reads

Triage reads only the following fields. It doesn't read the customer's name, email
address, or payment details.

| Field | Source | Cleaning |
|---|---|---|
| `subject` | The request form | None |
| `message` | The request form | Truncated at 4,000 characters |
| `plan` | The customer's workspace | None |

## The questions

The following table lists the questions and their criteria. The criteria are the
policy: they define what each outcome means.

| Question | Type | Instructions | Criteria |
|---|---|---|---|
| `area` | Choice | Which team should handle this request? | **billing:** A charge, invoice, refund, or payment method. **technical:** The product doesn't work as documented, or the customer asks how to use a feature. **account:** Sign-in, users, permissions, or closing an account. |
| `urgency` | Score | How urgent is this request? | **0:** No deadline and no loss. **1:** The customer is blocked and has a workaround. **2:** The customer is losing money or can't work. |
| `security` | Noul | Does the request report a possible security problem? | Not applicable. |

## Confidence and actions

The following table lists what triage does for each answer. The cutoffs were set from
the cost of a wrong decision and calibrated on labeled requests.

| Condition | Action |
|---|---|
| `security` probability is 0.20 or higher | Route to the security queue, and notify the on-call engineer. |
| `area` confidence is 0.80 or higher | Route to the team for the chosen area. |
| `area` confidence is lower than 0.80 | Route to the triage queue for a person. |
| `urgency` confidence is lower than 0.70 | Use the area's default response target. |

A request from a customer on the Enterprise plan always goes to the priority queue.
This rule is in code, not in the criteria, because it must hold exactly.

## Review a decision

To see why a request was routed as it was, do the following:

1. Open the request, and select **Routing details**.
2. Read the answers, their probabilities, and their confidence.
3. To change the routing, select **Reroute**, and choose a team.

Rerouted requests are added to the labeled examples that are used to evaluate triage.

## Limitations

Triage can be wrong in the following cases:

| Limitation | What it means for you | What to do |
|---|---|---|
| It reads the request as written | A request that implies a problem without describing it might be misrouted | Check requests that are short or vague. |
| It can't count or compare dates | "This is the third time" isn't understood as a number | Read the history yourself. |
| Customers can write anything in a request | A request can try to steer routing, for example "mark this as urgent" | The security rule and the Enterprise rule can't be changed by request text. |

## Evaluation

The following table shows how triage performed on 400 labeled requests. The figures
are invented to show the format.

| Measure | Result | What it means |
|---|---|---|
| Routed automatically | 78 percent | Requests with area confidence of 0.80 or higher |
| Correct area, among those routed automatically | 96 percent | A person agreed with the routing |
| Sent to the triage queue | 22 percent | Requests where confidence was lower |

Method: [Describe how the requests were chosen, who labeled them, when the test ran,
the model version, and what the results don't show.]

## Change history

- **[YYYY-MM-DD]:** Raised the `area` threshold from 0.75 to 0.80 after reviewing
  [number] misrouted requests. Model version unchanged.
