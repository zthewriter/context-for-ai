---
template_id: HRN-10
title: "Guardrails and approvals"
doc_type: operational
template_class: new
personas: [context-engineer, ai-engineer, internal-engineer]
harness_part: guardrails
replaces_or_extends: "Access control policy"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Guardrails and approvals (operational page)
Purpose: State what an agent may do alone, what needs a person's approval, and who
approves.
Audience: People who configure the agent, approvers, and the agent itself.
Internal or external:
- Internal: name approvers by role and include escalation paths.
- External: describe what the agent asks a user to confirm.
Before you write, ask the builders and your security team:
- Which actions can the agent take: read, write, spend, send, or delete?
- Which actions cannot be undone?
- Who may approve each action, and how fast must they answer?
Rules:
- Follow the writing style in ../style.md.
- Sort actions into permission levels, and use the same levels in the tool catalog.
- Any action that cannot be undone needs a person, unless you write down why not.
- State what the agent does while it waits for approval, and when no answer comes.
Agent notes:
- Infer from the harness configuration: tool annotations, approval settings, and
  blocked commands.
- Ask a person: the levels, the approvers, and what counts as irreversible here.
Delete this comment before you publish.
-->

# Guardrails and approvals for [agent name]

This page states what [agent name] may do alone, what needs a person's approval, and
who approves.

## Who this page is for

This page is for the people who configure [agent name] and the people who approve its
actions.

## Prerequisites

Read the [tool catalog](tool-catalog.md) first.

## Permission levels

The following table lists each permission level:

| Level | Examples | Approval | Approver |
|---|---|---|---|
| Read | [Actions] | None | None |
| Write | [Actions] | [None, or before each action] | [Role] |
| External | [Actions that send, spend, or delete] | Before each action | [Role] |

## While waiting for approval

[What the agent does while it waits, and what happens if no one answers within
[time].]

## Example

The following example shows the levels filled in for a fictional hosting platform's
docs assistant:

```markdown
| Level | Examples | Approval | Approver |
|---|---|---|---|
| Read | `search_docs`, `get_page` | None | None |
| Write | `open_ticket` | The user confirms the ticket text | The user |
| External | Emailing a customer | Before each action | Support lead |
```
