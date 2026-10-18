---
template_id: MCP-10
title: "Troubleshooting"
doc_type: how-to
template_class: new
personas: [context-engineer, technical-writer, developer-advocate]
replaces_or_extends: "Troubleshooting guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Troubleshooting (task page)
Purpose: Help users fix the three kinds of MCP server problem: the client cannot
connect, the client is refused, and the agent chooses the wrong tool or gets a weak
answer.
Audience: Developers connecting the server, support engineers, and agents diagnosing
a connection.
Internal or external:
- External: list problems users can fix, and when to contact support.
- Internal: add log queries and server-side checks.
Before you write, ask the builders:
- What do users report most often: no tools, refused, or wrong answers?
- What does each client show when the connection fails?
- Which tool descriptions have led agents to the wrong tool?
Rules:
- Follow the writing style in ../style.md.
- Group problems under connection, authentication, and tool choice. Each needs a
  different fix.
- Quote exact error messages in headings.
- Tell readers to check the client's own log first. A client that never sends a
  request leaves nothing in the server's log.
Agent notes:
- Infer from the server code: error messages, status codes, and refusal reasons.
- Ask a person: the problems reported most often and the fixes that worked.
Delete this comment before you publish.
-->

# Troubleshoot [server name]

This page lists common problems connecting to and using [server name], and how to fix
them.

## Who this page is for

This page is for developers whose client does not show [server name]'s tools, or
whose agent gets poor results from it.

## Prerequisites

You need access to your client's log. [Where common clients write it, with links.]

## Connection problems

### The client shows no tools from [server name]

- **Cause:** [The client could not reach the server, or never sent a request.]
- **Fix:** Check the client's log first. Then confirm the endpoint is
  `[endpoint]` and the transport is [transport].

## Authentication problems

### "[Exact refusal message]"

- **Cause:** [Missing, expired, or wrongly placed credential.]
- **Fix:** [Steps.]

## Tool choice problems

### The agent uses the wrong tool

- **Cause:** [Two tools have similar descriptions, or the request matches neither.]
- **Fix:** Name the tool in your request, or [server-side fix]. See
  [Choose between similar tools](04-tools-reference.md#choose-between-similar-tools).

### The agent's answer is weak or unsupported

- **Cause:** [The server returned weak results, or the content does not cover the
  question.]
- **Fix:** [Steps, and where to check what the server returned.]

## Example

The following example shows a connection problem filled in for a fictional hosting
platform:

```markdown
### The client shows no tools from Kestrel docs

- **Cause:** the token was pasted where the client expects the name of an environment
  variable.
- **Fix:** put the token in an environment variable, and put that variable's name in
  the configuration.
```
