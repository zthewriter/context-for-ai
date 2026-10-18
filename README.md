# Context for AI

How AI consumes your content, uses it, and turns it into responses, plus the
documentation templates, checklists, and methods to write for both AI and people.

Everything here is free to copy into your own docs.

> Want tools that show how AI actually uses your content? See
> [Awesome Context Observability](https://github.com/zthewriter/awesome-context-observability).
> Building a product with AI and no code? See
> [Ship with AI](https://github.com/zthewriter/ship-with-ai).

## Who this is for

Technical writers, developer advocates, UX writers, and context engineers, along with
anyone else responsible for words that people and AI rely on.

## Part 1: Write for AI

Understand what happens to your content after you publish it, so you can write it on
purpose.

| Read | To understand |
|---|---|
| [How AI uses your content](write-for-ai/01-how-ai-uses-your-content.md) | The three ways AI systems use content: generating answers (RAG), making decisions (decision models), and both |
| [How content becomes passages](write-for-ai/02-how-content-becomes-passages.md) | What a RAG system does to your pages before anyone asks a question |
| [How passages become answers](write-for-ai/03-how-passages-become-answers.md) | How passages are found, chosen, and turned into a generated answer |
| [How decision models use context](write-for-ai/04-how-decision-models-use-context.md) | How a decision model uses your words to choose, score, and decide |
| [Connecting content to answers](write-for-ai/05-connecting-content-to-answers.md) | How analytics trace an answer back to the passage and page behind it |
| [Writing docs AI can use](write-for-ai/06-writing-docs-ai-can-use.md) | Ten practices that make passages work on their own |
| [Context engineering for writers](write-for-ai/07-context-engineering.md) | Writing instructions and tool descriptions for agents |
| [UX writing for AI answers](write-for-ai/08-ux-writing-for-ai-answers.md) | The words around an AI answer |

## Part 2: Templates

Copy, fill in, publish. The templates are *section templates*: each one is a template
for one page of your documentation site, and each set is a menu of pages to choose
from. They're built from the practices the strongest public documentation has in
common:

- **Every page type a reader needs:** tutorial, quick start, concepts, overview, task,
  reference, security, limitations, troubleshooting, evaluation, and change history.
- **Audience, prerequisites, and definitions on every page:** each page says who it's
  for, what the reader needs first, and defines the technology with a link to its
  official reference.
- **Internal or external:** each template says what to add or remove for internal
  documentation and for customer-facing documentation.
- **Consistent, accessible writing:** every template follows the Google developer
  documentation style guide, with lead-in sentences, descriptive links, and a title
  and text description for every diagram.
- **Guidance built in:** each template lists the questions to ask the builders and
  the rules for filling it in.

Start with [How to use these templates](templates/how-to-use.md),
[Documentation best practices for AI systems](templates/best-practices.md), and
[Writing style for these templates](templates/style.md).

| Templates | For documenting |
|---|---|
| [RAG systems](templates/rag/) | Systems that answer questions by searching content and generating a response |
| [Decision-model systems](templates/decision-model/) | Systems that use a decision model to classify, score, and route |
| [Hybrid systems](templates/hybrid/) | Systems that combine the two |
| [Audience guides](templates/audience-guides/) | Admin, end user, and developer guides for any AI system |
| [Technical design document](templates/technical-design-doc.md) | How an AI system is built, for the people who maintain it |
| [Case study](templates/case-study.md) | What an AI system did for a real team, with evidence |
| [Diagrams](templates/diagrams/) | Mermaid diagrams at each audience level, with the method behind them |

More template sets are planned: SDK docs, API docs, MCP server docs, and headless
product docs. See the [templates roadmap](templates/README.md#roadmap).

## Part 3: Roles

Two folders, kept separate. Each one starts from a pool of 10 public openings
read on October 17, 2026, at 7:15 p.m. Central Time. The pages name the duties
that overlapped and the documents those duties need. They do not name employers
or quote postings. The method, the coded counts, and the interview log are in
[research](research/README.md).

| Folder | For writing about |
|---|---|
| [AI engineers](ai-engineers/) | Agents, retrieval, evaluations, and the pages that decide whether a change can ship |
| [Forward deployed engineers](forward-deployed-engineers/) | Customer deployments, playbooks, reference architectures, and the pack left behind when the builder leaves |

Three more folders index the templates other roles use. They are not based on the
job-posting pool:

| Folder | For writing about |
|---|---|
| [Developer advocates](developer-advocates/) | Verified samples, quickstarts, and demos |
| [Context engineers](context-engineers/) | Sources, retrieval rules, memory, and how docs reach agents |
| [Internal engineering](internal-engineering/) | Internal codebases that coding agents work in |

## Part 4: Checklists

The following table lists each checklist and what it checks:

| Checklist | Checks |
|---|---|
| [Site agent readiness](checklists/site-agent-readiness.md) | `robots.txt`, `llms.txt`, Markdown versions, the Agent-Friendly Documentation Spec, and more |
| [Page AI readiness](checklists/page-ai-readiness.md) | Whether one page works when AI reads it as passages |
| [AI system docs completeness](checklists/ai-system-docs-completeness.md) | Whether an AI system's docs answer what each audience needs |

## Link to a stable version

To link to a page or a heading here, put a release tag such as `v1.0.0` in the URL instead of `main`. Tagged text never changes, moved files keep a stub, and renamed headings keep their old anchor, as the [versioning policy](VERSIONING.md) describes. To cite the repository itself, use [CITATION.cff](CITATION.cff).

## Contributing

Everyone contributes through pull requests, and every pull request is reviewed and
approved by the maintainer before it is merged. Nobody pushes to `main` directly.
Read [CONTRIBUTING.md](CONTRIBUTING.md) for what we accept and where each kind of
contribution goes.

## License

Templates, writing, and diagrams are released under [CC BY 4.0](LICENSE-CONTENT):
use them anywhere, including commercially, with credit. Code, scripts, workflows,
and skills are released under the [MIT License](LICENSE).

## Maintained by

[Zair Rogelio](https://github.com/zthewriter), a technical writer. Disclosure: I also
build [MCP Studio](https://appatools.com/mcp-studio?utm_source=github&utm_medium=oss&utm_campaign=context-for-ai&utm_content=readme)
at Appa Tools, which is mentioned where it is relevant. Nothing here requires it.
