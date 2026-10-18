---
template_id: HRN-01
title: "AGENTS.md"
doc_type: reference
template_class: new
personas: [context-engineer, internal-engineer, technical-writer]
harness_part: guides
replaces_or_extends: "CONTRIBUTING.md"
version: 1.0.0
---
<!--
SECTION TEMPLATE: AGENTS.md (reference file)
Purpose: Give a coding agent working in a repository the commands, conventions,
boundaries, and pointers it needs before it changes anything.
Audience: Coding agents, and the people who review their work.
Internal or external:
- Internal: include internal commands, environments, and who to ask.
- External (open source): keep it to what any contributor's agent may run.
Before you write, ask the builders:
- Which commands install, build, test, and lint the project?
- Which conventions does review reject most often?
- What must an agent never do here: files, branches, data, or commands?
- Where do the longer docs live?
Rules:
- Follow the writing style in ../style.md.
- Write commands an agent can run exactly as written.
- State boundaries as rules, with the reason, so an agent can apply them to cases you
  did not list.
- Link to longer docs instead of copying them. An AGENTS.md is read on every task, so
  every line costs context.
- Save the file as AGENTS.md at the repository root. The format is described at
  https://agents.md.
Agent notes:
- Infer from the repo: package scripts, CI steps, linters, the directory layout, and
  existing docs to link.
- Ask a person: boundaries, review conventions that are not written down, and who
  owns the repository.
Delete this comment before you publish.
-->

# AGENTS.md for [repository name]

This template gives you an `AGENTS.md` file for [repository name]: the instructions a
coding agent reads before it works in the repository.

## Who this page is for

This page is for the people who maintain [repository name] and write instructions for
the coding agents that work in it.

## Prerequisites

You need the commands your continuous integration runs, so the file matches what
review checks.

## The file

Copy the following block into `AGENTS.md` at the repository root and replace each
placeholder:

```markdown
# [Repository name]

[What the repository is, in one sentence.]

## Commands

- Install: `[command]`
- Build: `[command]`
- Test: `[command]`
- Lint: `[command]`

## Conventions

- [Convention, with the reason.]

## Boundaries

- Never [action], because [reason].
- Ask before [action].

## Where to find more

- [Topic]: [path or link]
```

## Example

The following example shows the file filled in for a fictional hosting platform's
docs repository:

```markdown
# Kestrel docs

The source for the Kestrel hosting guides and API reference.

## Commands

- Install: `npm ci`
- Test: `npm test`
- Lint: `npm run lint`

## Conventions

- One topic per page, because the docs assistant retrieves pages one section at a
  time.

## Boundaries

- Never edit `api/openapi.yaml` by hand, because it is generated from the API.
- Ask before deleting a page, because published links point to it.

## Where to find more

- Writing rules: `STYLE.md`
- Context sources and owners: `harness/context-source-map.md`
```
