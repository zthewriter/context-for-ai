---
template_id: AIE-03
title: "RAG pipeline spec"
doc_type: concept
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Technical design document"
version: 1.0.0
---
<!--
SECTION TEMPLATE: RAG pipeline spec (concept page)
Purpose: Record how content becomes the passages an answer can cite.
Audience: Writers, engineers who change ingestion or search, and reviewers who check a citation.
Internal or external:
- Internal: include index names, schedules, and the query that shows what was stored.
- External: describe behavior a customer can observe. Omit index names and host names.
Before you write, ask the builders:
- Which sources are included, and which are refused?
- How is a document split, and do neighboring pieces overlap?
- What is embedded, and with which model?
- What does a search return, and is there a second pass that reorders results?
- How does a citation point at the source a person can open?
Rules:
- Follow the writing style in ../../templates/style.md.
- Describe the choices this system made. Do not describe every possible retrieval design.
- If a step does not exist, write "This system does not do that step."
- Copy this page once per corpus. A second product with different sources gets its own page.
Agent notes:
- Infer from the code and configuration: each pipeline stage, its settings, and the
  models it uses.
- Ask a person: why each setting has its value and what evidence ruled out the
  alternatives.
Delete this comment before you publish.
-->

# RAG pipeline spec for [corpus or product name]

This page records how [corpus or product name] turns source documents into
passages an answer can cite. Retrieval-augmented generation (RAG) means the
answer is written from passages the system searched for, not from the model's
general training alone.

## Who this page is for

This page is for the person who changes what the system can retrieve, and for
the person who checks that a citation opens the right source.

## Prerequisites

Before you begin, make sure you have the following:

- A read of [How content becomes passages](https://github.com/zthewriter/context-for-ai/blob/v1.0.0/write-for-ai/02-how-content-becomes-passages.md)
- The list of sources [owner] has approved for this corpus

## What is ingested

[Corpus name] indexes the following sources:

- [Source type and where it lives]
- [Source type and where it lives]

The following sources are refused:

- [Source type, and the reason, for example "Files over the size limit"]
- [Source type]

A source is refreshed [schedule]. Content that fails refresh stays [available or unavailable] until [what happens next].

## How documents are split

Each document is split by [rule, for example "heading, then a maximum of 800 words"].
Neighboring pieces [overlap by a stated amount, or do not overlap].

A passage keeps the following metadata:

- [Field, for example "source URL"]
- [Field, for example "heading trail"]
- [Field, for example "updated date"]

## How passages are embedded and searched

Passages are embedded with [model name]. The embedding is a list of numbers
that represents the meaning of the passage so similar passages can be found.

A question is answered from [number] passages chosen by [lexical search, vector search, or both].
[If there is a second pass, name what it reorders and what it does not change. If there is not, say so.]

## How a citation maps back

A citation opens [what the reader sees: a URL, a page title, a section]. The
identifier stored with the passage is [field]. If that identifier does not
resolve, the answer must [behavior, for example "omit the citation and say the source could not be opened"].

## What changed the answers

Change this page, and rerun the evaluation spec, when any of the following change:

- A source is added or removed
- The split rule or the embedding model changes
- The number of passages or the search method changes
