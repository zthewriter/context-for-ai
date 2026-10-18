---
template_id: CLS-10
title: "SDK reference"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "SDK reference"
version: 1.0.0
---
<!--
SECTION TEMPLATE: SDK reference (reference page)
Purpose: Document one class or module of an SDK: what it is for, how to create it,
and every public method with its parameters, return value, and errors.
Audience: Developers using the SDK, and coding agents writing code against it.
Internal or external:
- External: document public members only.
- Internal: add internal members that other teams call, and mark them internal.
Before you write, ask the builders:
- What is the class or module for, and when should a developer use another one?
- Which methods are public and stable?
- Which exceptions can each method raise?
Rules:
- Follow the writing style in ../style.md.
- Copy this page once per class or module.
- Generate signatures from the code where you can, and write the descriptions by hand.
- Give each method its own heading, so an agent that searches for the method name
  gets its whole entry.
Agent notes:
- Infer from the code and docstrings: signatures, parameter types, defaults, return
  types, and raised exceptions.
- Ask a person: when to use the class, which members are stable, and the meaning of
  any parameter the code does not explain.
Delete this comment before you publish.
-->

# [Class or module name]

`[ClassName]` [does what, in one sentence]. It is part of the [SDK name] [version].

## Who this page is for

This page is for developers who use `[ClassName]` in their code.

## Prerequisites

Install the [SDK name] first. See the [SDK quick start](sdk-quickstart.md).

## When to use [ClassName]

Use `[ClassName]` to [task]. To [related task], use [other class, with a link]
instead.

## Create a [ClassName]

The following code creates a `[ClassName]`:

```[language]
[constructor example]
```

The following table lists the constructor parameters:

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `[name]` | [Type] | [Yes or No] | [Default] | [Meaning] |

## [ClassName].[method_name]

`[method_name]` [does what, in one sentence].

```[language]
[signature]
```

The following table lists the parameters of `[method_name]`:

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `[name]` | [Type] | [Yes or No] | [Default] | [Meaning] |

- **Returns:** [type and meaning]
- **Raises:** `[ExceptionName]` when [condition]

## Example

The following example shows a method entry filled in for a fictional hosting
platform:

```markdown
## Deployments.create

`create` releases a built image to an environment and returns the new deployment.

- **Returns:** a `Deployment` with `status` set to `pending`.
- **Raises:** `ImageNotFoundError` when the image tag does not exist.
```
