---
template_id: AUD-03
title: "Developer guide"
doc_type: how-to
template_class: upgraded-classic
personas: [technical-writer, developer-advocate]
replaces_or_extends: "Developer guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Developer guide (task page)
Purpose: Help developers integrate with the system, handle every response it can
return, and debug failures.
Audience: Developers who integrate with or extend the system.
Internal or external:
- External: document the public interface only.
- Internal: add internal endpoints, environments, and log locations.
Before you write, ask the builders:
- Which outcomes can a request return, including errors and low-confidence results?
- Where can developers see logs for their own requests?
Rules:
- Follow the writing style in ../style.md.
- Every code sample must run when copied on its own.
- Link to the reference page for full field lists instead of repeating them.
Agent notes:
- Infer from the code or the OpenAPI description: the first request, the response
  fields, and every outcome a request can return.
- Ask a person: which interfaces are public and where developers can see their own
  logs.
Delete this comment before you publish.
-->

# Integrate with [system name]

This guide shows developers how to send a first request to [system name], handle
every outcome, and debug problems.

## Who this page is for

This guide is for developers who call [system name] from their own code or extend it.

## Prerequisites

Before you begin, make sure you have the following:

- [Account with API access, with a link to request it]
- [Tools and versions, for example "Python 3.10 or later"]

## Send your first request

To send your first request, do the following:

1. Get an API key from [location]. The key needs the [scope] scope.
2. Send a request. The following example sends a minimal request:

   ```bash
   curl -X POST "[endpoint]" \
     -H "Authorization: Bearer $API_KEY" \
     -H "Content-Type: application/json" \
     -d '[minimal valid body]'
   ```

A successful request returns a response similar to the following:

```json
[Real response]
```

## How a request is handled

[Describe the request path in one paragraph, and include one diagram from the
[diagram templates](https://github.com/zthewriter/context-for-ai/tree/v1.0.0/templates/diagrams). State which part generates text and which part
makes decisions.]

## Read the response

The following table lists the main response fields. For every field, see the
reference page.

| Field | Type | Meaning |
|---|---|---|
| [`answer`] | String | [The generated text] |
| [`citations`] | Array | [The passages the answer used, with URLs] |
| [`choice`] | String | [The decision result] |
| [`confidence`] | Number, 0 to 1 | [How certain the model is] |

## Handle every outcome

Your code needs to handle each of the following outcomes:

| Outcome | How you detect it | What your code should do |
|---|---|---|
| [Answered] | [Field or status] | [Show the answer and its citations.] |
| [Nothing matched] | [Field or status] | [Show a no-answer message. Don't generate one.] |
| [Low confidence] | [`confidence` lower than your threshold] | [Route to a person, or ask for confirmation.] |
| [Rate limited] | [`429`] | [Retry after the time in the `Retry-After` header.] |
| [Error] | [`4xx` or `5xx`] | [Show a message, and retry only `5xx` errors.] |

## Debug a request

[Describe how to find a request in the logs, which identifier to send to support, and
how to see which passages or criteria produced a result.]

## Versions and changes

[Describe how model, criteria, and API changes are announced, and how to pin a
version.]
