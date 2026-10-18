---
template_id: CLS-09
title: "SDK quick start"
doc_type: tutorial
template_class: upgraded-classic
personas: [developer-advocate, technical-writer]
replaces_or_extends: "SDK quick start"
version: 1.0.0
---
<!--
SECTION TEMPLATE: SDK quick start (tutorial page)
Purpose: Get a developer from nothing to one verified call with the SDK: install,
authenticate, call, and confirm it worked.
Audience: Developers trying the SDK for the first time, and coding agents setting it
up for them.
Internal or external:
- External: use the public package name and a sandbox environment.
- Internal: add the internal package registry and test credentials process.
Before you write, ask the builders:
- What is the package name and the minimum runtime version?
- What is the simplest call that proves the setup works?
- Which environment variable does the SDK read for credentials?
Rules:
- Follow the writing style in ../style.md.
- Keep it to four steps. Link to the SDK reference for anything else.
- Run every step on a clean machine on the date in "Tested with," and paste the real
  output.
Agent notes:
- Infer from the repo: the package name, install command, minimum runtime, client
  constructor, and environment variable names.
- Ask a person: which call to use as the first call, and the sandbox signup link.
Delete this comment before you publish.
-->

# [SDK name] quick start

This quick start shows you how to install the [SDK name], authenticate, make your
first call, and confirm that it worked. It takes about [number] minutes.

## Who this page is for

This page is for [language] developers who want to call [product] from their own
code for the first time.

## Prerequisites

Before you begin, make sure you have the following:

- [Runtime and version, for example "Python 3.10 or later"]
- [An account and an API key, with links]

## Tested with

The steps on this page were run on [YYYY-MM-DD] with [SDK name] [version] and
[runtime] [version].

## Install the [SDK name]

To install the [SDK name], run the following command:

```bash
[install command]
```

## Authenticate

The [SDK name] reads your API key from the `[ENV_VAR_NAME]` environment variable. To
set it, run the following command:

```bash
export [ENV_VAR_NAME]="[API key]"
```

## Make your first call

To [do the first task], create a file named `[file name]` with the following code:

```[language]
[complete, runnable code]
```

Then run it:

```bash
[run command]
```

## Verify the result

The output looks like the following:

```text
[real output]
```

[How to confirm the call worked, for example "The app appears in the console under
**Apps**."]

## Next steps

- To learn every class and method, see the [SDK reference](sdk-reference.md).
- To build something complete, follow the [tutorial](tutorial.md).

## Example

The following example shows the authenticate step filled in for a fictional hosting
platform:

```markdown
## Authenticate

The Kestrel Python SDK reads your API key from the `KESTREL_API_KEY` environment
variable. To set it, run the following command:

    export KESTREL_API_KEY="[your API key]"
```
