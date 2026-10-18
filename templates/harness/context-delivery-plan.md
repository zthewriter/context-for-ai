---
template_id: HRN-06
title: "Context delivery plan"
doc_type: decision
template_class: new
personas: [context-engineer, technical-writer, developer-advocate]
harness_part: context
replaces_or_extends: "Content strategy"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Context delivery plan (decision page)
Purpose: Decide, for each audience, which channel delivers your documentation as
context, in which format, what triggers a refresh, and how usage is observed.
Audience: Context engineers, writers, and developer advocates planning how docs reach
agents.
Internal or external:
- Internal: include internal channels and the teams that run them.
- External: list the channels customers can use.
Before you write, ask the builders:
- Which audiences use agents with your docs: customers, partners, internal teams?
- Which channels do their agents support: an MCP server, an API, llms.txt, a Markdown
  export, files in the repository, or skills?
- What triggers a refresh, and how do you know the context was used?
Rules:
- Follow the writing style in ../style.md.
- One row per audience. Two audiences on one channel still get two rows, because
  their refresh and observation needs differ.
- Every channel names how usage is observed. A channel you cannot observe is one you
  cannot fix.
Agent notes:
- Infer from the repo: existing channels such as an llms.txt file, an MCP server
  configuration, or export scripts.
- Ask a person: the audiences, which channels their agents support, and who owns
  each channel.
Delete this comment before you publish.
-->

# Context delivery plan for [product name]

This page records how [product name]'s documentation reaches each audience's agents:
the channel, the format, what triggers a refresh, and how usage is observed.

## Who this page is for

This page is for the people who decide how [product name]'s documentation is
delivered as context.

## Prerequisites

Read the [context source map](context-source-map.md) first.

## Delivery by audience

The following table lists the channel for each audience:

| Audience | Channel | Format | Refresh trigger | How usage is observed |
|---|---|---|---|---|
| [Audience] | [MCP server, API, llms.txt, Markdown export, repository files, or skills] | [Format] | [Event] | [Signal] |

## Channels considered and not chosen

The following channels were considered and not chosen:

- [Channel], because [reason].

## Example

The following example shows the plan filled in for a fictional hosting platform:

```markdown
| Audience | Channel | Format | Refresh trigger | How usage is observed |
|---|---|---|---|---|
| Customers' coding agents | MCP server | Tool results with source links | Docs publish | Tool call log |
| Any agent that fetches pages | llms.txt | Markdown | Docs publish | Server access log |
| Kestrel engineers | Repository files | AGENTS.md and skills | Pull request merge | Review comments |
```
