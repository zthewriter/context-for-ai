---
template_id: AEO-01
title: "AEO strategy"
doc_type: decision
template_class: new
personas: [technical-writer, developer-advocate, context-engineer]
replaces_or_extends: "SEO strategy"
version: 1.0.0
---
<!--
SECTION TEMPLATE: AEO strategy (decision page)
Purpose: Decide which questions your content should answer in AI answer engines,
which engines are in scope, what content and access work follows, and how success is
measured.
Audience: Writers, developer advocates, and context engineers who decide how public
content is written and published.
Internal or external:
- Internal: include priorities, owners, and the tracked prompt set results.
- External: usually internal. Publish the access policy, such as your robots.txt and
  llms.txt choices, where readers expect it.
Before you write, ask the builders and your marketing team:
- Which questions do prospects and customers ask an AI assistant before they reach
  your site?
- Which pages should be the answer, and do they exist yet?
- Which AI crawlers does robots.txt allow or block today, and who decided?
Rules:
- Follow the writing style in ../style.md.
- Answer engines change without notice. Date every observation, and never promise a
  ranking or a citation.
- Name engines as examples, not requirements. The strategy is about your content.
- Every success measure points to the tracked prompt set, so results can be rerun.
Agent notes:
- Infer from the repo: robots.txt, llms.txt, sitemap, structured data, and which
  pages exist.
- Ask a person: the target questions, the engines in scope, priorities, and owners.
Delete this comment before you publish.
-->

# AEO strategy for [product name]

This page records the answer engine optimization (AEO) strategy for [product name]:
the questions [product name]'s content should answer in AI answer engines, the
engines in scope, the work that follows, and how the team measures the result.

## Who this page is for

This page is for the people who write and publish [product name]'s public content.
Read it before you plan new pages or change what AI crawlers may read.

## Prerequisites

You need a list of the questions your audience asks. To define AEO terms: an answer
engine is a system that answers a question in its own words and may cite sources,
such as a chat assistant with web search or an AI summary in search results. For how
one search engine treats content in its AI features, see
[AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

## AEO goal

[One or two sentences: what changes for [product name] when the strategy works,
for example which questions name [product name] and link its pages.]

## Answer engines in scope

The following table lists each answer engine in scope, how it finds content, and how
the team checks it:

| Answer engine | How it finds content | How the team checks it | Owner |
|---|---|---|---|
| [Engine] | [Live web search, a crawled index, or training data] | [Method, for example the tracked prompt set] | [Team] |

## Target questions for AEO

[Link the [tracked prompt set](tracked-prompt-set.md). Summarize the groups of
questions it covers, for example "comparison", "how to", and "pricing".]

## AEO content priorities

The following table lists the pages the strategy needs, in priority order:

| Priority | Question group | Page that should answer it | Status | Owner |
|---|---|---|---|---|
| [1] | [Group] | [Page path, or "Not written"] | [Exists, needs update, or missing] | [Team] |

## AEO access policy

The following list records what answer engines may read and why:

- **robots.txt:** [Which AI crawlers are allowed or blocked, and why. See the
  [Robots Exclusion Protocol](https://www.rfc-editor.org/rfc/rfc9309).]
- **llms.txt:** [Published or not, and what it lists. See the
  [llms.txt proposal](https://llmstxt.org/).]
- **Structured data:** [Which page types carry it.]

## How AEO success is measured

[The metric, for example the share of tracked prompts where an answer cites
[product name], how often the set is run, and where results are recorded.]

## Out of scope for this AEO strategy

The following list names what this strategy doesn't cover, and why:

- [Item], because [reason].

## Example

The following example shows the strategy filled in with fake values for Kestrel, a
fictional hosting platform for web apps:

```markdown
## AEO goal

When a developer asks an AI assistant how to deploy a web app with a custom domain
and automatic TLS, the answer links the Kestrel deploy guide.

## Answer engines in scope

| Answer engine | How it finds content | How the team checks it | Owner |
|---|---|---|---|
| Chat assistant A | Live web search | Tracked prompt set, monthly | Docs team |
| Search AI summary B | Crawled index | Tracked prompt set, monthly | Docs team |

## AEO content priorities

| Priority | Question group | Page that should answer it | Status | Owner |
|---|---|---|---|---|
| 1 | How to deploy | /guides/deploy | Exists | Docs team |
| 2 | Errors | /api/errors | Needs update: E1042 missing | API team |
| 3 | Comparison | /guides/choose-a-plan | Missing | Developer relations |

## AEO access policy

- **robots.txt:** AI crawlers are allowed on /guides and /api, and blocked on
  /account, which holds no public content.
- **llms.txt:** published, listing the guides and the API reference.

## How AEO success is measured

The share of tracked prompts whose answer cites a Kestrel page, run on the first
Monday of each month. Baseline on 2026-10-05: 6 of 20.
```
