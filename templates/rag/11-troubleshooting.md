---
template_id: RAG-11
title: "Troubleshooting"
doc_type: how-to
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Troubleshooting guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Troubleshooting (troubleshooting page)
Purpose: Help readers diagnose and fix the most common problems. Organize by the
symptom the reader sees, not by the internal cause.
Audience: Admins, developers, and support.
Internal or external:
- External: list fixes the reader can apply. End with how to contact support.
- Internal: add the diagnostic queries, dashboards, and escalation path for each
  problem.
Before you write, ask the builders:
- Which problems did each fix in the issue tracker resolve, and is each fix still
  current?
- Collect the 5 to 10 most common problems from support tickets and issue trackers.
- Reproduce each problem and confirm each fix.
Rules:
- Follow the writing style in ../style.md.
- Use the symptom as the heading, in the reader's words.
- Give each problem a cause and a numbered fix.
Agent notes:
- Infer from the issue tracker and error handling code: symptoms, error messages, and
  fixes. Reproduce each one before you write it down.
- Ask a person: which problems are most common, and when a reader should contact
  support instead of fixing it themselves.
Delete this comment before you publish.
-->

# Troubleshoot [system name]

This page describes common problems with [system name] and how to fix them. Each
section starts with what you see.

## Who this page is for

This page is for administrators, developers, and support staff who are investigating an unexpected answer.

## Prerequisites

Before you begin, make sure you have the following:

- [Access to the settings or logs that this page refers to]
- The question that produced the unexpected answer, and the sources the answer cited

## The answer doesn't use a page I know exists

**Cause:** The page isn't indexed yet, it's in an excluded location, or another page
matched the question better.

To fix this problem, do the following:

1. Confirm that the page is indexed. For instructions, see
   [Confirm that content is indexed](06-manage-content.md#confirm-that-content-is-indexed).
2. If the page isn't indexed, check that its source is listed in
   [Content sources](06-manage-content.md#content-sources) and that the page isn't in
   [Excluded content](06-manage-content.md#excluded-content).
3. If the page is indexed, ask the question again using words that appear in the
   page's headings.

If the page still isn't used, its relevant section might not make sense on its own.
See [Prepare content for retrieval](06-manage-content.md#prepare-content-for-retrieval).

## The answer is out of date

**Cause:** The source hasn't been refreshed since the content changed.

To fix this problem, do the following:

1. Check when the source was last refreshed in [location].
2. Refresh the source. For instructions, see
   [Refresh a source](06-manage-content.md#refresh-a-source).
3. Wait [time], and then ask the question again.

## [System name] says it can't answer, but the content covers the question

**Cause:** The question uses different words from the content, or the answer is spread
across several pages.

To fix this problem, try the following:

- Rephrase the question using the terms in the content, such as the exact setting or
  feature name.
- Split a question with several parts into separate questions.

## A citation opens a different page from the one quoted

**Cause:** The page changed or moved after it was indexed.

To fix this problem, refresh the source that contains the page. For instructions, see
[Refresh a source](06-manage-content.md#refresh-a-source).

## Requests fail with error [code]

**Cause:** [Cause].

To fix this problem, [fix]. For all error codes, see [Errors](08-reference.md#errors).

## Get help

If your problem isn't listed on this page, [contact method]. Include the following
information:

- The question you asked and the answer you received.
- The time you asked, including your time zone.
- [For developers: the request ID from the response.]
