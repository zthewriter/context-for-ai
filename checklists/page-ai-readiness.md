# Page AI readiness checklist

A scored checklist for one docs page. Score each item 0 (no), 1 (partly), or 2 (yes).
The practices behind each item are explained in
[Writing docs AI agents can use](../write-for-ai/06-writing-docs-ai-can-use.md).

Audit a sample of your five most visited pages, not your best ones.

## Page: [title and link]

Score each check for this page:

| # | Check | Score |
|---|---|---|
| 1 | Each section names its subject instead of relying on "it" or "this" from earlier | |
| 2 | Headings say what the section does ("Configure retries", not "Configuration") | |
| 3 | The answer comes first in each section | |
| 4 | Error messages, old feature names, and common synonyms appear verbatim | |
| 5 | Warnings and conditions sit inside the step they apply to | |
| 6 | Code snippets run when copied alone (imports, placeholders, language label) | |
| 7 | The page states which version it applies to | |
| 8 | Unsupported cases are stated explicitly | |
| 9 | Every screenshot and diagram has a text equivalent | |
| 10 | The page is listed in the site's `llms.txt` or sitemap | |
| | **Total (out of 20)** | |

## Reading the score

The following table explains what each score means:

| Score | Meaning |
|---|---|
| 17 to 20 | Agents can answer from this page reliably |
| 11 to 16 | Answers from this page will be incomplete or need context |
| 0 to 10 | Agents will likely guess, or answer from another source |

## The agent test

Scores are a proxy. To test directly, ask an AI agent that has access to your docs
three questions this page answers, and check whether each answer cites this page and
is correct.

| Question | Cited this page? | Correct? |
|---|---|---|
| | | |
| | | |
| | | |

## Top three fixes

1.
2.
3.
