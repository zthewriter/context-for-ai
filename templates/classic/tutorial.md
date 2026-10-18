---
template_id: CLS-12
title: "Tutorial"
doc_type: tutorial
template_class: upgraded-classic
personas: [technical-writer, developer-advocate]
replaces_or_extends: "Tutorial"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Tutorial (tutorial page)
Purpose: Teach a newcomer by having them build one complete, working thing, step by
step.
Audience: Newcomers to the product who learn by doing.
Internal or external:
- External: use a sandbox account and sample data anyone can get.
- Internal: use a shared development environment, and say how to request access.
Before you write, ask the builders:
- What is the smallest complete thing a newcomer can build?
- Which steps fail most often for newcomers?
- Which versions should the tutorial pin?
Rules:
- Follow the writing style in ../style.md.
- End in a working result the reader can see.
- Explain only what the reader needs for the next step. Link to concept pages for the
  rest.
- Run every step on a clean machine on the date in "Tested with," and paste the real
  output.
- Start each step heading with a verb, and make each step make sense on its own.
Agent notes:
- Infer from the repo: install commands, versions, and file layout. Run each step and
  paste the real output.
- Ask a person: what the tutorial should build and the reader's starting point.
Delete this comment before you publish.
-->

# Build [result] with [product]

In this tutorial, you build [result]. When you finish, you can [visible outcome].

## Who this page is for

This tutorial is for [newcomers to product] who know [assumed knowledge]. You don't
need to know [what is explained along the way].

## Prerequisites

Before you begin, make sure you have the following:

- [Tool and version]
- [Account, with a link]

## Tested with

The steps on this page were run on [YYYY-MM-DD] with [product] [version].

## What you will build

[One paragraph and, if it helps, one diagram of the finished result.]

## Step 1: [Verb] [object]

To [goal of this step], [instruction].

```bash
[command]
```

[What the reader sees, and why it matters for the next step.]

## Step 2: [Verb] [object]

[Repeat the pattern. Keep each step to one goal.]

## Check your result

To confirm that [result] works, [action]. You see the following:

```text
[real output]
```

## Next steps

- To understand [concept you used], read [concept page, with a link].
- To [related task], follow [how-to, with a link].

## Example

The following example shows one step filled in for a fictional hosting platform:

```markdown
## Step 2: Deploy the app

To publish the app, run the following command from the project folder:

    kestrel deploy --env staging

The command prints a staging URL. Open it to see the app running.
```
