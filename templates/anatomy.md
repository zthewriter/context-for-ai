# Template anatomy

Every template in this library has the same structure, so a person, a docs-as-code
tool, or a coding agent can read any template the same way. This page defines that
structure. The template linter, `scripts/lint-templates.mjs`, checks it on every pull
request.

## Front matter

Every template starts with YAML front matter. Docs-as-code tools and agents read it
to find, sort, and fill templates. The following block shows every field:

```yaml
---
template_id: AIE-01
title: "Evaluation spec"
doc_type: reference
template_class: new
personas: [ai-engineer, technical-writer]
replaces_or_extends: "Test plan"
version: 1.0.0
---
```

The following table describes each field:

| Field | Required | Allowed values |
|---|---|---|
| `template_id` | Yes | A prefix from the ID table on this page, a hyphen, and two digits |
| `title` | Yes | The page type, in sentence case |
| `doc_type` | Yes | `tutorial`, `how-to`, `concept`, `reference`, `overview`, `decision`, or `operational` |
| `template_class` | Yes | `classic`, `upgraded-classic`, or `new` |
| `personas` | Yes | One or more of `technical-writer`, `developer-advocate`, `internal-engineer`, `ai-engineer`, `forward-deployed-engineer`, and `context-engineer` |
| `harness_part` | Harness templates only | `guides`, `context`, `tool-orchestration`, or `guardrails` |
| `replaces_or_extends` | Yes | The classic document the template grew from, or `none` |
| `version` | Yes | The template's semantic version |

## Template classes

A template's class says how it relates to documents writers already know. The
following list defines each class:

- **Classic:** a document type writers already use, kept as it is.
- **Upgraded classic:** a document type writers already use, changed so it also works
  as retrieved context.
- **New:** a document type that exists because of AI systems, such as an evaluation
  spec or a tool contract.

## Guidance comment

An HTML comment follows the front matter. It tells the writer how to fill the
template and is deleted before publishing. The comment has these fields, in this
order:

1. `SECTION TEMPLATE:` the page type, with the kind of page in parentheses.
2. `Purpose:` what the finished page does for its reader.
3. `Audience:` who reads the finished page.
4. `Internal or external:` what changes when the page is published inside or outside
   the organization.
5. `Before you write, ask the builders:` the questions to ask the people who built
   the system, and the checks to run first. The label may name more people, such as
   "ask the builders and your security team".
6. `Rules:` page-specific writing rules.
7. `Agent notes:` what a coding agent filling the template may infer from the code or
   repository, and what it must ask a person for.
8. `Delete this comment before you publish.` on its own line.

Other fields, such as `Background:`, may appear between these fields when a template
needs them.

## Page body

The page body follows the guidance comment, in this order:

1. An H1 title, with a bracketed placeholder where the product name goes.
2. A one-paragraph summary.
3. `## Who this page is for`.
4. `## Prerequisites`. One sentence is enough when the page needs nothing, for
   example "You don't need any prior knowledge of decision models to read this page."
5. The sections specific to the template.
6. `## Example`, with fake values, where an example helps.

## Placeholders

A placeholder is always text in square brackets that names the missing fact, for
example `[API key scope]`. Never use `TODO`, `TBD`, or lorem ipsum. The linter fails
on all three.

## AI readiness

Every section of a template must still make sense when an agent retrieves it alone.
The following rules make that possible:

- **Name the subject** in each section instead of writing "it" or "this."
- **Repeat key terms in headings,** so a retrieved section carries its own topic.
- **Keep one fact per section,** so an update touches one section.

Check each finished page against the
[page AI-readiness checklist](../checklists/page-ai-readiness.md).

## Diagrams

Every Mermaid diagram has an `accTitle` and an `accDescr`, and a text description
before it that carries the same information. A screen reader announces the
accessible title and description, and an agent that retrieves the page as text gets
the description.

## Template notes

Every `new` and `upgraded-classic` template has a note in `template-notes/` that
explains why it exists, at the same path with `.why.md` in place of `.md`. For
example, the note for `templates/rag/01-tutorial.md` is
`template-notes/templates/rag/01-tutorial.why.md`. The notes live outside the
template folders, so copying a set does not copy them. Each note has three
sections:

- What demand created this document
- What the classic document misses
- What goes wrong without it

## Template IDs

The following table lists the ID prefix for each set:

| Prefix | Set |
|---|---|
| `CLS` | Classic |
| `RAG` | Retrieval-augmented generation (RAG) systems |
| `DEC` | Decision-model systems |
| `HYB` | Hybrid systems |
| `MCP` | MCP server documentation |
| `HRN` | Harness engineering |
| `AIE` | AI engineers |
| `FDE` | Forward deployed engineers |
| `DVA` | Developer advocates |
| `AUD` | Audience guides |
| `DGM` | Diagrams |

## Check a template

To check every template, run the linter from the repository root:

```bash
node scripts/lint-templates.mjs
```

The linter prints each problem with its file and exits with a nonzero status if any
template fails. To confirm the linter itself still catches each problem, run its
self-test:

```bash
node --test scripts/lint-templates.test.mjs
```

## Update the catalog

The [template catalog](catalog.md) and `catalog.json` are generated from front
matter. After you add a template or change its front matter, rebuild them from the
repository root and commit the result:

```bash
node scripts/build-catalog.mjs
```

Continuous integration runs `node scripts/build-catalog.mjs --check` and fails if the
committed catalog doesn't match a fresh build.
