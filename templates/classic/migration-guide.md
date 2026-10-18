---
template_id: CLS-17
title: "Migration guide"
doc_type: how-to
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "Migration guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Migration guide (task page)
Purpose: Take a reader from version A to version B safely, with a checklist they can
follow and verify.
Audience: Developers and admins upgrading, and coding agents performing the upgrade.
Internal or external:
- External: cover public interfaces and customer-facing settings.
- Internal: add internal services affected and the rollout plan.
Before you write, ask the builders:
- What breaks between version A and version B?
- Can the change be made gradually, or must it happen at once?
- How does a reader roll back if something fails?
Rules:
- Follow the writing style in ../style.md.
- Name both versions in the title and the first sentence.
- Show each change as before and after code, so an agent can apply it.
- Test the full migration on a real project before publishing.
Agent notes:
- Infer from the diff between the two versions: renamed, removed, and changed
  interfaces, and the code changes each one requires.
- Ask a person: the rollback plan, the support window for version A, and anything
  that cannot be migrated automatically.
Delete this comment before you publish.
-->

# Migrate from [product] [version A] to [version B]

This guide shows you how to upgrade from [product] [version A] to [version B]. Plan
for about [time], and do it before [date version A stops being supported].

## Who this page is for

This page is for [developers or admins] who run [product] [version A].

## Prerequisites

Before you begin, make sure you have the following:

- [A backup, or a way to roll back]
- [Access to the environment you will upgrade]

## What changes in [version B]

The following table lists the changes that affect you:

| Change | Affects you if | Action |
|---|---|---|
| [Change] | [Condition] | [Action, with a link to its section] |

## Migration checklist

To migrate, complete each item in order:

- [ ] [Update the dependency to [version B].]
- [ ] [Apply each code change in this guide.]
- [ ] [Run your tests.]
- [ ] [Deploy to a test environment and verify.]
- [ ] [Deploy to production.]

## [Change name]

[What changed, and why.] Before:

```[language]
[version A code]
```

After:

```[language]
[version B code]
```

## Verify the migration

To confirm the migration worked, [check]. [What the reader sees.]

## Roll back

If the migration fails, [rollback steps].

## Example

The following example shows a checklist item and its change filled in for a fictional
hosting platform:

```markdown
## The deploy command requires an environment

Kestrel CLI 3.0.0 no longer deploys to production by default. Before:

    kestrel deploy

After:

    kestrel deploy --env production
```
