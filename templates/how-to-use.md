# How to use these templates

This page shows you how to turn the section templates in this repository into a
documentation set for your own system. It takes about 30 minutes to plan, and a few
days to write, depending on how many pages you need.

## Who this page is for

This page is for technical writers, developers, and product managers who need to
document a system that uses retrieval-augmented generation (RAG), a decision
model, or both. You don't need to know how either works. Each set has a concepts page
that defines the terms.

## What you will build

When you finish, you have a documentation section that does the following:

- Defines the technology in plain language and links to the official reference
- Tells each reader who each page is for and what they need first
- Teaches a reader to build or use the system, with output they can check
- Explains each concept a reader needs to make a decision
- Documents your own system's choices, limits, and results

## What section templates are

A *section template* is a template for one page, or one section, of a documentation
site. The sets in this repository aren't one document to fill in from top to bottom.
Each set is a menu of pages. You choose the pages that your readers need, and you
write each page from its template.

## Prerequisites

Before you begin, make sure you have the following:

- Access to the people who built the system, or to its design documents
- A working copy of the system that you can test
- A place to publish: a documentation site, a wiki, or a repository
- A read of [Writing style for these templates](style.md)

## Choose a template set

Choose the set from the system you document. The following table maps each system to a
set:

| If your system | Use | Start at |
|---|---|---|
| Searches content and writes an answer from it | [RAG templates](rag/) | [Concepts overview](rag/03-concepts-overview.md) |
| Classifies, scores, routes, or checks, and software acts on the result | [decision model templates](decision-model/) | [Concepts overview](decision-model/03-concepts-overview.md) |
| Does both | [RAG](rag/), [Decision model](decision-model/), and [hybrid](hybrid/) templates | [Hybrid concepts](hybrid/02-concepts.md) |
| Is a software project, API, SDK, or service | [Classic templates](classic/) | [Project README](classic/project-readme.md) |
| Gives AI agents tools, resources, and prompts over MCP | [MCP server templates](mcp-server/) | [Overview](mcp-server/01-overview.md) |
| Is an agent, or a repository agents work in | [Harness templates](harness/) | [AGENTS.md](harness/agents-md.md) |

To find a template by ID, persona, or page type, see the [template catalog](catalog.md).

## Choose the pages

Choose pages by what your readers are trying to do. The following table maps reader
goals to templates in the RAG set. The decision-model and hybrid sets have matching pages:

| The reader wants to | Page type | RAG template |
|---|---|---|
| Understand what RAG is and what the terms mean | Concept | [Concepts overview](rag/03-concepts-overview.md) |
| Choose between options, such as chunking strategies | Concept | [Concepts in depth](rag/04-concepts-in-depth.md) |
| Get a first result in minutes | Quick start | [Quick start](rag/02-quickstart.md) |
| Build the whole thing, step by step | Tutorial | [Tutorial](rag/01-tutorial.md) |
| Know what your system is and does | Concept | [Overview](rag/05-overview.md) |
| Change what your system answers from | Task | [Manage content](rag/06-manage-content.md) |
| Look up a setting, field, or limit | Reference | [Reference](rag/08-reference.md) |
| Decide whether to trust it | Concept | [Limitations](rag/10-limitations.md), [Evaluation](rag/12-evaluation.md) |
| Fix a problem | Troubleshooting | [Troubleshooting](rag/11-troubleshooting.md) |

If you're unsure where to begin, write the pages in each set's "Start with the minimum
set" list.

## Clone a template

Use one of the following four methods to copy templates into your documentation.

### Copy one page

Open the template on GitHub, select **Raw**, copy the text, and paste it into a new
file in your docs repository.

### Copy one set from the command line

Run [degit](https://github.com/Rich-Harris/degit), which copies a folder without the
repository's history. The following command copies the MCP server set into
`docs/mcp`:

```bash
npx degit zthewriter/context-for-ai/templates/mcp-server#v1.0.0 docs/mcp
```

Replace `mcp-server` with the folder of the set you need. Always pin a release tag,
such as `#v1.0.0`, so later changes to this repository don't change what you copied.
The template notes live in a separate folder, so they aren't copied.

### Fill a template with a coding agent

Copy the [fill-template skill](../skills/fill-template/SKILL.md) into your agent's
skills folder, then ask the agent to fill a template by its ID, for example "Fill
MCP-04 for our server". The skill tells the agent which facts it may take from your
code and which it must ask you for.

### Add templates to a docs framework

The templates are Markdown with YAML front matter. The following notes cover three
common frameworks:

- **Docusaurus:** Docusaurus 3 reads `.md` files as MDX by default, and MDX doesn't
  accept HTML comments, so delete the guidance comment before you build, or set
  `markdown: { format: 'detect' }` in `docusaurus.config.js`. Docusaurus reads
  `title` and accepts the other front matter keys, so you can keep or delete them.
- **MkDocs:** MkDocs reads YAML front matter at the top of a page and uses `title`.
  Delete the other keys if your theme displays page metadata.
- **Mintlify:** pages are MDX, and MDX doesn't accept HTML comments, so delete the
  guidance comment before you add the page. Keep `title`.

In every framework, delete the guidance comment before you publish.

Templates link to other pages in the same set, and a few link to other sets or to
guides in this repository. After you copy, update or remove links to pages you did
not copy. Your framework's broken-link check, if it has one, lists them.

## Write each page

For each page you chose, do the following:

1. Copy the template into your documentation site. See
   [Clone a template](#clone-a-template).
2. Read the guidance comment at the top. It lists the purpose, the audience, what to
   add for internal or external readers, and the questions to ask the builders.
3. Interview the builders, and test the system.
4. Replace every `[bracketed placeholder]` with real content from your system.
5. Keep the section order. Delete a section only if it doesn't apply to your system.
6. Replace the sample output with real output from your system.
7. Delete the guidance comment.

## Keep the sections that make a page complete

Each tutorial, quick start, and concept template contains the same core sections. Keep
them, because readers and AI agents rely on them:

| Section | What it does |
|---|---|
| Who this page is for | Tells readers whether the page is theirs, and what they should already know |
| What you will build (or What you'll learn) | States the outcome before the steps |
| Core concepts | Defines each term the first time it appears |
| Prerequisites | Lists everything a reader needs before step one |
| Steps with expected output | Lets readers check each step |
| Security considerations | States the risks a reader takes on |
| Next steps | Points to the next page for each goal |

## Choose internal or external

Every template works for both. Use the following table to adapt it:

| | External documentation | Internal documentation |
|---|---|---|
| Sign-up and access | Link to public sign-up and API key pages | Link to your access-request process |
| Names | Describe parts by what they do | Name each service, version, and owner |
| Operations | Omit runbooks | Add an "Owners and support" section with the on-call channel and runbooks |
| Evaluation | Publish results with their method | Include raw results and the labeled set location |

## Check your work

Before you publish, check the following:

1. Every code block runs when copied in order.
2. Every table and list has a lead-in sentence.
3. The page follows [the style guide](style.md): second person, no "we," active voice,
   and descriptive link text.
4. Every diagram has a title and description for screen readers.
5. Every figure states how it was measured.
6. The page has an owner and a review date.

Use the [checklists](../checklists/) for a fuller review.

## Next steps

To continue, use one of the following pages:

- To start with RAG, see the [RAG templates](rag/).
- To start with a decision model, see the [decision model templates](decision-model/).
- To combine them, see the [hybrid templates](hybrid/).
- To understand why the templates are shaped this way, see
  [Documentation best practices for AI systems](best-practices.md).
