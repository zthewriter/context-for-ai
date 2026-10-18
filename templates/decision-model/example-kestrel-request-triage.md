<!--
EXAMPLE: Decision model documentation, filled in, using Jev
This page combines the overview (DEC-05), state and inputs (DEC-06), questions and
criteria (DEC-07), confidence and actions (DEC-08), reference (DEC-09), security and
data (DEC-10), limitations (DEC-11), troubleshooting (DEC-12), evaluation (DEC-13),
and change history (DEC-14) templates in this folder, filled in for a fictional
product, Kestrel, a hosting platform for web apps. It shows how the section templates
fit together on one page. For a step-by-step build, see the tutorial (01-tutorial.md).
Kestrel is fictional. The endpoint, the numbers in the evaluation section, and the
change history are invented to show the format. Replace them with measurements from
your own labeled examples, and never publish figures without the method that
produced them.
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
see the [concepts overview](03-concepts-overview.md). Kestrel uses Jev,
and the same pages fit another decision model, such as an open source zero-shot
classifier.

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

## Reference

Developers call triage with one request. The endpoint is internal to Kestrel.

### Request

`POST https://triage.kestrel.example/v1/triage` takes the fields triage reads:

```json
{"subject": "Charged twice", "message": "My card was charged twice for October.", "plan": "pro"}
```

### Response

The response returns each answer and the route triage chose:

```json
{
  "area": {"answer": "billing", "confidence": 0.91},
  "urgency": {"answer": 1, "confidence": 0.74},
  "security": {"probability": 0.03},
  "route": "billing"
}
```

### Errors

The following table lists the errors and what triage does about each:

| Status | Code | Meaning | What happens |
|---|---|---|---|
| 400 | `missing_field` | `subject`, `message`, or `plan` is missing | Nothing is routed. Fix the caller. |
| 503 | `model_unavailable` | Jev did not answer within 5 seconds | The request goes to the triage queue for a person. |

### Limits

Triage accepts 20 requests per second. Above that, it returns 429, and the support
tool retries after 1 second.

## Security and data

The following table lists what triage keeps:

| Data | Kept | Retention | Who can read it |
|---|---|---|---|
| `subject`, `message`, `plan` | No. They stay in the support tool | Not kept by triage | Nobody, through triage |
| Answers, probabilities, and the route | Yes | 1 year | Support leads and triage developers |

Request text is written by customers, so it can try to steer triage. The urgency
criteria judge loss, not instructions, so "mark this as urgent" alone scores 0. The
security rule and the Enterprise rule run in code and cannot be changed by request
text. To report a security issue, email `security@kestrel.example`.

## Limitations

Triage can be wrong in the following cases:

| Limitation | What it means for you | What to do |
|---|---|---|
| It reads the request as written | A request that implies a problem without describing it might be misrouted | Check requests that are short or vague. |
| It can't count or compare dates | "This is the third time" isn't understood as a number | Read the history yourself. |
| Customers can write anything in a request | A request can try to steer routing, for example "mark this as urgent" | The security rule and the Enterprise rule can't be changed by request text. |

## Troubleshooting

The following table pairs each problem with its cause and fix:

| Problem | Likely cause | Fix |
|---|---|---|
| A decision is wrong, but its confidence was high | The criteria do not cover the case | Reroute it, then review the criteria for that area. |
| Too many requests go to the triage queue | A new kind of request that the criteria do not describe | Read 20 queued requests and add the missing case to the criteria. |
| Requests fail with `model_unavailable` | Jev did not answer in time | Nothing. The requests already went to the triage queue. |

If none of these fit, post the request ID in the triage developers' channel.

## Evaluation

The following table shows how triage performed on 400 labeled requests. The figures
are invented to show the format.

| Measure | Result | What it means |
|---|---|---|
| Routed automatically | 78 percent | Requests with area confidence of 0.80 or higher |
| Correct area, among those routed automatically | 96 percent | A person agreed with the routing |
| Sent to the triage queue | 22 percent | Requests where confidence was lower |

Method: 400 requests received in August 2026, one in ten sampled in order. Two
support leads labeled each request, and a third settled disagreements. The test ran
on 2026-09-10 with the Jev version pinned in the triage configuration that day. The
results don't show how triage handles kinds of requests that were rare in August.

## Change history

- **2026-09-12:** Raised the `area` threshold from 0.75 to 0.80 after reviewing 31
  misrouted requests. Model version unchanged.
