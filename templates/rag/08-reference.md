---
template_id: RAG-08
title: "Reference"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "API reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Reference (reference page)
Purpose: List every setting, field, response element, and limit, with exact names,
types, defaults, and allowed values. Readers look things up here; they don't read it
from start to finish.
Audience: Developers and admins.
Internal or external:
- External: list only the settings and fields that customers can use.
- Internal: add internal settings, the file or service that defines each one, and
  who can change it.
Before you write, ask the builders:
- Which endpoints, parameters, and limits are public, and which API version do they
  belong to?
- Get the values from the code or configuration, not from memory. Link to the source
  of truth in internal docs.
- Test every default and limit.
Rules:
- Follow the writing style in ../style.md.
- Use tables. Keep descriptions to one or two sentences.
- Write names exactly as they appear in code, in code font.
- Delete sections that don't apply, such as "Request" for a system with no API.
Agent notes:
- Infer from the code or the OpenAPI description: endpoints, parameters, types,
  defaults, limits, and error codes.
- Ask a person: which fields are public, which are deprecated, and which API version
  this page covers.
Delete this comment before you publish.
-->

# [System name] reference

This page lists the settings, request and response fields, and limits for
[system name].

## Who this page is for

This page is for developers and administrators who configure or call [system name].

## Prerequisites

Before you begin, make sure you have the following:

- [Credentials or role needed, with a link to get them]
- A working request from the [quick start](02-quickstart.md)
- An understanding of the terms in [About retrieval-augmented generation](03-concepts-overview.md#vocabulary)

## Retrieval settings

The following settings control which passages [system name] retrieves:

| Setting | Type | Default | Description |
|---|---|---|---|
| `[max_results]` | Integer, [1] to [20] | `[5]` | The number of passages passed to the model. More passages can improve completeness but make answers slower. |
| `[sources]` | List of source IDs | All sources | Limits the search to the listed sources. |
| `[filters]` | Object | None | Limits the search to passages whose metadata matches, for example `{"product": "invoices"}`. |
| `[search_type]` | `[hybrid]`, `[semantic]`, or `[keyword]` | `[hybrid]` | How passages are matched. `[hybrid]` matches by exact words and by meaning. |
| `[include_passages]` | Boolean | `[false]` | If `true`, the response includes the text of each retrieved passage. |

## Request

<!-- Delete this section if the system has no API. -->

The following example shows a request:

```[language]
[Minimal request that sets one or two retrieval settings]
```

The request body contains the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `[question]` | String | Yes | The question to answer. |
| `[conversation_id]` | String | No | Links follow-up questions to earlier ones. |
| `[settings]` | Object | No | [Retrieval settings](#retrieval-settings). |

## Response

The following example shows a response:

```json
[Real response, abbreviated if needed]
```

The response contains the following fields:

| Field | Type | Description |
|---|---|---|
| `[answer]` | String | The generated answer. |
| `[citations]` | List | The passages the answer cites. Each item contains the following fields. |
| `[citations[].url]` | String | The address of the cited page or section. |
| `[citations[].title]` | String | The title of the cited page. |
| `[citations[].text]` | String | The cited passage. Present only if `[include_passages]` is `true`. |
| `[answerable]` | Boolean | `false` if [system name] didn't find a relevant passage. |

## Errors

The following table lists errors and what to do about each one:

| Code | Message | Cause | What to do |
|---|---|---|---|
| `[400]` | `[message]` | [Cause] | [Action] |
| `[401]` | `[message]` | [Missing or invalid API key] | [Action] |
| `[429]` | `[message]` | [Rate limit exceeded] | [Wait for the time in the `Retry-After` header, then retry.] |

## Limits

The following table lists the limits that apply to [system name]:

| Limit | Value | Notes |
|---|---|---|
| Question length | [Value] | [Notes] |
| File size | [Value] | [Notes] |
| Sources per [workspace] | [Value] | [Notes] |
| Requests per minute | [Value] | [Notes] |
| Time for new content to appear | [Value] | See [Manage content](06-manage-content.md). |

## Supported languages

[System name] answers questions in [languages]. [State what happens with other
languages, for example "Questions in other languages are answered, but retrieval is
less accurate."]
