<!--
EXAMPLE: AI engineer templates, filled in
This page fills in every AI engineer template for one fictional agent, the Kestrel
docs assistant. Kestrel is a fictional hosting platform for web apps. Every value
is written to show the templates, not to document a real system. The agent, tools,
and rule match the harness example in templates/harness.
Delete this comment before you copy this page.
-->

# Kestrel docs assistant engineering pages, filled in

This example shows the AI engineer pages for the Kestrel docs assistant. Each
section is one page, shortened to its key sections. The same assistant appears in the
[harness example](../../templates/harness/example-kestrel-docs-assistant.md).

## Evaluation spec (AIE-01)

The following page defines a good result and what blocks a release:

```markdown
# Evaluation spec for the Kestrel docs assistant

## What a good result is

An answer that is correct, cites the Kestrel guide or API reference page it came
from, and says so when no page answers the question.

## The golden set

30 questions written by the docs team on 2026-09-01. Each records the page a correct
answer cites. Questions Q-12 and Q-21 have no answer in the docs.

## What blocks a release

A change ships only if right-page citations stay at or above 24 of 30 and both
no-answer questions get "no answer found".
```

## Tool contract (AIE-02)

The following page is the contract for `search_docs`:

```markdown
# search_docs

## What this tool does

Searches the Kestrel guides and API reference and returns passages with links.

## Arguments

| Name | Type | Required | Meaning |
|---|---|---|---|
| `query` | string | Yes | The question, in the user's words |
| `max_results` | integer | No | 1 to 10. Default 5 |

## Who the call runs as

The signed-in user, with the `docs:read` scope.
```

## RAG pipeline spec (AIE-03)

The following page records how the docs reach the model:

```markdown
# RAG pipeline for the Kestrel docs assistant

## What is ingested

The Kestrel guides and the API reference, re-indexed on every docs publish. The
status page is read live, never indexed.

## How documents are split

At second-level headings, into passages of at most 1,000 characters. Each passage
starts with its page title and heading.

## How passages are embedded and searched

Passages are embedded with `all-MiniLM-L6-v2` (384 dimensions). Keyword search runs
beside it, so an exact error code such as `E1042` matches. `search_docs` returns the
top 5.

## How a citation maps back

Each passage keeps its page URL and heading anchor, such as
`https://docs.kestrel.example/guides/api-keys#rotate-an-api-key`.

## What changed the answers

2026-09-21: the rule "Errors prefer the API reference" raised API reference
citations on error questions from 4 of 10 to 9 of 10.
```

## Agent runbook (AIE-04)

The following page is for whoever is on call for the assistant:

```markdown
# Runbook for the Kestrel docs assistant

## What the agent does on its own

It calls `search_docs` and `get_page` without asking. It calls `open_ticket` only
after the user confirms the ticket text.

## Read a bad trace

Open the session trace and compare the cited URL with the passages `search_docs`
returned. A cited URL that was not returned is a grounding failure. A right page
that was never returned is a retrieval failure.

## When to escalate

Page the on-call engineer if a ticket opens without confirmation. Send grounding
and retrieval failures to the docs team the same day.
```

## Quality, latency, and cost (AIE-05)

The following page states the bounds the assistant runs within:

```markdown
# Quality, latency, and cost for the Kestrel docs assistant

## The bounds

| Dimension | Bound | Measured by |
|---|---|---|
| Quality | Right-page citations at or above 24 of 30 | The golden set, on every change |
| Latency | 95 percent of answers within 6 seconds | The session trace log |
| Cost | Under $0.01 per answer | The model provider's monthly invoice |

## Who may trade one for another

The docs lead may allow up to 8 seconds for a quality gain. Nobody may trade
quality below 24 of 30.

## When a bound is crossed

If latency stays above 6 seconds for an hour, lower `max_results` from 5 to 3
first, then rerun the golden set.
```

## Prompt and instruction spec (AIE-06)

The following page treats the server instructions as a versioned contract:

```markdown
# Kestrel docs server instructions

## Current version of the instructions

Version 2, owned by the docs team:

    Cite the guide URL for every fact.
    If no passage answers the question, say so.

## Change log for the instructions

- Version 2, 2026-09-21: added the no-answer line. No-answer questions Q-12 and Q-21
  went from 0 of 2 to 2 of 2.
```

## Model change note (AIE-07)

The following page records a chat model change:

```markdown
# Model change: chat-model-2026-06 to chat-model-2026-09

## Evaluation results

| Measure | Before | After |
|---|---|---|
| Right-page citations, golden set | 25 of 30 | 27 of 30 |
| No-answer questions answered "no answer found" | 2 of 2 | 2 of 2 |

## Behavior changes

Answers are about a third shorter, and error codes are quoted exactly.

## Roll back

Set `CHAT_MODEL` to `chat-model-2026-06` and redeploy.
```

## Guardrails catalog (AIE-08)

The following page lists every check around the assistant:

```markdown
# Guardrails for the Kestrel docs assistant

## Summary

| Guardrail | Checks | Action |
|---|---|---|
| Ticket confirmation | `open_ticket` calls | Blocks until the user confirms |
| Secret detector | Ticket text | Blocks text containing `kst_live_` keys |
| Account questions | Questions about a user's own apps | Answers that no source holds account data |

## Secret detector

Blocks a ticket whose text matches `kst_live_` followed by 24 characters, and asks
the user to remove the key.
```

## Dataset card (AIE-09)

The following page describes the golden set:

```markdown
# Dataset card: Kestrel docs golden set, version 2

## Summary

30 questions with the page a correct answer cites. Used only for testing.

## Source and collection

Written by the docs team on 2026-09-01, paraphrased from support tickets. No
customer text is kept.

## Labeling

One docs writer labeled each question. A second writer reviewed every label.

## Known gaps

English only. No questions about billing in currencies other than US dollars.
```

## Incident review (AIE-10)

The following page reviews one failure:

```markdown
# Incident review: uncited answers after the tool rename

## Summary

On 2026-09-14, `search` was renamed `search_docs`. A support workflow still named
`search`, so the call failed and the assistant answered from the model alone.

## Timeline

- 2026-09-14 10:00 UTC: rename shipped.
- 2026-09-14 15:20 UTC: support reports answers without links.
- 2026-09-14 16:05 UTC: workflow updated to `search_docs`.

## Contributing causes

The rename was announced in the change history but not to workflow owners. The
instructions did not tell the assistant to say when no passage was found.

## Actions

- Instructions version 2, 2026-09-21: "If no passage answers the question, say so."
- Renames now notify every workflow owner a week ahead.
```
