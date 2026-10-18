---
template_id: FDE-03
title: "Sample and tutorial"
doc_type: tutorial
template_class: new
personas: [forward-deployed-engineer, developer-advocate, technical-writer]
replaces_or_extends: "Tutorial"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Sample and tutorial (tutorial page)
Purpose: Give a reader a short path they can run, with output they can check.
Audience: A customer engineer or a forward deployed engineer on a new account.
Internal or external:
- External: every command must work with the public sample, or with placeholders you have defined.
- Internal: you may point at a private repository. Say who can open it.
Before you write, ask the builders:
- What is the smallest run that proves the path works?
- What does success look like on the screen?
- Which values must the reader replace?
Rules:
- Follow the writing style in ../../templates/style.md.
- One path. If the reader can get lost, the sample is two samples.
- Show the expected output after the command that produces it.
- Use fake data. Do not paste a real customer record.
Agent notes:
- Infer from the sample repo: install commands, versions, and file layout. Run every
  step on a clean machine and paste the real output.
- Ask a person: the use case the sample shows and whether customer data may appear in
  it. It must not.
Delete this comment before you publish.
-->

# Sample: [what the reader will have running]

This page walks you from a clean environment to [observable outcome]. It follows
the [reference architecture](reference-architecture.md). When you finish, you
can point at the output and say the path works.

## Who this page is for

This page is for an engineer who has not seen this path on an account before.

## Prerequisites

Before you begin, make sure you have the following:

- [Tool and version, for example "Python 3.12"]
- [Credential type, without a real secret]
- About [number] minutes

## Run the sample

The following steps use fake values. Replace each bracket.

1. Clone [repository or "the sample folder"] and enter it.
2. Set [variable name] to [what it means]. Do not commit the value.
3. Run the following command:

   ```text
   [command with placeholders]
   ```

   You should see the following:

   ```text
   [expected output, short enough to compare by eye]
   ```

4. Open [where the outcome appears] and confirm [the check].

## If the output does not match

Check the following before you change the sample:

- [Variable name] points at the fake source, not a production system.
- The version of [tool] matches the prerequisite.
- You are on the path in the reference architecture, not a later variant.

The failure modes that still happen after those checks are listed in
[the limitations note or the troubleshooting page].
