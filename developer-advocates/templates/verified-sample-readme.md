---
template_id: DVA-01
title: "Verified sample README"
doc_type: tutorial
template_class: new
personas: [developer-advocate, technical-writer]
replaces_or_extends: "Sample README"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Verified sample README (tutorial page)
Purpose: Document a code sample whose steps were run, end to end, on a stated date
against stated versions.
Audience: Developers trying the sample, and agents that copy its steps into a
user's project.
Internal or external:
- External: the usual case. Publish with the sample.
- Internal: add the environment and accounts used to verify it.
Before you write, ask the builders:
- Which versions of the product, SDK, and runtime does the sample target?
- What does a working result look like?
- Who reruns the steps, and when?
Rules:
- Follow the writing style in ../../templates/style.md.
- Run every step yourself before you publish, and record the date and versions in
  the "Verified" line. An agent copies these steps exactly, so an unverified step
  becomes a broken project.
- Rerun the steps on each release of anything the sample depends on, and update the
  date.
- Use fake values only. Never include real keys, tokens, or hostnames.
Agent notes:
- Infer from the sample: dependencies and versions, the run command, and expected
  output.
- Ask a person: the date the steps were last run and who reruns them.
Delete this comment before you publish.
-->

# [Sample name]

[What the sample builds, in one sentence.]

**Verified:** [YYYY-MM-DD], with [product] [version], [SDK] [version], and
[runtime] [version].

## Who this page is for

This page is for developers who want a working [result] with [product].

## Prerequisites

You need the following:

- [Runtime] [version] or later
- A [product] account and [credential], stored in the `[ENV_VAR]` environment
  variable

## Run the sample

1. Clone the sample:

   ```bash
   [clone command]
   ```

2. Install dependencies:

   ```bash
   [install command]
   ```

3. Run it:

   ```bash
   [run command]
   ```

## Check that it worked

You see the following output:

```text
[Expected output]
```

## Example

The following example shows the verified line filled in for a fictional hosting
platform's sample:

```markdown
**Verified:** 2026-10-01, with Kestrel API v3, kestrel-sdk 2.4.0, and Node.js 22.
```
