<!--
EXAMPLE: RAG documentation pages, filled in
This page fills in the overview (RAG-05), manage content (RAG-06), how answers are
generated (RAG-07), reference (RAG-08), security and data (RAG-09), limitations
(RAG-10), troubleshooting (RAG-11), and change history (RAG-13) templates for the
assistant built in the tutorial example (example-kestrel-docs-assistant.md). Kestrel
is a fictional hosting platform for web apps. The dates and the change history are
invented to show the format. Each section below is one page, shortened to its key
sections.
Delete this comment before you copy this page.
-->

# Kestrel docs assistant pages, filled in

This example shows the pages a team publishes once the
[Kestrel docs assistant tutorial](example-kestrel-docs-assistant.md) is running for
other people. Each section is one page, shortened to its key sections.

## Overview (RAG-05)

The following page tells readers what they can ask:

```markdown
# Kestrel docs assistant

The Kestrel docs assistant answers questions from three Kestrel guides and cites the
section behind each statement.

## What you can ask

- API keys: create, rotate, and revoke a key.
- Deploying an app: connect a repository, roll back, and set environment variables.
- Billing: view invoices and change your plan.

## How to check an answer

Every statement ends with a citation such as `[api-keys.md#rotate-an-api-key]`. Open
that section and confirm it says the same thing.
```

## Manage content (RAG-06)

The following page tells the docs team how the guides reach the assistant:

```markdown
# Manage the Kestrel docs assistant's content

## Content sources

| Source | Format | Owner |
|---|---|---|
| `guides/api-keys.md` | Markdown | Docs team |
| `guides/deploy.md` | Markdown | Docs team |
| `guides/billing.md` | Markdown | Docs team |

## Prepare content for retrieval

Give every second-level heading a name that states its task, such as "Rotate an API
key". Each heading starts a new passage.

## Refresh a source

Edit the guide, then rebuild the index. The assistant reads the index, not the
guide, so an edit has no effect until the rebuild.

## Confirm that content is indexed

Ask a question that only the new section answers, and check that its heading appears
in the citation.
```

## How answers are generated (RAG-07)

The following page explains the three stages:

```markdown
# How the Kestrel docs assistant generates answers

## Ingest

Each guide is split at second-level headings into passages of at most 1,000
characters, and each passage is embedded with `all-MiniLM-L6-v2`.

## Retrieve

The question is embedded with the same model, and the 3 most similar passages are
returned.

## Generate

The model receives the question and the 3 passages, with an instruction to answer
only from them, cite each source, and say so when they don't answer the question.
```

## Reference (RAG-08)

The following page lists the settings, input, output, and errors:

```markdown
# Kestrel docs assistant reference

## Retrieval settings

| Setting | Value |
|---|---|
| Split boundary | Second-level heading |
| Maximum passage length | 1,000 characters |
| Embedding model | `all-MiniLM-L6-v2`, 384 dimensions |
| Passages per answer | 3 |

## Request

    python assistant.py "How do I roll back a deployment?"

## Response

Plain text. Each statement ends with a citation in brackets, such as
`[deploy.md#roll-back-a-deployment]`.

## Errors

| Error | Cause | Fix |
|---|---|---|
| `KeyError: 'CHAT_MODEL'` | `CHAT_MODEL` is not set | Set it to the model name your provider uses |
| The OpenAI client reports a missing API key | `OPENAI_API_KEY` is not set | Set it, or set `OPENAI_BASE_URL` for a local provider |

## Supported languages

English. The embedding model and the guides are English.
```

## Security and data (RAG-09)

The following page states who can read what:

```markdown
# Kestrel docs assistant security and data

## Access control

Anyone who can run `assistant.py` can ask questions. The guides are public, so the
assistant holds nothing a reader could not open directly.

## Data that the assistant stores

The index lives in memory and is rebuilt on each start. Questions are sent to the
model provider set by `OPENAI_BASE_URL` and are not stored by the assistant.

## Prompt injection

Passages are labeled as information, not instructions. Only the docs team can change
the guides, which limits who can place text in a passage.
```

## Limitations (RAG-10)

The following page states what the assistant cannot do:

```markdown
# Limitations of the Kestrel docs assistant

## What the assistant can't do

It can't see your account, your apps, or your invoices. It answers from the guides
only.

## Gaps in the content

The guides don't cover custom domains or Kubernetes, so the assistant says it
couldn't find an answer.

## Report a wrong answer

Send the question, the answer, and its citations to the docs team.
```

## Troubleshooting (RAG-11)

The following page fixes the most common problems:

```markdown
# Troubleshoot the Kestrel docs assistant

## The answer doesn't use a page I know exists

- **Cause:** the section's heading doesn't name its task, so the passage scores low.
- **Fix:** rename the heading, and rebuild the index.

## The answer is out of date

- **Cause:** the guide changed after the index was built.
- **Fix:** restart the assistant, which rebuilds the index.
```

## Change history (RAG-13)

The following page records changes that affect answers:

```markdown
# Kestrel docs assistant change history

## 2026-10-02

- **Changed:** passages per answer went from 2 to 3, because questions about
  rotating a key needed both the create and revoke sections.

## 2026-09-18

- **Added:** the billing guide.
```
