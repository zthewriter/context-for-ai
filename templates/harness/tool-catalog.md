---
template_id: HRN-08
title: "Tool catalog"
doc_type: reference
template_class: new
personas: [context-engineer, ai-engineer, internal-engineer]
harness_part: tool-orchestration
replaces_or_extends: "Service catalog"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Tool catalog (reference page)
Purpose: List every tool an agent may call, link each one's contract, and state its
permission level.
Audience: Context engineers and AI engineers who add tools, and reviewers who approve
what an agent may call.
Internal or external:
- Internal: include internal tools and their owners.
- External: list the tools customers' agents can call.
Before you write, ask the builders:
- Which tools can the agent call, from which servers or APIs?
- Which tools read, which write, and which act outside your systems?
- Who owns each tool?
Rules:
- Follow the writing style in ../style.md.
- Link each tool's contract. Do not copy it, or the two will disagree.
- Use the same permission levels as the guardrails and approvals page.
Agent notes:
- Infer from the harness configuration: connected servers, tool names, and tool
  annotations.
- Ask a person: the permission level for each tool and its owner.
Delete this comment before you publish.
-->

# Tool catalog for [agent name]

This page lists every tool [agent name] may call, its contract, and its permission
level.

## Who this page is for

This page is for the people who add tools to [agent name] and approve what it may
call.

## Prerequisites

Read [Guardrails and approvals](guardrails-and-approvals.md) for the permission
levels.

## Tools

The following table lists each tool:

| Tool | Provided by | Contract | Permission level | Owner |
|---|---|---|---|---|
| `[tool_name]` | [Server or API] | [Link to its tool contract] | [Read, write, or external] | [Team or role] |

## Example

The following example shows the catalog filled in for a fictional hosting platform's
docs assistant:

```markdown
| Tool | Provided by | Contract | Permission level | Owner |
|---|---|---|---|---|
| `search_docs` | Kestrel docs MCP server | tools/search-docs.md | Read | Docs team |
| `get_page` | Kestrel docs MCP server | tools/get-page.md | Read | Docs team |
| `open_ticket` | Kestrel support API | tools/open-ticket.md | Write | Support team |
```
