<!--
EXAMPLE: MCP server set, filled in
This page fills in every required MCP server template for one fictional server, the
Kestrel docs MCP server, so you can see how the pages read together. Kestrel is a
fictional hosting platform for web apps. The endpoint, scopes, and results are
written to show the templates, not to document a real server. Each section below is
one page of the documentation site, shortened to its key sections. Terms follow MCP
specification revision 2026-07-28.
Delete this comment before you copy this page.
-->

# Kestrel docs MCP server documentation, filled in

This example shows the required pages of the MCP server set filled in for the Kestrel
docs MCP server. Each section is one page, shortened to its key sections.

## Overview (MCP-01)

The following page says what the server is for:

```markdown
# Kestrel docs MCP server

Kestrel docs is an MCP server that gives AI agents search over the Kestrel hosting
guides and API reference, with a link to the guide behind each passage.

| Exposes | Name | Purpose |
|---|---|---|
| Tool | `search_docs` | Search guides and the API reference |
| Tool | `get_page` | Return one guide by URL |
| Server instructions | | How to cite and when to say no answer was found |
```

## Connect a client (MCP-02)

The following page shows the configuration and the verify step:

```markdown
# Connect a client to Kestrel docs

Add the server with the endpoint `https://mcp.kestrel.example/mcp` and the
Streamable HTTP transport. The client opens a browser to sign in to Kestrel.

## Verify the connection

Ask the agent "Search the Kestrel docs for how to roll back a deployment." The agent
calls `search_docs` and cites a Kestrel guide.
```

## Authentication and permissions (MCP-03)

The following page lists what each tool may read or change:

```markdown
# Kestrel docs authentication and permissions

Kestrel docs uses OAuth 2.1. Every tool needs the `docs:read` scope.

| Tool | Reads | Changes | Scope | `readOnlyHint` |
|---|---|---|---|---|
| `search_docs` | Indexed Kestrel guides | Nothing | `docs:read` | true |
| `get_page` | One indexed Kestrel guide | Nothing | `docs:read` | true |
```

## Tools reference (MCP-04)

The following page lists each tool with the description the agent sees:

```markdown
# Kestrel docs tools

| Tool | Description sent to the agent | Contract |
|---|---|---|
| `search_docs` | "Search the Kestrel guides and API reference. Returns passages with links." | search_docs contract |
| `get_page` | "Return one Kestrel guide by URL." | get_page contract |

## Choose between similar tools

Use `search_docs` when you have a question. Use `get_page` when you already have a
guide URL, for example from a `search_docs` result.
```

## Server instructions (MCP-07)

The following page publishes the instructions text:

```markdown
# Kestrel docs server instructions

Version 2, sent since 2026-09-21:

    Cite the guide URL for every fact.
    If no passage answers the question, say so.

| Instruction | Purpose | Tested by |
|---|---|---|
| "Cite the guide URL for every fact." | Readers can check each answer | Q-03, Q-07 |
| "If no passage answers the question, say so." | Prevents guessed answers | Q-12 |
```

## Security and data (MCP-08)

The following page states what is kept:

```markdown
# Security and data for Kestrel docs

| Data | Logged | Retention | Who can read it |
|---|---|---|---|
| Search query text | Yes | 90 days | Kestrel docs team |
| Returned passages | No | Not kept | Nobody |

## Prompt injection exposure

No tool returns third-party content. Every passage comes from guides the Kestrel
docs team publishes.
```

## Limitations (MCP-09)

The following page states what the server does not do:

```markdown
# Limitations of Kestrel docs

## Kestrel docs does not see your account

The server searches public guides only. It cannot read your apps, deployments, or
billing. To check a deployment, use the Kestrel console or CLI.
```

## Troubleshooting (MCP-10)

The following page fixes the most common problem:

```markdown
# Troubleshoot Kestrel docs

## The client shows no tools from Kestrel docs

- **Cause:** the client never finished signing in.
- **Fix:** check the client's log first, then remove and add the server again to
  restart sign-in.
```

## Evaluation (MCP-11)

The following page shows how a server change is tested before release:

```markdown
# Kestrel docs evaluation

## Question set

The 30-question golden set from the docs team. Each question records the page a
correct answer cites. Q-12 and Q-21 have no answer in the docs.

## How the evaluation runs

Every night, and on every server change, an agent connects to the staging server
and asks each question. A script checks the cited URL against the recorded page.

## Results

| Date | Right-page citations | No-answer questions |
|---|---|---|
| 2026-09-20 | 25 of 30 | 0 of 2 |
| 2026-09-21 | 25 of 30 | 2 of 2 |

## What blocks a release

Right-page citations below 24 of 30, or either no-answer question answered.
```

## Change history (MCP-12)

The following page records changes, with renames marked breaking:

```markdown
# Kestrel docs change history

## 2026-09-21

- **Changed:** server instructions version 2 adds "If no passage answers the
  question, say so."

## 2026-09-14

- **Breaking:** `search` is now `search_docs`. Update saved workflows that name the
  tool.
```
