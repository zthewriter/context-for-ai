---
template_id: CLS-02
title: "Technical overview"
doc_type: overview
template_class: upgraded-classic
personas: [technical-writer, internal-engineer]
replaces_or_extends: "Technical overview"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Technical overview (overview page)
Purpose: Describe what a system is, who uses it, and its main parts, on one page, so
a reader can decide where to go next.
Audience: New engineers, technical writers, partner engineers, and evaluators.
Internal or external:
- External: describe the parts a customer can see or call. Leave out internal
  service names.
- Internal: name every service, its owner, and its repository.
Before you write, ask the builders:
- What problem does the system solve, and for whom?
- What are the three to seven main parts, and what does each one do?
- Which other systems does it depend on, and which depend on it?
Rules:
- Follow the writing style in ../style.md.
- Keep it to one page. Link to the architecture overview for detail.
- Give each part its own section, so each one can be retrieved alone.
Agent notes:
- Infer from the repo: the services or modules, their dependencies, and the
  interfaces between them.
- Ask a person: who the users are, the problem the system solves, and which parts
  are public.
Delete this comment before you publish.
-->

# [System name] technical overview

[System name] [what it does] for [who uses it]. This page describes its main parts
and how they fit together.

## Who this page is for

This page is for [new engineers, partners, or evaluators] who need a one-page
picture of [system name] before they read the details.

## Prerequisites

You don't need any prior knowledge of [system name] to read this page.

## What [system name] does

[Two or three sentences: the problem, the users, and the result they get.]

## Main parts of [system name]

The following table lists the main parts of [system name]:

| Part | What it does | Owner |
|---|---|---|
| [Part name] | [One sentence] | [Team] |

## [Part name]

[Part name] [what it does, in one or two sentences]. [What it receives and what it
returns.] For details, see [link to the part's reference].

## Systems [system name] depends on

The following list names the systems [system name] calls:

- **[System]:** [what [system name] uses it for]

## Where to go next

- To see how the parts connect, read the [architecture overview](architecture-overview.md).
- To start using [system name], follow the [tutorial or quick start, with a link].

## Example

The following example shows one part section, filled in for a fictional hosting
platform:

```markdown
## Build service

The Kestrel build service turns a Git push into a deployable container image. It
receives a commit reference from the webhook service and returns an image tag to
the deploy service.
```
