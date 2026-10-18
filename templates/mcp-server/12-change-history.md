---
template_id: MCP-12
title: "Change history"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer]
replaces_or_extends: "Release notes"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Change history (reference page)
Purpose: Record every change to the server's tools, resources, prompts, and
instructions, treating a change to a tool name or description as a breaking change.
Audience: Developers whose agents use the server, and the people who maintain it.
Internal or external:
- External: record changes connected agents can notice.
- Internal: add the pull request and evaluation run for each change.
Before you write, ask the builders:
- Which tools, resources, prompts, or instructions changed, and on what date?
- Did any tool name, description, or input schema change?
- Which specification revisions does the server support after the change?
Rules:
- Follow the writing style in ../style.md.
- List entries newest first, dated by the day they reached production.
- Mark a change to a tool name, description, or input schema as breaking. Agents
  choose tools by reading names and descriptions, so a reworded description can
  change which tool an agent calls, and a renamed tool breaks saved workflows.
Agent notes:
- Infer from the commit history: changes to tool registrations, descriptions,
  schemas, resources, prompts, and the instructions text.
- Ask a person: the production date of each change and how to describe its effect.
Delete this comment before you publish.
-->

# [Server name] change history

This page lists changes to [server name], newest first. Changes to a tool's name,
description, or input schema are marked **Breaking**.

## Who this page is for

This page is for developers whose agents use [server name].

## Prerequisites

You don't need anything to read this page.

## [YYYY-MM-DD]

- **[Breaking, New, or Changed]:** [What changed, and what connected agents or users
  should do.]

## Example

The following example shows an entry filled in for a fictional hosting platform:

```markdown
## 2026-09-14

- **Breaking:** `search` is now `search_docs`. Update saved workflows that name the
  tool.
- **Changed:** the `search_docs` description now says it returns links. Tool choice
  in the evaluation set was unchanged at 27 of 30.
```
