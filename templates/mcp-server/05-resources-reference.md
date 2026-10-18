---
template_id: MCP-05
title: "Resources reference"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer]
replaces_or_extends: "Content inventory"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Resources reference (reference page)
Purpose: Document each resource the server exposes: its URI or URI template, what it
contains, its format, and how fresh it is.
Audience: Developers and context engineers who decide what context an agent can read,
and agents choosing a resource.
Internal or external:
- External: list public resources.
- Internal: add the source system and owner for each resource.
Before you write, ask the builders:
- Which resources and resource templates does the server list?
- What does each one contain, and in which MIME type?
- How often does the content change, and what ttlMs does the server return?
- Does the server send change notifications for a resource?
Rules:
- Follow the writing style in ../style.md.
- Give each resource its own section, so each one can be retrieved alone.
- State freshness for every resource. An agent that reads stale context answers
  confidently from it.
- Delete this page if the server exposes no resources, and say so on the overview.
Agent notes:
- Infer from the server code or a resources/list and resources/templates/list
  response: URIs, URI templates, names, MIME types, and ttlMs values.
- Ask a person: the source of each resource, how often it changes, and who owns it.
Delete this comment before you publish.
-->

# [Server name] resources

[Server name] exposes the following
[resources](https://modelcontextprotocol.io/specification/2026-07-28/server/resources),
which a client can read as context.

## Who this page is for

This page is for developers and context engineers who decide what context an agent
can read from [server name].

## Prerequisites

Read the [overview](01-overview.md) first.

## Resources at a glance

The following table lists each resource and resource template:

| URI or URI template | Contents | MIME type | Freshness |
|---|---|---|---|
| `[scheme://path]` | [What it contains] | `[text/markdown]` | [How often it changes] |

## [Resource name]

- **URI:** `[scheme://path]` or **URI template:** `[scheme://path/{id}]`
- **Contents:** [What it contains, in one sentence.]
- **MIME type:** `[type]`
- **Source:** [Where the content comes from.]
- **Freshness:** [How often it changes, and the `ttlMs` value the server returns.]
- **Change notifications:** [Whether the server sends updates through a
  `resourceSubscriptions` subscription.]

## Example

The following example shows one resource filled in for a fictional hosting platform:

```markdown
## Kestrel guide

- **URI template:** `kestrel-docs://guides/{slug}`
- **Contents:** one Kestrel hosting guide, as Markdown.
- **MIME type:** `text/markdown`
- **Source:** the published Kestrel docs site.
- **Freshness:** refreshed within one hour of publishing. The server returns a
  `ttlMs` of 3600000.
- **Change notifications:** not sent.
```
