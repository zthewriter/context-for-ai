---
template_id: CLS-05
title: "API overview"
doc_type: overview
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "API overview"
version: 1.0.0
---
<!--
SECTION TEMPLATE: API overview (overview page)
Purpose: Give a developer the facts that apply to every endpoint: base URLs,
versioning, authentication, rate limits, and conventions.
Audience: Developers integrating with the API, and coding agents generating client
code.
Internal or external:
- External: list public base URLs and limits only.
- Internal: add internal environments, service discovery names, and on-call contacts.
Before you write, ask the builders:
- What are the base URLs for each environment?
- How is the API versioned, and how long is an old version supported?
- What are the rate limits, and what does a client see when it exceeds one?
- Which conventions apply everywhere: pagination, dates, IDs, and errors?
Rules:
- Follow the writing style in ../style.md.
- Give each convention its own section, so an agent that retrieves one gets the whole
  rule.
- Link to the endpoint reference instead of repeating per-endpoint details.
Agent notes:
- Infer from the code or the OpenAPI description: base paths, versioning scheme,
  pagination parameters, and date formats.
- Ask a person: production base URLs, rate limits, and the version support policy.
Delete this comment before you publish.
-->

# [API name] overview

The [API name] lets you [what developers can do]. This page lists the facts that
apply to every endpoint.

## Who this page is for

This page is for developers who call the [API name] from their own code.

## Prerequisites

To call the [API name], you need [an account and an API key, with links]. See
[Authentication](authentication.md).

## Base URLs

The following table lists the base URL for each environment:

| Environment | Base URL |
|---|---|
| [Production] | `[https://api.example.com/v1]` |
| [Sandbox] | `[https://sandbox.api.example.com/v1]` |

## Versioning

The [API name] puts the version in [the path, a header, or a date parameter]. A
version is supported for [period] after its successor is released. Breaking changes
appear in the [release notes](release-notes.md).

## Authentication summary

Every request needs [credential type] in the `[header name]` header. For details, see
[Authentication](authentication.md).

## Rate limits

The [API name] allows [number] requests per [period] per [key, account, or IP
address]. When a client exceeds the limit, the API returns `[status code]` with a
`[header name]` header that states when to retry.

## Pagination

List endpoints return [number] items by default and at most [number]. To get the next
page, pass the `[parameter]` value from the previous response.

## Conventions

The following table lists conventions that apply to every endpoint:

| Convention | Rule |
|---|---|
| Dates and times | [Format, for example "RFC 3339 in UTC"] |
| IDs | [Format, for example "prefixed strings such as `app_123`"] |
| Errors | [Shape, with a link to [API errors](api-errors.md)] |

## Example

The following example shows the rate limits section filled in for a fictional hosting
platform:

```markdown
## Rate limits

The Kestrel API allows 600 requests per minute per API key. When a client exceeds the
limit, the API returns `429` with a `Retry-After` header that states how many seconds
to wait.
```
