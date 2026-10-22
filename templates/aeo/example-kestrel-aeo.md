<!--
EXAMPLE: AEO set, filled in
This page shows the AEO set filled in for Kestrel, a fictional hosting platform for
web apps. Every name, value, and result is written to show the templates, not to
describe a real system or a real answer engine. "Chat assistant A" and "Search AI
summary B" stand in for whichever engines you track. Each section below is one page,
shortened to its key sections, and the pages agree with each other.
Delete this comment before you copy this page.
-->

# Kestrel AEO, filled in

This example shows the AEO strategy and the tracked prompt set for Kestrel. Each
section is one page of the set.

## How the AEO pages agree

The following facts appear in both pages, and each page uses the same value:

- **Engines:** Chat assistant A and Search AI summary B.
- **Question groups:** how to deploy, errors, and comparison.
- **Success measure:** the share of tracked prompts whose answer cites a Kestrel
  page, run on the first Monday of each month.

## AEO strategy (AEO-01)

The following page records the strategy:

```markdown
# AEO strategy for Kestrel

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

## Tracked prompt set (AEO-02)

The following page lists three of the 20 tracked prompts and their latest results:

```markdown
# Tracked prompt set for Kestrel

## How the tracked prompt set is run

- **Schedule:** monthly, on the first Monday.
- **Session:** a new session, signed out, with no memory or custom instructions.
- **Location and language:** United States, English.
- **Repeats:** 3 runs per engine. The result is the majority of the 3.

## Tracked prompts

| ID | Prompt | Question group | Expected source | Engine | Last run | Result |
|---|---|---|---|---|---|---|
| P-01 | how do I deploy a node app with a custom domain and free https | How to deploy | /guides/deploy | Chat assistant A | 2026-10-05 | Cited |
| P-02 | what does kestrel error E1042 mean | Errors | /api/errors | Chat assistant A | 2026-10-05 | Wrong: said E1042 is a billing error |
| P-03 | kestrel vs other hosting for a small team | Comparison | /guides/choose-a-plan | Search AI summary B | 2026-10-05 | Absent |
```

## What the Kestrel team did next

The "Wrong" result on P-02 matched priority 2 in the strategy, so the API team added
`E1042` to the errors page. The same error code appears in the
[Kestrel harness example](../harness/example-kestrel-docs-assistant.md), where the
docs assistant's rule "Errors prefer the API reference" depends on that page.
