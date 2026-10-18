---
template_id: HRN-03
title: "Context source map"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer]
harness_part: context
replaces_or_extends: "Content inventory"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Context source map (reference page)
Purpose: Record which kind of question each source answers, who owns the source, and
how fresh it must be.
Audience: Context engineers who connect sources, writers who own them, and agents
deciding where to look.
Internal or external:
- Internal: include internal sources and owners by team.
- External: list only sources users can see.
Before you write, ask the builders:
- Which sources does the agent read today?
- Which questions should each source answer, and which should it never answer?
- Who owns each source, and how stale may it be before answers go wrong?
Rules:
- Follow the writing style in ../style.md.
- Map questions to sources, not sources to topics. The map exists to settle which
  source wins when two could answer.
- Name a team or role as owner, never "everyone".
Agent notes:
- Infer from the harness configuration: connected sources, their URLs, and refresh
  schedules.
- Ask a person: which questions belong to which source, the owners, and freshness
  requirements.
Delete this comment before you publish.
-->

# Context source map for [agent name]

This page lists the sources [agent name] reads, which questions each one answers, who
owns it, and how fresh it must be.

## Who this page is for

This page is for the people who connect and own [agent name]'s sources.

## Prerequisites

You need a list of the sources [agent name] reads today.

## Source map

The following table maps each kind of question to the source that answers it:

| Question type | Source | Owner | Freshness requirement |
|---|---|---|---|
| [Kind of question] | [Source, with link] | [Team or role] | [Maximum age] |

## Questions no source answers

[Agent name] must say it cannot answer the following kinds of question:

- [Kind of question], because [reason].

## Example

The following example shows the map filled in for a fictional hosting platform's
docs assistant:

```markdown
| Question type | Source | Owner | Freshness requirement |
|---|---|---|---|
| How to deploy or configure | Kestrel guides | Docs team | 1 hour after publish |
| API parameters and errors | Kestrel API reference | API team | Each API release |
| Is Kestrel down right now | Kestrel status page | Operations | Live |
```
