---
template_id: DEC-14
title: "Change history"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Release notes"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Change history (reference page)
Purpose: Record every change that can affect decisions, so readers can answer "why
did it decide differently from last week?"
Audience: Operators, support, and reviewers.
Internal or external:
- External: record changes that affect people's outcomes. Describe the effect.
- Internal: add the pull request, ticket, or decision record for each change.
Before you write, ask the builders:
- Which changes to questions, criteria, thresholds, or model versions shipped, and on
  what date?
- Which of those changes altered decisions a reader would notice?
Rules:
- Follow the writing style in ../style.md.
- Record changes to criteria, thresholds, inputs, and the model version, not only
  code releases. Each one changes future decisions.
- List entries newest first, and date each one with the day it reached production.
Agent notes:
- Infer from the commit history and release tags: changes to questions, criteria,
  thresholds, and model versions, with dates.
- Ask a person: which changes altered decisions a reader would notice, and how to
  describe each one.
Delete this comment before you publish.
-->

# Change history

This page lists changes that can affect [system name]'s decisions, newest first.

## Who this page is for

This page is for developers and owners who need to explain why a decision changed.

## Prerequisites

Before you begin, make sure you have the following:

- [Access to the application's change log]

## [YYYY-MM-DD]

This release includes the following changes:

- **Criteria:** [Changed wording, with the old and new definition.]
- **Thresholds:** [Changed value, and why.]
- **Inputs:** [Added, removed, or changed state fields.]
- **Model:** [New model version.]
- **Effect:** [What changes for affected people, for example "Tickets about clients'
  invoices now go to the technical team."]

## [Earlier release date, YYYY-MM-DD]

This release includes the following changes:

- **Criteria:** [Change]
- **Effect:** [What changes]
