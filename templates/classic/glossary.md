---
template_id: CLS-21
title: "Glossary"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer, context-engineer]
replaces_or_extends: "Glossary"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Glossary (reference page)
Purpose: Define the terms a product or team uses, one term per heading, so each
definition is its own retrievable passage.
Audience: New readers, translators, and agents that need the meaning of a term.
Internal or external:
- External: define terms customers meet in the product and docs.
- Internal: add internal names, code names, and abbreviations.
Before you write, ask the builders:
- Which terms do newcomers ask about most?
- Which terms mean something different here than elsewhere?
- Which old names or code names are still in use?
Rules:
- Follow the writing style in ../style.md.
- Give each term its own heading. A table of terms retrieves as one passage, so an
  agent that searches for one term gets all of them or none.
- Start each definition with the term, so the passage makes sense alone.
- List synonyms and old names under the term you want readers to use.
Agent notes:
- Infer from the repo: terms that appear in code, settings, and docs, and where each
  one is used.
- Ask a person: the preferred term, the definition, and old names to list as
  synonyms.
Delete this comment before you publish.
-->

# [Product] glossary

This page defines terms used in [product] and its documentation.

## Who this page is for

This page is for anyone who meets an unfamiliar term in [product] or its docs.

## Prerequisites

You don't need anything to use this page.

## [Term]

[Term] is [definition, in one or two sentences]. [Where the reader meets it, with a
link.]

Also called: [synonyms or old names].

## [Next term]

[Repeat the pattern. Sort terms alphabetically.]

## Example

The following example shows one term filled in for a fictional hosting platform:

```markdown
## Environment

An environment in Kestrel is a separate copy of an app with its own URL, settings,
and data. You choose an environment with `--env` when you deploy.

Also called: stage, space (old name, before 2025).
```
