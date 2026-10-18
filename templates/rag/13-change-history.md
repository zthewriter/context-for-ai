---
template_id: RAG-13
title: "Change history"
doc_type: reference
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Release notes"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Change history (reference page)
Purpose: Record every change that can affect answers, so readers can answer "why is
it different from last week?"
Audience: Operators, support, and frequent users.
Internal or external:
- External: record changes readers can notice. Describe the effect, not the
  implementation.
- Internal: add the pull request, ticket, or decision record for each change.
Before you write, ask the builders:
- Which changes to content, models, prompts, or settings shipped, and on what date?
- Which of those changes altered answers a reader would notice?
Rules:
- Follow the writing style in ../style.md.
- Record content changes, not only code releases. A new source, a removed folder, or
  a new refresh schedule changes answers as much as new code.
- List entries newest first, and date each one with the day it reached production.
Agent notes:
- Infer from the commit history and release tags: what changed in content, models,
  prompts, and settings, and when.
- Ask a person: which changes altered answers a reader would notice, and how to
  describe each one.
Delete this comment before you publish.
-->

# Change history

This page lists changes that can affect [system name]'s answers, newest first.

## Who this page is for

This page is for operators and support staff who need to explain why an answer changed.

## Prerequisites

Before you begin, make sure you have the following:

- [Access to the system's change log]

## [YYYY-MM-DD]

This release includes the following changes:

- **Content:** [Added, removed, or refreshed a source, and what changed for answers.]
- **Retrieval:** [Change to how passages are found or ranked.]
- **Generation:** [Change to the model or its instructions.]
- **Effect:** [What a reader might notice, for example "Questions about payment
  reminders now cite the new guide."]

## [Earlier release date, YYYY-MM-DD]

This release includes the following changes:

- **Content:** [Change]
- **Effect:** [What a reader might notice]
