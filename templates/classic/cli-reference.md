---
template_id: CLS-11
title: "CLI reference"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "CLI reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: CLI reference (reference page)
Purpose: Document one command completely: synopsis, flags, examples, and exit codes.
Audience: Developers and operators who run the command, and coding agents that run it
for them.
Internal or external:
- External: document public commands and flags.
- Internal: add hidden flags that support or operators use, and mark them.
Before you write, ask the builders:
- What does the command do, and what does it change?
- Which flags exist, and what are their defaults?
- Which exit codes can it return, and what does each one mean?
Rules:
- Follow the writing style in ../style.md.
- Copy this page once per command.
- Document exit codes. Agents and scripts decide what to do next from the exit code,
  not from the text.
- Test every example and paste the real output.
Agent notes:
- Infer from the code or the command's help output: synopsis, flags, defaults, and
  exit codes.
- Ask a person: what the command is for, which flags are safe in production, and the
  meaning of exit codes the code does not explain.
Delete this comment before you publish.
-->

# [tool] [command]

`[tool] [command]` [does what, in one sentence].

## Who this page is for

This page is for [developers or operators] who [task] from the command line.

## Prerequisites

You need [the tool installed, with a link] and [any login or permission].

## Synopsis

```text
[tool] [command] [ARGUMENT] [--flag VALUE]
```

## Arguments for [tool] [command]

The following table lists the arguments:

| Argument | Required | Description |
|---|---|---|
| `[ARGUMENT]` | [Yes or No] | [Meaning] |

## Flags for [tool] [command]

The following table lists the flags:

| Flag | Default | Description |
|---|---|---|
| `[--flag]` | [Default] | [Meaning] |

## Examples of [tool] [command]

To [task], run the following command:

```bash
[tool] [command] [arguments]
```

The output looks like the following:

```text
[real output]
```

## Exit codes for [tool] [command]

The following table lists the exit codes:

| Code | Meaning |
|---|---|
| `0` | Success |
| `[1]` | [Meaning] |

## Example

The following example shows the exit codes section filled in for a fictional hosting
platform:

```markdown
## Exit codes for kestrel deploy

| Code | Meaning |
|---|---|
| `0` | The deployment finished and passed its health check |
| `2` | The image tag does not exist |
| `3` | The deployment started but failed its health check and was rolled back |
```
