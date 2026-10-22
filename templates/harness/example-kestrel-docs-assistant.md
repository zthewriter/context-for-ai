<!--
EXAMPLE: Harness set, filled in
This page is the full harness for one fictional agent, the Kestrel docs assistant,
so you can see how the harness pages fit together. Kestrel is a fictional hosting
platform for web apps. Every name, value, and result is written to show the
templates, not to document a real system. Each section below is one file or page,
shortened to its key sections, and each one agrees with the others: the same tools,
the same permission levels, the same sources, and the same rule.
Delete this comment before you copy this page.
-->

# Kestrel docs assistant harness, filled in

This example shows the harness for the Kestrel docs assistant, an agent that answers
customers' questions about Kestrel hosting from its documentation. Each section is
one file or page of the harness.

## How the pages agree

The following facts appear in more than one page, and each page uses the same value:

- **Tools:** `search_docs` and `get_page` (read), and `open_ticket` (write).
- **Sources:** the Kestrel guides, the Kestrel API reference, and the Kestrel status
  page.
- **Rule:** "Errors prefer the API reference", tested by the question "What does
  E1042 mean?"
- **Permission levels:** read, write, and external.

## AGENTS.md (HRN-01)

The following file sits at the root of the `kestrel-docs` repository:

```markdown
# Kestrel docs

The source for the Kestrel hosting guides and API reference.

## Commands

- Install: `npm ci`
- Test: `npm test`
- Lint: `npm run lint`

## Boundaries

- Never edit `api/openapi.yaml` by hand, because it is generated from the API.
- Ask before deleting a page, because published links point to it.

## Where to find more

- Definition of done: `harness/definition-of-done.md`
- Context sources and owners: `harness/context-source-map.md`
```

## Context source map (HRN-03)

The following page maps each kind of question to its source:

```markdown
| Question type | Source | Owner | Freshness requirement |
|---|---|---|---|
| How to deploy or configure | Kestrel guides | Docs team | 1 hour after publish |
| API parameters and errors | Kestrel API reference | API team | Each API release |
| Is Kestrel down right now | Kestrel status page | Operations | Live |

The assistant says it cannot answer questions about a customer's own account,
because no source holds account data.
```

## Retrieval rules spec (HRN-04)

The following page records the one rule:

```markdown
## Errors prefer the API reference

- **Trigger:** an error code, such as `E1042`.
- **Effect:** prefer the Kestrel API reference.
- **Reason:** forum posts quoting the error ranked above the reference.
- **Test question:** "What does E1042 mean?" Passes when the API reference errors
  page is cited.
```

## Memory spec (HRN-05)

The following page records what the assistant remembers:

```markdown
## What is remembered

| Item | Lifetime | Why |
|---|---|---|
| The product area of the conversation | One session | Follow-up questions stay on topic |
| The last page cited | One session | "Show me that page" calls `get_page` |

Nothing is kept across sessions.

## When memory and sources disagree

The sources win. If the user said "my app is on staging" and a guide says the
command differs for production, the assistant shows both and asks.
```

## Context delivery plan (HRN-06)

The following page records how the docs reach each audience:

```markdown
| Audience | Channel | Format | Refresh trigger | How usage is observed |
|---|---|---|---|---|
| Customers' coding agents | MCP server | Tool results with source links | Docs publish | Tool call log |
| Any agent that fetches pages | llms.txt | Markdown | Docs publish | Server access log |
| Kestrel engineers | Repository files | AGENTS.md and skills | Pull request merge | Review comments |
```

## Tool catalog (HRN-08)

The following page lists every tool the assistant may call:

```markdown
| Tool | Provided by | Contract | Permission level | Owner |
|---|---|---|---|---|
| `search_docs` | Kestrel docs MCP server | tools/search-docs.md | Read | Docs team |
| `get_page` | Kestrel docs MCP server | tools/get-page.md | Read | Docs team |
| `open_ticket` | Kestrel support API | tools/open-ticket.md | Write | Support team |
```

## Definition of done (HRN-09)

The following page lists the checks for changes to the docs repository:

```markdown
| Check | Command or evidence | Required for |
|---|---|---|
| Lint passes | `npm run lint` exits with 0 | Every change |
| Links resolve | `npm run links` exits with 0 | Every change |
| The rule still fires | "What does E1042 mean?" cites the API reference | Changes to rules or the API reference |
```

## Guardrails and approvals (HRN-10)

The following page uses the same levels as the tool catalog:

```markdown
| Level | Examples | Approval | Approver |
|---|---|---|---|
| Read | `search_docs`, `get_page` | None | None |
| Write | `open_ticket` | The user confirms the ticket text | The user |
| External | Emailing a customer | Before each action | Support lead |

If the user does not confirm within the session, the assistant does not open the
ticket and tells the user how to contact support.
```

## Session handoff note (HRN-11)

The following note was left at the end of an agent session in `kestrel-docs`:

```markdown
# Handoff: add E1042 to the API reference errors page, 2026-09-20

## State

The `E1042` entry is drafted in `api/errors.md`. `npm run lint` passes.
`npm run links` has not run.

## Open questions

Does the CLI's exit code 2 belong on this page or only in the CLI troubleshooting
guide? Ask the API team.

## Do not redo

Do not edit `api/openapi.yaml` by hand. The error list there is generated.
```

## Context changelog (HRN-12)

The following page records context changes and their effect:

```markdown
## 2026-09-21

- **Changed:** added the rule "Errors prefer the API reference".
- **Effect:** the error questions in the evaluation set cited the API reference 9 of
  10 times, up from 4 of 10.
```

## Context observability plan (HRN-13)

The following page records the signals that produced the measured effect in the
context changelog:

```markdown
| Signal | Captured in | What it tells you | Retention | Owner |
|---|---|---|---|---|
| Retrieved sources per question | MCP server tool call log | Which of the guides, API reference, and status page `search_docs` returned | 90 days | Docs team |
| Cited sources per answer | Assistant response log | Which retrieved sources the answer linked | 90 days | Docs team |
| Questions with no good match | Weak-match flag in the tool call log | Topics the docs don't cover | 90 days | Docs team |

| Metric | How it is measured | Window | Threshold | Action when crossed |
|---|---|---|---|---|
| Error questions citing the API reference | Share of evaluation questions tagged "error" whose answer links the API reference | Each evaluation run | Below 8 of 10 | Docs team checks the rule "Errors prefer the API reference" |
```
