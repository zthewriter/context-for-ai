---
template_id: AIE-02
title: "Tool contract"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer, context-engineer]
replaces_or_extends: "API reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Tool contract (reference page)
Purpose: Describe one tool an agent is allowed to call, including tools exposed through MCP.
Audience: The engineer who changes the tool, the writer who reviews the contract, and the agent that reads the description.
Internal or external:
- Internal: include the implementation owner and the log where a call appears.
- External: publish the name, inputs, outputs, and what the tool is allowed to change. Omit internal host names and secrets.
Before you write, ask the builders:
- What does the tool change, and what does it only read?
- Which arguments are required?
- What identity does the call run as?
- What does a failure look like to the agent and to a person?
- Is this tool exposed through MCP, a function call, or both?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per tool. A catalog page may link to these pages. It does not replace them.
- Write the description the agent reads in the same words as the description a person reads. If they differ, the agent and the person are using different contracts.
- Do not include a secret, a token, or a customer record.
Agent notes:
- Infer from the code: the tool name, its input schema, its output, its errors, and
  what it reads or changes.
- Ask a person: when an agent should and should not call the tool, and who approves a
  change to its name or description.
Delete this comment before you publish.
-->

# Tool contract: [tool name]

This page is the contract for [tool name]. [Agent name] may call this tool only
in the ways this page allows. The Model Context Protocol (MCP) is an open
standard for exposing tools to an agent. Use the MCP section when this tool is
exposed that way. Skip it when the tool is only a function call inside one
service.

## Who this page is for

This page is for the person who changes [tool name], the person who reviews the
change, and the agent that decides whether to call it.

## Prerequisites

Before you begin, make sure you have the following:

- The evaluation spec that cites this tool, if a release depends on the call
- Confirmation from [owner] that the tool is still shipped

## What this tool does

[One or two sentences a person and an agent can both use. Name the outcome, not the implementation.]

The tool is allowed to [read or change, and which system]. The tool is not
allowed to [action that must never happen].

## Arguments

The following table lists every argument. An argument that is not in the table
is not part of the contract.

| Argument | Required | Type | Meaning |
|---|---|---|---|
| [name] | [Yes or No] | [string, number, boolean, or object] | [What the agent must put here] |

## Result

A successful call returns [shape, in words]. The agent should treat the
following fields as facts it can show to a person:

- [Field]: [what it means]

A failed call returns [error shape]. The agent must [stop, retry, or ask a person]
when the error is [code or condition].

## Who the call runs as

The call runs as [service account or the signed-in user]. It can reach [systems].
It cannot reach [systems]. Secrets are stored in [place]. They do not appear in
this page, in prompts, or in logs.

## MCP

Use this section when the tool is an MCP tool. Delete it when it is not.

- Server: [server name]
- Tool name the agent sees: [name]
- The description field is the "What this tool does" section of this page, copied without the surrounding headings.

## Example

The following call matches the contract:

```text
[tool name]
[argument]: [value that is fake and safe to publish]
```

The following call is rejected:

```text
[tool name]
[argument]: [value the contract does not allow]
```

Reason: [one sentence].
