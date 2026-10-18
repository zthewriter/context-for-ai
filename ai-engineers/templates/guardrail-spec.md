---
template_id: AIE-08
title: "Guardrail spec"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer, context-engineer]
replaces_or_extends: "Validation rules"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Guardrail spec (reference page)
Purpose: Document each input or output check on an AI system: what it blocks, how a
false positive is handled, and who owns it.
Audience: The engineers who maintain the checks, support staff who see blocked
requests, and reviewers.
Internal or external:
- Internal: include the rule, the threshold, and the logs.
- External: describe what kinds of requests or results are blocked and how to appeal,
  without the exact rule.
Before you write, ask the builders:
- Which checks run on inputs, and which on outputs?
- What does each check block, and what does the user see when it fires?
- How often does each check block something it should not?
- Who can change a check, and how is a change tested?
Rules:
- Follow the writing style in ../../templates/style.md.
- Give each guardrail its own section, so each one can be retrieved alone.
- State the false-positive handling for every check. A check with no appeal path
  becomes a support ticket.
Agent notes:
- Infer from the code: each check, where it runs, its threshold, and the message it
  returns.
- Ask a person: why each check exists, its measured false-positive rate, and who owns
  it.
Delete this comment before you publish.
-->

# Guardrails for [system name]

This page lists the checks [system name] runs on its inputs and outputs, what each
one blocks, and how a wrongly blocked request is handled.

## Who this page is for

This page is for the engineers who maintain [system name]'s checks and the support
staff who see blocked requests.

## Prerequisites

You need read access to the guardrail logs at [location].

## Summary of guardrails

The following table lists each guardrail:

| Guardrail | Runs on | Blocks | Owner |
|---|---|---|---|
| [Name] | [Input or output] | [What it blocks] | [Team] |

## [Guardrail name]

- **What it checks:** [The condition, in one sentence.]
- **What the user sees:** [The message or behavior.]
- **False positives:** [How often, how it was measured, and how a user appeals.]
- **How to change it:** [Process, and the evaluation that must pass.]

## Example

The following example shows one guardrail filled in for a fictional hosting
platform's docs assistant:

```markdown
## Secret detector

- **What it checks:** whether a question contains a string shaped like a Kestrel API
  key.
- **What the user sees:** "Remove the key from your question and rotate it in the
  console."
- **False positives:** not yet measured.
- **How to change it:** open a pull request and rerun the guardrail question set.
```
