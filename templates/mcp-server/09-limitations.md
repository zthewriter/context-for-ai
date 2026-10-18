---
template_id: MCP-09
title: "Limitations"
doc_type: concept
template_class: new
personas: [context-engineer, technical-writer]
replaces_or_extends: "Known issues"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Limitations (concept page)
Purpose: State what the server does not do, so users and agents do not rely on it for
that.
Audience: Developers deciding whether to connect the server, and agents reading this
page to decide whether to use it for a task.
Internal or external:
- External: list limits users can notice.
- Internal: add the reason for each limit and whether a fix is planned.
Before you write, ask the builders:
- What do people ask the server to do that it cannot?
- Which content or systems does it not cover?
- Which limits come from the protocol, the client, or the server itself?
Rules:
- Follow the writing style in ../style.md.
- Give each limit its own section, with what to do instead.
- Test every limit against the live server before you publish.
Agent notes:
- Infer from the server code: unsupported inputs, size caps, and sources not covered.
- Ask a person: what users ask for that the server cannot do, and what to recommend
  instead.
Delete this comment before you publish.
-->

# Limitations of [server name]

This page lists what [server name] does not do, and what to use instead.

## Who this page is for

This page is for developers deciding whether to rely on [server name] for a task.

## Prerequisites

Read the [overview](01-overview.md) first.

## [Server name] does not [limit]

[What the limit is, why it exists, and what happens if an agent tries.] Instead,
[alternative].

## Example

The following example shows one limit filled in for a fictional hosting platform:

```markdown
## Kestrel docs does not see your account

The Kestrel docs MCP server searches public guides only. It cannot read your apps,
deployments, or billing. To check a deployment, use the Kestrel console or CLI.
```
