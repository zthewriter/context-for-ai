<!--
EXAMPLE: Technical design document and case study, filled in
This page fills in the technical design document (CLS-22) and the case study
(CLS-23) for one fictional project at Kestrel, a fictional hosting platform for web
apps. The design doc describes the checked documentation assistant from the hybrid
example (hybrid/example-kestrel-checked-docs-assistant.md). The case study describes
the support engagement from the forward deployed engineer example. Every figure is
invented to show the format. Each section below is one page, shortened to its key
sections.
Delete this comment before you copy this page.
-->

# Kestrel design doc and case study, filled in

This example shows a design doc written before a build and a case study written
after one. Each section is one page, shortened to its key sections.

## Technical design document (CLS-22)

The following page proposes adding a passage check to the Kestrel docs assistant:

```markdown
# Design: check passages before the Kestrel docs assistant answers

## Problem

The assistant sometimes answers from a guide for an older Kestrel version, because
the passage matches the question even though it does not apply to the reader.

## Goals and non-goals

- **Goal:** an answer uses only passages that answer the question for the reader's
  version.
- **Non-goal:** changing how search finds candidates.

## Architecture

Search returns 10 passages. A decision model answers three questions about each.
Passages that pass go to the answer writer.

## Prompts, questions, and criteria

| Question | Type | Criteria |
|---|---|---|
| `answers_question` | Noul | The passage states the answer, not only the topic |
| `matches_version` | Noul | The passage applies to the reader's Kestrel version |
| `contains_instructions_for_model` | Noul | The passage tells an AI system what to do |

## Thresholds

Keep a passage at 0.60 or higher on the first two questions and below 0.20 on the
third. Set from 60 labeled questions, then revisited after launch.

## Failure handling

If the check is unavailable, decline and log. Guidance for the wrong version can
cause an outage, so the assistant fails closed.

## Evaluation plan

Run the 60 labeled questions with and without the check. Ship only if correct, cited
answers rise and no-answer questions still decline.

## Alternatives considered

- Filter by a version tag in metadata: rejected, because 30 percent of guides have
  no tag.

## Open questions

Should billing answers always go to a person, whatever the check returns?
```

## Case study (CLS-23)

The following page tells the support engagement's story for other teams:

```markdown
# How Kestrel support answers more questions without an engineer

## The situation

Kestrel's support team answered the same hosting questions every day. An engineer
was needed for 80 of every 100 tickets, although the answers were in the docs.

## What they built

A support assistant connected to the Kestrel docs MCP server. It searches the guides
and API reference, cites a page for every answer, and opens a ticket only after the
user confirms.

## How they rolled it out

The support lead labeled a sample of 100 tickets as the baseline. The assistant ran
beside the team for two weeks before answering on its own.

## Results

Four weeks after launch, 64 of 100 sampled tickets were answered without an
engineer, against a baseline of 20 and a target of 60. Method: a sample of 100
tickets, labeled by the Kestrel support lead.

## What they learned

Error-code questions failed until a retrieval rule sent them to the API reference.
Measuring the baseline first made the target something both sides could check.
```
