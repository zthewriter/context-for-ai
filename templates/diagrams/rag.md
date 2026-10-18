---
template_id: DGM-01
title: "RAG diagrams"
doc_type: reference
template_class: upgraded-classic
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Architecture diagram"
version: 1.0.0
---
<!--
SECTION TEMPLATE: RAG diagrams (reference page)
Purpose: Give each kind of reader a diagram of the system at the level of detail
they need, with a text description that carries the same information.
Audience: Technical writers and engineers who add diagrams to documentation about a RAG system.
Internal or external:
- External: keep the end-user and evaluator diagrams, and describe what the reader
  gets rather than internal components.
- Internal: add component names, owners, and dashboard links to the operator and
  developer diagrams.
Before you write, ask the builders:
- Which components does a request pass through, in order?
- What happens when no passage matches well?
- How does content get from its source into the index, and how often?
Rules:
- Follow the writing style in ../style.md.
- Keep accTitle and accDescr in every diagram, and put a text description before
  each diagram.
- Delete the diagrams for readers you don't have.
Agent notes:
- Infer from the code: the components a request passes through and how content reaches
  the index.
- Ask a person: which component names may be published and which reader each diagram
  is for.
Delete this comment before you publish.
-->

# RAG diagram templates

This page contains Mermaid diagrams for documenting a retrieval-augmented generation
(RAG) system, one for each kind of reader. Copy a diagram and its description into
any Markdown file that renders Mermaid. Each diagram includes an `accTitle` and an
`accDescr`, which screen readers announce, and a description to place before the
diagram so every reader gets the same information. For the method behind these
diagrams, see [Diagramming AI systems for readers](README.md).

## Who this page is for

This page is for technical writers and engineers who add diagrams to documentation about a RAG system.

## Prerequisites

You need a Markdown renderer that supports Mermaid, such as GitHub or [your docs platform].

## At a glance (end users)

The following diagram shows where an answer comes from. A question is used to search
indexed content, the most relevant passages are selected, and an answer is written
from them with links to its sources. If nothing matches well, the reader is told and
pointed to other help.

```mermaid
flowchart LR
  accTitle: Where an answer comes from
  accDescr: Your question is used to search the documentation. If a passage is a good match, you get an answer with source links. If not, the system says it couldn't find an answer and tells you where to ask.
  Q[Your question] --> S[Search the documentation]
  S --> M{Good match?}
  M -- Yes --> A[Answer with source links]
  M -- No --> N[Says it couldn't find it, and where to ask]
```

## Content lifecycle (operators and support)

The following diagram shows how content reaches answers. Content is published, split
into passages, and indexed. A refresh repeats this on a schedule, so edits reach
answers after the next refresh. Excluded content never enters the index.

```mermaid
flowchart LR
  accTitle: How content reaches answers
  accDescr: Published content from an included source is split into passages and indexed, which makes it available to answers. Content from an excluded source isn't indexed. A scheduled refresh repeats the splitting and indexing.
  P[Content is published] --> R{Included source?}
  R -- No --> X[Not indexed]
  R -- Yes --> C[Split into passages]
  C --> I[Indexed content]
  I --> A[Available to answers]
  E[Scheduled refresh] --> C
```

## Request path (evaluators and developers)

The following diagram shows each step of a request. A question is searched by exact
words and by meaning. The two result lists are combined and ranked, and the top
passages go to a language model that is instructed to answer only from them. A weak
top match produces a no-answer response instead.

```mermaid
flowchart TD
  accTitle: The path of a request
  accDescr: The question is searched by exact words and by meaning. The results are combined and ranked. If the top match is strong enough, a language model writes an answer from the top passages, with citations. If not, the system returns a no-answer response.
  Q[Question] --> K[Exact word search]
  Q --> V[Meaning search]
  K --> F[Combine and rank]
  V --> F
  F --> T{Top match strong enough?}
  T -- Yes --> L[Language model writes answer from top passages]
  T -- No --> N[No-answer response]
  L --> C[Answer with citations]
```

## AI agent with an MCP server (context engineers)

The following diagram shows how an AI agent uses a Model Context Protocol (MCP)
server. An AI agent, such as one in a code editor or chat app, calls a tool on the
MCP server. The server searches indexed content and returns passages with their
sources, and the agent uses them in its reply.

```mermaid
sequenceDiagram
  accTitle: How an AI agent uses an MCP server
  accDescr: A person asks an AI agent a question. The agent calls a search tool on the MCP server, which searches the indexed content and returns relevant passages with source links. The agent answers the person and cites the sources.
  participant U as Person
  participant A as AI agent
  participant M as MCP server
  participant I as Indexed content
  U->>A: Asks a question
  A->>M: Calls a search tool
  M->>I: Searches
  I-->>M: Relevant passages
  M-->>A: Passages with source links
  A-->>U: Answer citing the sources
```

## Before and after (marketing and evaluators)

The following diagram compares an answer with and without access to the content.
Without it, an agent answers from what it learned in training, which may be outdated
or wrong. With it, the agent answers from the current documentation.

```mermaid
flowchart LR
  accTitle: An answer with and without your content
  accDescr: Without your content, a question is answered from general training data and the answer is plausible but possibly outdated. With your content, the question is answered from your current documentation, with source links.
  subgraph Without
    Q1[Question] --> G[General training data] --> A1[Plausible, possibly outdated answer]
  end
  subgraph With
    Q2[Question] --> D[Your current documentation] --> A2[Answer with source links]
  end
```
