---
template_id: HRN-12
title: "Context changelog"
doc_type: reference
template_class: new
personas: [context-engineer, technical-writer, ai-engineer]
harness_part: context
replaces_or_extends: "Changelog"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Context changelog (reference page)
Purpose: Record each change to an agent's context (sources, rules, instructions, and
memory) and its measured effect.
Audience: Context engineers and AI engineers who change context, and anyone tracing
why answers changed.
Internal or external:
- Internal: include every change and its evaluation run.
- External: usually internal. Publish user-visible changes in the product's own
  change history.
Before you write, ask the builders:
- Which context changes happen: sources added or removed, rules, instructions,
  memory settings?
- Which evaluation runs after each change?
Rules:
- Follow the writing style in ../style.md.
- List entries newest first, dated by the day the change reached production.
- Every entry names its measured effect, or says it was not measured. Answers change
  when context changes, and this page is how someone finds out why.
Agent notes:
- Infer from the commit history and harness configuration: what changed and when.
- Ask a person: the production date and the evaluation result for each change.
Delete this comment before you publish.
-->

# Context changelog for [agent name]

This page lists changes to [agent name]'s context, newest first, with the measured
effect of each.

## Who this page is for

This page is for the people who change [agent name]'s context and anyone tracing why
its answers changed.

## Prerequisites

You need the evaluation results for each change.

## [YYYY-MM-DD]

- **Changed:** [Source, rule, instruction, or memory setting, and what changed.]
- **Effect:** [Measured result, with the evaluation and its method, or "Not
  measured".]

## Example

The following example shows an entry filled in with fake values for a fictional
hosting platform's docs assistant:

```markdown
## 2026-09-21

- **Changed:** added the rule "Errors prefer the API reference".
- **Effect:** the error questions in the evaluation set cited the API reference 9 of
  10 times, up from 4 of 10.
```
