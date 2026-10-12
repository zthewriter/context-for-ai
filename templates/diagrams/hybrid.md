# Hybrid diagram templates

This page contains Mermaid diagrams for documenting a system that combines a decision
model with retrieval and a language model. Copy a diagram and its description into
any Markdown file that renders Mermaid. Each diagram includes an `accTitle` and an
`accDescr`, which screen readers announce, and a description to place before the
diagram so every reader gets the same information. For the method behind these
diagrams, see [Diagramming AI systems for readers](README.md).

## Route, then answer

The following diagram shows a system that classifies each question before answering
it. How-to questions get an answer from the documentation. Account-specific and
uncertain questions go to a person.

```mermaid
flowchart LR
  accTitle: Route, then answer
  accDescr: A decision model classifies each question. How-to questions are answered from the documentation. Account-specific questions and questions the model isn't sure about go to a person.
  Q[Question] --> J{What kind of question?}
  J -- how-to --> R[Answer from the documentation]
  J -- account-specific --> P[Person]
  J -- not sure --> P
```

## Check passages before answering

The following diagram shows a system that checks each retrieved passage before the
answer is written. Relevant evidence goes to the answer writer, conflicting passages
are passed along separately, and irrelevant or unsafe passages are dropped.

```mermaid
flowchart LR
  accTitle: Check passages before answering
  accDescr: Retrieved passages are checked one by one. Evidence and conflicting passages go to the answer writer, which writes an answer with citations. Irrelevant or unsafe passages are dropped.
  Q[Question] --> R[Retrieve passages]
  R --> J{Check each passage}
  J -- evidence --> G[Write the answer]
  J -- conflict --> G
  J -- irrelevant or unsafe --> X[Dropped]
  G --> A[Answer with citations]
```

## Verify after answering

The following diagram shows a system that checks an answer's citations before the
reader sees it. Unsupported claims are removed or flagged.

```mermaid
flowchart LR
  accTitle: Verify after answering
  accDescr: An answer is written with citations. Each citation is checked against its source. Supported answers are shown to the reader. Unsupported claims are removed or flagged.
  Q[Question] --> G[Answer with citations]
  G --> J{Does each source support its claim?}
  J -- yes --> A[Shown to the reader]
  J -- no --> F[Claim removed or flagged]
```

## Who decides what (any hybrid system)

The following diagram shows which part of a hybrid system does what, so readers don't
assume that one AI did everything.

```mermaid
flowchart TB
  accTitle: Who decides what
  accDescr: Search finds candidate passages. A decision model routes requests, checks passages, and verifies answers. A language model writes the words.
  subgraph Finds
    S[Search: finds candidate passages]
  end
  subgraph Decides
    D[Decision model: routes, checks, verifies]
  end
  subgraph Writes
    W[Language model: writes the words]
  end
  S --> D --> W
```
