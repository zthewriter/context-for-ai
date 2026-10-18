---
template_id: MCP-03
title: "Authentication and permissions"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer, internal-engineer]
replaces_or_extends: "Authentication guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Authentication and permissions (reference page)
Purpose: Explain how a client authenticates to the server, which scopes exist, and
what each tool may read or change.
Audience: Developers connecting the server, security reviewers, and admins who grant
access.
Internal or external:
- External: document the methods and scopes customers use.
- Internal: add where credentials are issued and stored, and who approves access.
Before you write, ask the builders:
- Does the server use the MCP authorization flow (OAuth 2.1), a static token, or no
  authentication?
- Which scopes exist, and which tools does each scope allow?
- Which tools only read, and which change something outside the server?
- How is a credential revoked?
Rules:
- Follow the writing style in ../style.md.
- List every tool in the permissions table. A tool missing from the table is a tool
  a security reviewer cannot approve.
- Say that tool annotations such as readOnlyHint are hints for clients, not an
  enforcement mechanism. Enforcement happens on the server.
- Use obviously fake credential values in examples.
Agent notes:
- Infer from the server code: the authentication method, scope checks in each tool
  handler, and which tools write to external systems.
- Ask a person: how credentials are issued and revoked, and who approves access.
Delete this comment before you publish.
-->

# Authentication and permissions for [server name]

This page explains how an MCP client authenticates to [server name] and what each
tool is allowed to read or change.

## Who this page is for

This page is for developers who connect [server name], and for security reviewers
who approve it.

## Prerequisites

To get a credential, you need [role or account, with a link].

## Authentication method

[Server name] uses [the MCP authorization flow, based on OAuth 2.1 / a static bearer
token / no authentication]. For the protocol details, see
[Authorization](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization)
in the MCP specification, revision 2026-07-28.

## Scopes

The following table lists each scope:

| Scope | Allows |
|---|---|
| `[scope]` | [What it allows] |

## Tool permissions

The following table lists every tool, what it reads or changes, and the scope it
needs:

| Tool | Reads | Changes | Scope | `readOnlyHint` |
|---|---|---|---|---|
| `[tool_name]` | [What it reads] | [What it changes, or "Nothing"] | `[scope]` | [true or false] |

The `readOnlyHint` column shows the
[tool annotation](https://modelcontextprotocol.io/specification/2026-07-28/schema)
[server name] sends. Annotations are hints that help a client decide when to ask you
for confirmation. [Server name] enforces the permissions in this table on the server.

## Revoke a credential

To revoke a credential, [steps].

## Example

The following example shows a tool permissions row filled in for a fictional hosting
platform:

```markdown
| Tool | Reads | Changes | Scope | `readOnlyHint` |
|---|---|---|---|---|
| `search_docs` | Indexed Kestrel guides | Nothing | `docs:read` | true |
```
