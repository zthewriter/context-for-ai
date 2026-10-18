---
template_id: FDE-06
title: "Discovery brief"
doc_type: overview
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Requirements document"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Discovery brief (overview page)
Purpose: Record the customer's problem, systems, data, constraints, and decision
makers before anything is built, so both sides agree on what the engagement is for.
Audience: The forward deployed team, the customer's sponsor, and anyone who joins the
engagement later.
Internal or external:
- Shared with the customer: the default. Write it so the customer can correct it.
- Internal only: add commercial context, risks, and your team's assessment.
Before you write, ask the builders:
- What problem does the customer want solved, in their words?
- Which systems and data are involved, and who owns each one?
- Which constraints apply: security, compliance, budget, deadlines, or skills?
- Who decides, who approves, and who will run the system afterward?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per engagement.
- Quote the customer's own description of the problem.
- Mark every assumption as an assumption, and ask the customer to confirm it.
Agent notes:
- Infer from meeting notes or recordings the team shares: systems named, data
  sources, and stated constraints. Mark each one as needing confirmation.
- Ask a person: the problem in the customer's words, the decision makers, and
  anything said off the record that must not appear here.
Delete this comment before you publish.
-->

# Discovery brief: [customer] [engagement name]

This brief records what [customer] needs from [engagement name], the systems and data
involved, the constraints, and who decides. [Customer] reviewed it on [YYYY-MM-DD].

## Who this page is for

This page is for the forward deployed team, [customer]'s sponsor, and anyone who
joins the engagement later.

## Prerequisites

You don't need anything to read this page.

## The problem

In [customer]'s words: "[quote]."

[What the problem costs them today, if they shared it.]

## Systems involved

The following table lists the systems involved:

| System | Owner at [customer] | Role in the engagement |
|---|---|---|
| [System] | [Team or role] | [Read from, write to, or replace] |

## Data involved

The following table lists the data involved:

| Data | Location | Sensitivity | Owner |
|---|---|---|---|
| [Data] | [System] | [Level] | [Team or role] |

## Constraints

- **[Security, compliance, budget, deadline, or skills]:** [The constraint.]

## Decision makers

The following table lists who decides and approves:

| Role | Name | Decides or approves |
|---|---|---|
| [Role] | [Name] | [What] |

## Assumptions to confirm

- [Assumption.] Confirmed by: [name, or "not yet"].

## Example

The following example shows the problem section filled in for Kestrel, a fictional
hosting platform, as the customer:

```markdown
## The problem

In Kestrel's words: "Our support team answers the same hosting questions every day,
and the answers are already in our docs."
```
