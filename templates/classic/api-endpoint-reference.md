---
template_id: CLS-06
title: "API endpoint reference"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "API reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: API endpoint reference (reference page)
Purpose: Document one endpoint completely: what it does, its parameters, a request and
response, and its errors.
Audience: Developers calling the endpoint, and coding agents generating calls to it.
Internal or external:
- External: document public parameters and responses only.
- Internal: add the owning service, internal callers, and dashboards.
Before you write, ask the builders:
- What does the endpoint do, and when should a client call a different one instead?
- Which parameters are required, and what are their defaults and limits?
- Which errors can it return, and what causes each one?
Rules:
- Follow the writing style in ../style.md.
- Copy this page once per endpoint.
- Publish an OpenAPI description beside this page and keep the two in sync. Generate
  this page from it where you can, and write the descriptions by hand.
- Test every request example and paste the real response.
Agent notes:
- Infer from the code or the OpenAPI description: method, path, parameters, types,
  defaults, response fields, and status codes.
- Ask a person: when to call this endpoint instead of another, and the meaning of any
  field the code does not explain.
Delete this comment before you publish.
-->

# [Verb] [resource]

`[METHOD] [/path/{id}]` [does what, in one sentence].

## Who this page is for

This page is for developers who need to [task] with the [API name].

## Prerequisites

You need an API key with the `[scope]` scope. See [Authentication](authentication.md).

## When to use [verb] [resource]

Use this endpoint to [task]. To [related task], use [other endpoint, with a link]
instead.

## Path parameters for [verb] [resource]

The following table lists the path parameters:

| Parameter | Type | Description |
|---|---|---|
| `[id]` | [Type] | [Meaning] |

## Body parameters for [verb] [resource]

The following table lists the body parameters:

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `[name]` | [Type] | [Yes or No] | [Default] | [Meaning and limits] |

## Request example for [verb] [resource]

The following request [does what]:

```bash
curl -X [METHOD] "[https://api.example.com/v1/path/id]" \
  -H "Authorization: Bearer [API key]" \
  -H "Content-Type: application/json" \
  -d '[request body]'
```

## Response example for [verb] [resource]

A successful request returns `[status code]` and the following body:

```json
[real response body]
```

## Errors for [verb] [resource]

The following table lists the errors this endpoint returns:

| Status | Code | Cause | Fix |
|---|---|---|---|
| [Status] | `[error_code]` | [What causes it] | [What the client does] |

For every error code, see [API errors](api-errors.md).

## Example

The following example shows the "When to use" section filled in for a fictional
hosting platform:

```markdown
## When to use create a deployment

Use this endpoint to release a built image to an environment. To roll back to an
earlier release, use the promote a deployment endpoint instead.
```
