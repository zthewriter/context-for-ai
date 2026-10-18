---
template_id: MCP-06
title: "Prompts reference"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer]
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Prompts reference (reference page)
Purpose: Document each prompt the server offers: what it is for, its arguments, and
when a person should choose it.
Audience: People who use the server's prompts from their client, and context
engineers who maintain them.
Internal or external:
- External: list public prompts.
- Internal: add the owner and the evaluation for each prompt.
Before you write, ask the builders:
- Which prompts does prompts/list return?
- What does each prompt do, and which arguments does it take?
- Which arguments are required?
Rules:
- Follow the writing style in ../style.md.
- Give each prompt its own section, so each one can be retrieved alone.
- Prompts are chosen by people, usually from a menu in the client. Write the "When to
  use" line for a person, not for an agent.
- Delete this page if the server exposes no prompts, and say so on the overview.
Agent notes:
- Infer from the server code or a prompts/list response: prompt names, titles,
  descriptions, and arguments with their required flags.
- Ask a person: when to use each prompt and the result a person should expect.
Delete this comment before you publish.
-->

# [Server name] prompts

[Server name] offers the following
[prompts](https://modelcontextprotocol.io/specification/2026-07-28/server/prompts),
which you can choose from your MCP client.

## Who this page is for

This page is for people who use [server name]'s prompts from their client.

## Prerequisites

Connect [server name] to a client first. See [Connect a client](02-connect-a-client.md).

## Prompts at a glance

The following table lists each prompt:

| Prompt | When to use it |
|---|---|
| `[prompt_name]` | [Situation, in one sentence] |

## [prompt_name]

`[prompt_name]` [does what, in one sentence].

The following table lists its arguments:

| Argument | Required | Description |
|---|---|---|
| `[argument]` | [Yes or No] | [Meaning] |

**When to use it:** [Situation.] **What you get:** [Result.]

## Example

The following example shows one prompt filled in for a fictional hosting platform:

```markdown
## explain_deploy_error

`explain_deploy_error` asks the agent to explain a failed Kestrel deployment from its
log, citing the guide that covers the error.

| Argument | Required | Description |
|---|---|---|
| `log` | Yes | The deployment log text |
```
