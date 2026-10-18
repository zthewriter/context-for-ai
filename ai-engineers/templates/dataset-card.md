---
template_id: AIE-09
title: "Dataset card"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Data dictionary"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Dataset card (reference page)
Purpose: Describe an evaluation or fine-tuning dataset: where it came from, consent,
how it is split, and what it is known to miss.
Audience: Engineers who use the dataset, reviewers who audit it, and anyone who reads
a result measured on it.
Internal or external:
- Internal: include the location, access process, and every known gap.
- External: publish the source, size, and known gaps when you publish results
  measured on the dataset.
Before you write, ask the builders:
- Where did each record come from, and was consent given for this use?
- How many records are there, and how are they split?
- Who labeled them, and how were disagreements settled?
- What kinds of question or data does the dataset not cover?
Rules:
- Follow the writing style in ../../templates/style.md.
- Copy this page once per dataset version.
- Never include real personal data in examples.
- Link this card from every result measured on the dataset.
Agent notes:
- Infer from the repo: the record count, the split sizes, the file location, and the
  schema.
- Ask a person: the source, the consent basis, the labeling process, and the known
  gaps.
Delete this comment before you publish.
-->

# Dataset card: [dataset name] [version]

This card describes [dataset name] [version], a dataset used to [evaluate or
fine-tune] [system name].

## Who this page is for

This page is for anyone who uses [dataset name] or reads a result measured on it.

## Prerequisites

To use the dataset, you need [access, with a link to request it].

## Summary of [dataset name]

The following table summarizes the dataset:

| Field | Value |
|---|---|
| Purpose | [Evaluation or fine-tuning] |
| Records | [Number] |
| Created | [YYYY-MM-DD] |
| Owner | [Name or team] |
| Location | [Path or link] |

## Source and consent

[Where the records came from, and the consent or legal basis for using them this
way.]

## Splits

The following table lists the splits:

| Split | Records | Used for |
|---|---|---|
| [Train, validation, or test] | [Number] | [Purpose] |

## Labeling

[Who labeled the records, the instructions they followed, and how disagreements were
settled.]

## Known gaps

- [What the dataset does not cover, for example "No questions in languages other than
  English."]

## Example

The following example shows the known gaps section filled in for a fictional hosting
platform:

```markdown
## Known gaps

- No questions about billing, because billing pages were not indexed when the set was
  written.
- Questions were written by the docs team, not collected from users.
```
