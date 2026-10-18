---
template_id: HRN-04
title: "Retrieval rules spec"
doc_type: reference
template_class: new
personas: [context-engineer, ai-engineer]
harness_part: context
replaces_or_extends: "none"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Retrieval rules spec (reference page)
Purpose: Record each rule that forces or prefers a source for a kind of question, with
a test question that proves the rule works.
Audience: Context engineers who write rules, and AI engineers who evaluate them.
Internal or external:
- Internal: include every rule and its test results.
- External: usually internal only.
Before you write, ask the builders:
- Which questions did search answer from the wrong source?
- Which source should win for each, and must it be included or only preferred?
- Which question proves each rule works?
Rules:
- Follow the writing style in ../style.md.
- One rule per section, so each can be reviewed and removed alone.
- Every rule has a test question. A rule nobody tests stops working without anyone
  noticing.
- A rule may change which source is read. It may not tell the agent to stop
  admitting doubt.
Agent notes:
- Infer from the harness configuration: existing rules, their triggers, and targets.
- Ask a person: why each rule exists and the question that shows it working.
Delete this comment before you publish.
-->

# Retrieval rules for [agent name]

This page lists the rules that change which sources [agent name] reads, and the
question that tests each rule.

## Who this page is for

This page is for the people who write and evaluate [agent name]'s retrieval rules.

## Prerequisites

Read the [context source map](context-source-map.md) first.

## Rules at a glance

The following table lists each rule:

| Rule | Trigger | Effect | Test question |
|---|---|---|---|
| [Rule name] | [Words or question type] | [Force or prefer], [source] | "[Question]" |

## [Rule name]

- **Trigger:** [Words or kind of question that fire the rule.]
- **Effect:** [Force: the source is always included. Prefer: the source ranks
  higher.] [Source.]
- **Reason:** [What went wrong without the rule.]
- **Test question:** "[Question]". Passes when [source] is cited.

## Example

The following example shows one rule filled in for a fictional hosting platform's
docs assistant:

```markdown
## Errors prefer the API reference

- **Trigger:** an error code, such as `E1042`.
- **Effect:** prefer the Kestrel API reference.
- **Reason:** forum posts quoting the error ranked above the reference.
- **Test question:** "What does E1042 mean?" Passes when the API reference errors
  page is cited.
```
