---
template_id: MCP-01
title: "MCP server overview"
doc_type: overview
template_class: new
personas: [context-engineer, technical-writer, developer-advocate]
replaces_or_extends: "Product overview"
version: 1.0.0
---
<!--
SECTION TEMPLATE: MCP server overview (overview page)
Purpose: Say what a Model Context Protocol (MCP) server is for, what it exposes, and
who should connect it, so a reader can decide in one page whether to connect it.
Audience: Developers and teams deciding whether to connect the server to an AI client,
and the agents that read this page to decide which server to use.
Internal or external:
- External: describe what the server exposes and what it does not, by public names.
- Internal: add the owner, the repository, the deployment, and the support channel.
Before you write, ask the builders:
- What job does the server do for an agent, in one sentence?
- Which tools, resources, and prompts does it expose?
- Which transport does it use, and is it hosted or run locally?
- Who should not connect it, and what should they use instead?
Rules:
- Follow the writing style in ../style.md.
- Use the MCP specification's terms: server, client, tools, resources, prompts, and
  server instructions. Link to the specification the first time each term appears.
- Name the specification revision the server implements.
Agent notes:
- Infer from the server code: the tools, resources, and prompts it registers, the
  transport, and the protocol versions it supports.
- Ask a person: who the server is for, who should not connect it, and who owns it.
Delete this comment before you publish.
-->

# [Server name] MCP server

[Server name] is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
server that gives AI agents [what it gives them, in one sentence]. Connect it to an
MCP client, such as an AI coding assistant or chat app, so the agent can [task].

## Who this page is for

This page is for [developers or teams] deciding whether to connect [server name] to
their AI client.

## Prerequisites

You don't need any prior knowledge of MCP to read this page. To connect the server,
see [Connect a client](02-connect-a-client.md).

## What [server name] exposes

The following table summarizes what [server name] exposes, using the terms in the
[MCP specification, revision 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28):

| Kind | What [server name] exposes | Reference |
|---|---|---|
| [Tools](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) | [Number] tools that [what they do] | [Tools reference](04-tools-reference.md) |
| [Resources](https://modelcontextprotocol.io/specification/2026-07-28/server/resources) | [What resources it offers, or "None"] | [Resources reference](05-resources-reference.md) |
| [Prompts](https://modelcontextprotocol.io/specification/2026-07-28/server/prompts) | [What prompts it offers, or "None"] | [Prompts reference](06-prompts-reference.md) |
| Server instructions | [What the instructions tell the agent] | [Server instructions](07-server-instructions.md) |

## Server details

The following table lists technical details of [server name]:

| Field | Value |
|---|---|
| Endpoint | `[https://mcp.example.com/server]` or [local command] |
| Transport | [Streamable HTTP or stdio] |
| Specification revisions | [Revisions the server supports, for example 2026-07-28] |
| Authentication | [Method, with a link to [Authentication and permissions](03-authentication-and-permissions.md)] |
| Owner | [Team] |

## Who should not connect [server name]

[Server name] is not for [job]. For that, use [alternative, with a link].

## Example

The following example shows the opening of a filled-in overview for a fictional
hosting platform:

```markdown
# Kestrel docs MCP server

Kestrel docs is a Model Context Protocol (MCP) server that gives AI agents search
over the Kestrel hosting guides and API reference, with a link to the guide behind
each passage.
```
