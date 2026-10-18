---
template_id: MCP-04
title: "Tools reference"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer, ai-engineer]
replaces_or_extends: "API reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Tools reference (reference page)
Purpose: Index every tool the server exposes, with the one-line purpose an agent sees,
and link each tool to its full contract.
Audience: Developers and context engineers who need to know what the server can do,
and agents comparing tools.
Internal or external:
- External: list public tools.
- Internal: add tools behind feature flags, and mark them.
Before you write, ask the builders:
- Which tools does the server register, and in what order does tools/list return
  them?
- What is each tool's name, title, and description, exactly as the server sends them?
- Which tools overlap, and how should an agent choose between them?
Rules:
- Follow the writing style in ../style.md.
- Copy each tool's description exactly as the server sends it. The description is
  what the agent reads, so a paraphrase documents a tool nobody can see.
- Give each tool a full page from the tool contract template, and link it here.
  Don't copy the contract into this page.
- Record a change to a tool's name or description in the change history. It is a
  breaking change.
Agent notes:
- Infer from the server code or a tools/list response: every tool's name, title,
  description, input schema, and annotations.
- Ask a person: how an agent should choose between overlapping tools.
Delete this comment before you publish.
-->

# [Server name] tools

[Server name] exposes [number] [tools](https://modelcontextprotocol.io/specification/2026-07-28/server/tools).
This page lists each one and links to its full contract.

## Who this page is for

This page is for developers and context engineers who need to know what [server
name] can do.

## Prerequisites

Read the [overview](01-overview.md) first.

## Tools at a glance

The following table lists each tool, in the order `tools/list` returns it:

| Tool | Description sent to the agent | Contract |
|---|---|---|
| `[tool_name]` | "[Description, exactly as the server sends it]" | [Link to the tool's contract page] |

Each contract page follows the
[tool contract template](https://github.com/zthewriter/context-for-ai/blob/v1.0.0/ai-engineers/templates/tool-contract.md).

## Choose between similar tools

When two tools could answer the same request, use the following guide:

| If the agent needs | Use | Not |
|---|---|---|
| [Need] | `[tool_name]` | `[other_tool]` |

## Example

The following example shows the tools table filled in for a fictional hosting
platform:

```markdown
| Tool | Description sent to the agent | Contract |
|---|---|---|
| `search_docs` | "Search the Kestrel guides and API reference. Returns passages with links." | search_docs contract |
| `get_page` | "Return one Kestrel guide by URL." | get_page contract |
```
