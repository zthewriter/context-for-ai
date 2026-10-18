---
template_id: MCP-02
title: "Connect a client"
doc_type: how-to
template_class: new
personas: [context-engineer, technical-writer, developer-advocate]
replaces_or_extends: "Installation guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Connect a client (task page)
Purpose: Show how to add the server to each supported MCP client, with a configuration
block to copy and a step that proves the connection works.
Audience: Developers connecting the server to their AI client, and coding agents
that edit client configuration for them.
Internal or external:
- External: cover the clients your users have. Link each client's own MCP
  documentation.
- Internal: add how to request a token and which clients the company approves.
Before you write, ask the builders:
- Which clients has the server been tested with, and on which client versions?
- What is the endpoint or launch command, and which transport does it use?
- How does a client send credentials, if the server needs them?
- What does a successful connection look like in each client?
Rules:
- Follow the writing style in ../style.md.
- Give each client its own section, so each one can be retrieved alone.
- Copy each configuration format from the client's current documentation, link that
  documentation, and test the block before you publish. Client formats change.
- Never put a real token in a configuration block. Show where the token goes and how
  to keep it out of version control.
Agent notes:
- Infer from the repo: the endpoint or launch command, the transport, and the header
  or environment variable that carries the credential.
- Ask a person: which clients and client versions were tested, and the date of the
  test.
Delete this comment before you publish.
-->

# Connect [server name] to an MCP client

This page shows you how to add [server name] to an MCP client and confirm that the
client can see its tools.

## Who this page is for

This page is for developers who want an AI client to use [server name].

## Prerequisites

Before you begin, make sure you have the following:

- An MCP client that supports [Streamable HTTP or stdio]
- [A token, with a link to [Authentication and permissions](03-authentication-and-permissions.md), if the server needs one]

## Tested clients

The steps on this page were tested on [YYYY-MM-DD] with the following clients:

| Client | Version | Configuration documentation |
|---|---|---|
| [Client name] | [Version] | [Link to the client's MCP documentation] |

## Connect [client name]

To connect [client name], add the following block to [configuration file path]:

```json
[configuration block, copied from the client's documentation and tested]
```

Replace `[TOKEN_ENV_VAR]` with the name of an environment variable that holds your
token. Don't paste the token itself into a file you commit.

## Verify the connection

To confirm the client is connected, [open the client's tool list or ask the agent a
question that needs a tool]. You see the following tools:

- `[tool_name]`
- `[tool_name]`

If no tools appear, see [Troubleshooting](10-troubleshooting.md).

## Example

The following example shows the verify step filled in for a fictional hosting
platform:

```markdown
## Verify the connection

To confirm the client is connected, ask the agent "Search the Kestrel docs for how to
roll back a deployment." The agent calls `search_docs` and cites a Kestrel guide.
```
