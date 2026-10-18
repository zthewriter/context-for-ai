---
template_id: MCP-07
title: "Server instructions"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer, ai-engineer]
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Server instructions (reference page)
Purpose: Publish the instructions text the server sends to clients, and version it
like code, because it shapes how every connected agent uses the server.
Audience: Context engineers and writers who maintain the instructions, and developers
who want to know what the server tells their agent.
Internal or external:
- External: publish the full text. Users should be able to read what the server tells
  their agent.
- Internal: add the owner, the evaluation that runs on a change, and the history.
Before you write, ask the builders:
- Does the server return instructions, and where in the code is the text defined?
- Which behaviors are the instructions meant to produce?
- Which evaluation shows the instructions work?
Rules:
- Follow the writing style in ../style.md.
- Quote the text exactly as the server sends it, in a code block.
- Record every change, with its date and evaluation result, in the change history.
- Explain each instruction's purpose in a table, so a maintainer does not delete a
  line whose reason was never written down.
Agent notes:
- Infer from the server code or a server/discover response: the exact instructions
  text and the version that sent it.
- Ask a person: the purpose of each instruction and the evaluation that tests it.
Delete this comment before you publish.
-->

# [Server name] server instructions

[Server name] sends the following instructions to every client that connects. Clients
may pass them to the agent as guidance on how to use the server.

## Who this page is for

This page is for the people who maintain [server name]'s instructions and for
developers who want to know what [server name] tells their agent.

## Prerequisites

You don't need anything to read this page.

## How the instructions are delivered

In the [MCP specification, revision 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28/schema),
a server returns its instructions in the optional `instructions` field of the
`server/discover` result. Each client decides how to use them.

## Current instructions

The following text is version [version], sent since [YYYY-MM-DD]:

```text
[Instructions text, exactly as the server sends it]
```

## Purpose of each instruction

The following table explains each instruction and how it is tested:

| Instruction | Purpose | Tested by |
|---|---|---|
| "[Instruction]" | [Behavior it produces] | [Evaluation question, with a link to [Evaluation](11-evaluation.md)] |

## Example

The following example shows the purpose table filled in for a fictional hosting
platform:

```markdown
| Instruction | Purpose | Tested by |
|---|---|---|
| "Cite the guide URL for every fact." | Readers can check each answer | Q-03, Q-07 |
| "If no passage answers the question, say so." | Prevents guessed answers | Q-12 |
```
