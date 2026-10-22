---
template_id: AEO-02
title: "Tracked prompt set"
doc_type: reference
template_class: new
personas: [technical-writer, developer-advocate, context-engineer]
replaces_or_extends: "Keyword tracking list"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Tracked prompt set (reference page)
Purpose: List the prompts the team runs against answer engines on a schedule, the
page each prompt should cite, and the latest result, so AEO results can be rerun and
compared.
Audience: Writers, developer advocates, and context engineers who run the prompts or
act on the results.
Internal or external:
- Internal: include every prompt, every run, and the raw answers.
- External: usually internal.
Before you write, ask the builders and your support team:
- Which questions do customers and prospects ask most, in their own words?
- Which page should answer each question?
- Who runs the set, how often, and where are the raw answers stored?
Rules:
- Follow the writing style in ../style.md.
- Write prompts the way a person types them, not the way a heading reads.
- Never edit a prompt in place. Retire it and add a new ID, so results stay
  comparable across runs.
- Answers vary between runs. State the run method, and run each prompt more than
  once.
- Record results in fixed values: cited, mentioned, absent, or wrong.
Agent notes:
- Infer from the repo: page paths for the expected source column.
- Ask a person: the prompts, the run method, and every result. Don't run prompts and
  record results without saying so.
Delete this comment before you publish.
-->

# Tracked prompt set for [product name]

This page lists the prompts the team runs against answer engines on a schedule, the
[product name] page each prompt should cite, and the latest result.

## Who this page is for

This page is for the people who run the tracked prompt set and the writers who fix
the pages it points to.

## Prerequisites

Read the [AEO strategy](aeo-strategy.md) first. It names the answer engines in scope
and the question groups this set covers.

## How the tracked prompt set is run

The following list states the run method, so every run can be compared with the
last:

- **Schedule:** [How often, and on which day.]
- **Session:** [For example a new session, signed out, with no memory or custom
  instructions.]
- **Location and language:** [Region and language setting.]
- **Repeats:** [How many times each prompt is run per engine, and how a result is
  decided, for example the majority of 3 runs.]
- **Raw answers:** [Where the full answers are stored.]

## Tracked prompts

The following table lists each prompt, the page it should cite, and the latest
result:

| ID | Prompt | Question group | Expected source | Engine | Last run | Result |
|---|---|---|---|---|---|---|
| [P-01] | [Prompt as a person types it] | [Group] | [Page path] | [Engine] | [YYYY-MM-DD] | [Cited, mentioned, absent, or wrong] |

## Tracked prompt result values

The following list defines each result value:

- **Cited:** the answer links the expected source or another [product name] page.
- **Mentioned:** the answer names [product name] without a link.
- **Absent:** the answer doesn't name [product name].
- **Wrong:** the answer states something about [product name] that is false. Record
  the claim and open a fix.

## Retired tracked prompts

The following table lists retired prompts and why each was retired:

| ID | Prompt | Retired on | Reason | Replaced by |
|---|---|---|---|---|
| [P-00] | [Prompt] | [YYYY-MM-DD] | [Reason] | [New ID, or none] |

## Example

The following example shows the set filled in with fake values for Kestrel, a
fictional hosting platform for web apps:

```markdown
## How the tracked prompt set is run

- **Schedule:** monthly, on the first Monday.
- **Session:** a new session, signed out, with no memory or custom instructions.
- **Location and language:** United States, English.
- **Repeats:** 3 runs per engine. The result is the majority of the 3.
- **Raw answers:** the AEO runs folder in the docs team's drive.

## Tracked prompts

| ID | Prompt | Question group | Expected source | Engine | Last run | Result |
|---|---|---|---|---|---|---|
| P-01 | how do I deploy a node app with a custom domain and free https | How to deploy | /guides/deploy | Chat assistant A | 2026-10-05 | Cited |
| P-01 | how do I deploy a node app with a custom domain and free https | How to deploy | /guides/deploy | Search AI summary B | 2026-10-05 | Mentioned |
| P-02 | what does kestrel error E1042 mean | Errors | /api/errors | Chat assistant A | 2026-10-05 | Wrong: said E1042 is a billing error |
| P-03 | kestrel vs other hosting for a small team | Comparison | /guides/choose-a-plan | Chat assistant A | 2026-10-05 | Absent |
```
