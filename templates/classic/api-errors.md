---
template_id: CLS-07
title: "API errors"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "Error code reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: API errors (reference page)
Purpose: List every error the API returns, what causes it, and the fix, so a person
or an agent can act on an error without asking anyone.
Audience: Developers handling errors, support engineers, and agents that retry or
repair failed calls.
Internal or external:
- External: list errors a client can receive. Write fixes a client can perform.
- Internal: add the alert, dashboard, or log query that shows each error.
Before you write, ask the builders:
- What is the shape of an error response?
- Which error codes exist, and what triggers each one?
- Which errors are safe to retry, and with what backoff?
Rules:
- Follow the writing style in ../style.md.
- Give each error code its own heading, so an agent that searches for the code gets
  the cause and the fix together.
- Write the fix as an action: "Refresh the token and retry," not "The token expired."
Agent notes:
- Infer from the code: every error code, its status, and the condition that raises it.
- Ask a person: the recommended fix for each error, and whether retrying is safe.
Delete this comment before you publish.
-->

# [API name] errors

This page lists every error the [API name] returns, what causes it, and how to fix
it.

## Who this page is for

This page is for developers and support engineers who handle errors from the [API
name].

## Prerequisites

You don't need anything beyond an error response to use this page.

## Error response format

Every error response has the following shape:

```json
{
  "error": {
    "code": "[error_code]",
    "message": "[Human-readable message]",
    "request_id": "[request ID]"
  }
}
```

Include the `request_id` when you contact support.

## Retry guidance

The following table lists which errors are safe to retry:

| Status | Retry | How |
|---|---|---|
| `429` | Yes | Wait for the time in the `[Retry-After]` header |
| `5xx` | [Yes or No] | [Backoff rule] |
| `4xx` other than `429` | No | Fix the request first |

## `[error_code]`

- **Status:** `[status code]`
- **Cause:** [What triggers the error, in one sentence.]
- **Fix:** [What the client does, as an action.]
- **Retry:** [Safe or not safe.]

## Example

The following example shows one error entry filled in for a fictional hosting
platform:

```markdown
## `image_not_found`

- **Status:** `404`
- **Cause:** The deployment names an image tag that the build service never produced.
- **Fix:** List the app's images, copy an existing tag, and create the deployment
  again.
- **Retry:** Not safe. The same request fails the same way.
```
