<!--
SECTION TEMPLATE: Manage content (task page)
Purpose: List what the system answers from, and show how to add, refresh, and remove
content. Readers use this page to judge an answer ("could it have known that?") and
to change what the system knows.
Audience: Operators, content owners, and support. The source table is also useful to
end users, so link to it from the overview.
Internal or external:
- External: list sources by their public name. Describe refresh in terms the reader
  can observe ("within one hour of publishing").
- Internal: add the owner and the repository, bucket, or space for each source, and
  link to the sync job or dashboard.
Before you write, ask the builders:
- Exactly which sites, repositories, files, or databases are indexed?
- What is deliberately excluded, and why?
- How often does each source refresh, and what triggers a refresh?
- How long does a change take to appear in answers? How can someone confirm it did?
- Who can add or remove a source?
Rules:
- Follow the writing style in ../style.md.
- Delete any task the reader can't perform. If only an admin can do it, say so in
  the task's first sentence.
Delete this comment before you publish.
-->

# Manage content

[System name] answers only from the content listed on this page. This page describes
each source, how current it is, and how to add, refresh, or remove content.

## Who this page is for

This page is for content owners and administrators who decide what [system name] answers from, and for readers who want to judge an answer by its sources.

## Prerequisites

Before you begin, make sure you have the following:

- [Permission to manage sources, for example "The Content Admin role"]
- A read of [About retrieval-augmented generation](03-concepts-overview.md#core-concepts), especially chunking and indexing

## Content sources

The following table lists the sources that [system name] searches:

| Source | What it contains | Refreshes | Owner |
|---|---|---|---|
| [Source name or URL] | [Content, for example "214 documentation pages"] | [Schedule, for example "Within 1 hour of publishing"] | [Team] |
| [Source name or URL] | [Content] | [Schedule] | [Team] |

## Excluded content

The following content is deliberately excluded:

| Content | Why it's excluded |
|---|---|
| [Content, for example "Community forum"] | [Reason, for example "Answers are unverified and often outdated"] |
| [Content] | [Reason] |

## Supported formats

[System name] can index the following formats:

| Format | Extensions | Notes |
|---|---|---|
| Web pages | Not applicable | [For example "Public pages only. Pages behind a sign-in aren't indexed."] |
| [Format] | [`.pdf`] | [For example "Text only. Scanned pages without a text layer aren't indexed."] |
| [Format] | [`.md`, `.txt`] | [Notes] |

For size limits, see [Limits](08-reference.md#limits).

## Prepare content for retrieval

[System name] retrieves passages, not whole pages, so each section of a document must
make sense on its own. To make content easier to retrieve, do the following:

- Give every page a descriptive title and every section a descriptive heading.
- Name the product, feature, or setting in each section instead of relying on "it"
  or "this."
- Put the answer in the first sentence of a section, and the explanation after it.
- Write text alternatives for images and diagrams, because [system name] indexes text.

For more guidance, see the [page AI readiness checklist](../../checklists/page-ai-readiness.md).

## Add a source

<!-- State who can do this. Delete the procedure if sources are added by request. -->

You need the [role] role to add a source. To add a source, do the following:

1. In [location], click **[Add source]**.
2. Enter the [URL, repository, or path].
3. Click **[Save]**.

[System name] begins indexing the source. Indexing [number] pages takes about
[time]. When indexing finishes, the source shows a status of **[status]**.

## Refresh a source

[System name] refreshes each source on the schedule in the
[content sources](#content-sources) table. To refresh a source sooner, do the
following:

1. In [location], find the source.
2. Click **[Refresh]**.

New and changed content appears in answers within [time].

## Confirm that content is indexed

To confirm that a page is available to [system name], do one of the following:

- In [location], search for the page's title in the source's page list.
- Ask [system name] a question that only that page answers, and check that the answer
  cites it.

## Remove content

To remove a source, do the following:

1. In [location], find the source.
2. Click **[Remove]**, and then confirm.

[State what happens to the content: for example "Its passages are deleted from the
index immediately and no longer appear in answers. Cached answers expire within
[time]."]

## Next steps

To continue, see the following pages:

- To learn how passages are selected, see
  [How answers are generated](07-how-answers-are-generated.md).
- To record a content change, add an entry to the [change history](13-change-history.md).
