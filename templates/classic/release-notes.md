---
template_id: CLS-16
title: "Release notes"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "Release notes"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Release notes (reference page)
Purpose: Tell readers what changed in one release, breaking changes first, so they
can decide whether and how to upgrade.
Audience: Developers and admins who upgrade, and agents that answer "what changed"
questions.
Internal or external:
- External: describe changes customers can notice.
- Internal: add pull requests, tickets, and the deploy record.
Before you write, ask the builders:
- Which changes break existing integrations, and what must users do about each?
- Which changes are new capabilities, and which are fixes?
- What date did the release reach production?
Rules:
- Follow the writing style in ../style.md.
- Copy the release section once per release, newest first.
- List breaking changes first, each with the action the reader must take.
- Put the version and date in each release heading, so a retrieved section says which
  release it describes.
Agent notes:
- Infer from the commit history, tags, and changelog: what changed and in which
  version.
- Ask a person: which changes are breaking, the release date, and how to describe
  each change for readers.
Delete this comment before you publish.
-->

# [Product] release notes

This page lists changes to [product], newest first.

## Who this page is for

This page is for [developers or admins] who decide when to upgrade [product].

## Prerequisites

You don't need anything to read this page. To upgrade, see the [migration
guide](migration-guide.md) for the release.

## [Product] [version] ([YYYY-MM-DD])

### Breaking changes in [version]

- **[Change]:** [What breaks, and what to do.] See [migration guide, with a link].

### New in [version]

- **[Capability]:** You can now [what the reader can do].

### Fixed in [version]

- [What works correctly now, described by its effect.]

### Deprecated in [version]

- **[Feature]:** [Replacement, and the date it will be removed.]

## Example

The following example shows a breaking change filled in for a fictional hosting
platform:

```markdown
## Kestrel CLI 3.0.0 (2026-03-02)

### Breaking changes in 3.0.0

- **`kestrel deploy` requires `--env`:** Commands without it now exit with code 2.
  Add `--env production` to keep the old behavior.
```
