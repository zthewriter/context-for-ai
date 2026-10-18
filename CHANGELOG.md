# Changelog

All notable changes to Context for AI are recorded in this file. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions follow
[VERSIONING.md](VERSIONING.md).

## [Unreleased]

## [1.0.0] - 2026-10-18

The first tagged release.

### Added

- Write for AI: eight short explainers on how AI systems use your content.
- Classic templates: 21 document types writers already know, from a README to a
  glossary, upgraded so each one also works as retrieved context. Start with the
  [classic set](templates/classic/README.md).
- Templates for documenting RAG, decision-model, and hybrid systems, each with a
  worked example for a fictional hosting platform, Kestrel. Audience guides, a
  technical design document, a case study, and diagrams complete the set. Start
  with [How to use these templates](templates/how-to-use.md).
- MCP server templates: 12 pages for documenting an MCP server, from connecting a
  client to tools, resources, prompts, server instructions, and evaluation, using
  the terms of MCP specification revision 2026-07-28. Start with the
  [MCP server set](templates/mcp-server/README.md).
- Harness templates: 12 pages for an AI agent's environment, grouped by the four
  harness parts (guides, context, tool orchestration, and guardrails), from
  `AGENTS.md` to a context changelog. Start with the
  [harness set](templates/harness/README.md).
- Role folders, kept separate:
  - [AI engineers](ai-engineers/), with 10 templates, from an evaluation spec and a
    tool contract to an AI incident review.
  - [Forward deployed engineers](forward-deployed-engineers/), with 11 templates,
    from a discovery brief to a handover pack.
  - Developer advocates, with a verified sample README and a demo script.
  - Context engineers and internal engineering, which index the templates they use.
- [Research](research/README.md): the method behind the role pages, a dated folder
  of coded counts for each quarterly round, and a log for practitioner interviews.
  Employers, posting links, and posting text are not in the repository.
- Template anatomy: front matter, a guidance comment with fixed fields including
  `Agent notes`, and the sections "Who this page is for" and "Prerequisites".
  [Template anatomy](templates/anatomy.md) defines it, and a linter checks it on
  every pull request.
- A [template catalog](templates/catalog.md) with a persona matrix, and the same
  data in `templates/catalog.json`, both generated from front matter and checked on
  every pull request.
- Four ways to clone a template, in
  [How to use these templates](templates/how-to-use.md#clone-a-template) and in each
  set README, including a [fill-template agent skill](skills/fill-template/SKILL.md).
- Kestrel examples for the classic, MCP server, and harness sets, and for the AI
  engineer and forward deployed engineer templates. The harness example is a full,
  consistent harness for one docs assistant.
- Template notes: a short note for each new and upgraded-classic template on why
  it exists, in `template-notes/`, outside the template folders so a copied set
  does not include them.
- Checklists: site agent readiness, page AI readiness, and AI system docs
  completeness.
- A template request form, `SECURITY.md`, `CITATION.cff`, `VERSIONING.md`, a
  markdownlint check in CI, and vendor-neutral and verified-figures items in the
  pull request checklist.

### Changed

- The Jev section templates are now
  [decision model templates](templates/decision-model/README.md) that fit any
  decision model. Jev stays as the worked example. The old `templates/jev/` pages
  are one-sentence stubs that point to the new location until the next major
  version.
- Growth figures on the role pages cite their original publishers, LinkedIn and
  Indeed Hiring Lab, with the window and population each figure describes.

[Unreleased]: https://github.com/zthewriter/context-for-ai/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/zthewriter/context-for-ai/releases/tag/v1.0.0
