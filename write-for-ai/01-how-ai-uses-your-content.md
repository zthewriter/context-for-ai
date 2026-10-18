# How AI uses your content

Your content no longer only gets read. It gets split, searched, quoted, and used to
make decisions, often without a person ever opening the page. Knowing how that works
is what lets you write content that holds up when AI uses it.

There are three common ways an AI system uses content today.

## 1. To generate an answer (RAG)

A RAG system (retrieval augmented generation) searches your content for passages
related to a question, hands the best ones to a language model, and the model writes
an answer from them.

```mermaid
flowchart LR
  accTitle: How a RAG system answers
  accDescr: Your content is split into passages and indexed, a question searches those passages, and a language model writes an answer with citations from the best ones.
  C[Your content] --> P[Split into passages and indexed]
  Q[A question] --> S[Search the passages]
  P --> S
  S --> M[Language model writes an answer]
  M --> A[Answer with citations]
```

**What your words become:** evidence. A passage is quoted, paraphrased, or ignored.

## 2. To make a decision (decision model)

A decision model, such as Jev from
TypeSafe AI or an open source zero-shot classifier, does not write text at all. It receives a piece of content (the *state*)
and typed questions with defined options, and returns a probability for each option
plus a confidence score. Software then acts on the result: route a ticket, flag a
passage, approve or escalate.

```mermaid
flowchart LR
  accTitle: How a decision model decides
  accDescr: A state and questions with options you define go into a decision model, which returns probabilities and confidence, and your code decides what happens.
  S[State: a message, a passage, a record] --> J[Decision model]
  Q[Questions with options you define] --> J
  J --> D[Probabilities and confidence]
  D --> C[Your code decides what happens]
```

**What your words become:** criteria. The option descriptions and definitions you
write are what the model judges against.

## 3. Both together (hybrid)

Many real systems combine the two. A decision model classifies the question, or
checks which retrieved passages are relevant, and a language model writes the answer
from what passed.

```mermaid
flowchart LR
  accTitle: How a hybrid system answers
  accDescr: Retrieved passages go to a decision model that checks each one, relevant evidence goes to a language model that writes a cited answer, and irrelevant or unsafe passages are dropped.
  Q[Question] --> R[Retrieve passages]
  R --> J[Decision model checks each passage]
  J -->|relevant evidence| M[Language model writes the answer]
  J -->|irrelevant or unsafe| X[Dropped]
  M --> A[Answer with citations]
```

**What your words become:** both evidence and criteria.

## Why this matters for writers

The following table shows what your content needs to do for each way an AI system uses it:

| If your content is used as | It needs to |
|---|---|
| Evidence (RAG) | Make sense as a short passage, out of context, with the answer stated plainly |
| Criteria (decision models) | Define each option precisely, so options do not overlap |
| Both (hybrid) | Do both, and be consistent, because one part judges what the other part says |

The rest of this section goes one level deeper on each.

## Next

[How content becomes passages](02-how-content-becomes-passages.md)
