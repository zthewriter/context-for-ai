---
template_id: HRN-07
title: "llms.txt"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer]
harness_part: context
replaces_or_extends: "Sitemap"
version: 1.0.0
---
<!--
SECTION TEMPLATE: llms.txt (reference file and policy)
Purpose: Give you an llms.txt file for your site and the policy that decides which
pages it lists.
Audience: Writers and context engineers who publish the file and keep it current.
Internal or external:
- External: the file is public by design. List only public pages.
- Internal: an internal docs site can publish one behind its own access control.
Before you write, ask the builders:
- Which pages answer the questions agents ask most?
- Does the site publish a Markdown version of each page?
- What updates the file when a page is added or removed?
Rules:
- Follow the writing style in ../style.md.
- Follow the format at https://llmstxt.org: an H1 with the site name, a blockquote
  summary, then H2 sections of links, each with a short note. A section named
  "Optional" holds links an agent can skip.
- Write the policy before the file. A file without a policy grows into a second
  sitemap.
- Serve the file at the site root as `/llms.txt`.
Agent notes:
- Infer from the site: its sitemap, page titles, and whether Markdown versions exist.
- Ask a person: which pages to list, which to leave out, and who approves changes.
Delete this comment before you publish.
-->

# llms.txt for [site name]

This page gives you the `llms.txt` file for [site name] and the policy for which pages
it lists.

## Who this page is for

This page is for the people who publish and maintain [site name]'s `llms.txt` file.

## Prerequisites

You need the site's page list, such as its sitemap.

## Listing policy

A page is listed when [condition]. A page is left out when [condition]. [Role]
approves changes, and [event] updates the file.

## The file

Copy the following block into `llms.txt` at the site root and replace each
placeholder:

```markdown
# [Site name]

> [What the site covers, in one sentence.]

## [Section]

- [Page title](https://[site]/[page].md): [What the page answers]

## Optional

- [Page title](https://[site]/[page].md): [What the page answers]
```

## Example

The following example shows the file filled in for a fictional hosting platform:

```markdown
# Kestrel docs

> Guides and API reference for deploying apps on Kestrel.

## Guides

- [Deploy an app](https://docs.kestrel.example/guides/deploy.md): First deploy, step by step

## Optional

- [Release notes](https://docs.kestrel.example/release-notes.md): Changes by date
```
