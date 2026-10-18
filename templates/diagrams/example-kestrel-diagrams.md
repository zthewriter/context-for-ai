<!--
EXAMPLE: Diagrams, filled in
This page fills in one diagram from each diagram template: RAG (DGM-01), decision
model (DGM-02), and hybrid (DGM-03), for the fictional Kestrel systems in the
other examples. Kestrel is a fictional hosting platform for web apps. The values
match the RAG, decision model, and hybrid examples.
Delete this comment before you copy this page.
-->

# Kestrel diagrams, filled in

This example shows one diagram from each template, drawn for a Kestrel system. Each
diagram has a text description before it, so the page works without the image.

## RAG diagram (DGM-01)

The at-a-glance diagram, for customers of the Kestrel docs assistant. Your question
searches three Kestrel guides. A good match returns an answer that cites a guide
section. Otherwise, the assistant says it couldn't find the answer.

```mermaid
flowchart LR
  accTitle: Where a Kestrel docs assistant answer comes from
  accDescr: Your question searches the API keys, deploy, and billing guides. If a passage matches, you get an answer that cites the guide section. If not, the assistant says it couldn't find the answer in the Kestrel guides.
  Q[Your question] --> S[Search the Kestrel guides]
  S --> M{Good match?}
  M -- Yes --> A[Answer citing a guide section]
  M -- No --> N[I couldn't find that in the Kestrel guides]
```

## Decision model diagram (DGM-02)

The confidence routing diagram, for Kestrel support leads. The security check runs
first. Then the area answer routes the request to a team at 0.80 confidence or
higher, or to a person below that.

```mermaid
flowchart TD
  accTitle: How Kestrel request triage routes by confidence
  accDescr: A request with a security probability of 0.20 or higher goes to the security queue. Otherwise, an area answer with confidence of 0.80 or higher routes the request to that team, and lower confidence sends it to the triage queue for a person.
  R[Support request] --> S{Security 0.20 or higher?}
  S -- Yes --> SQ[Security queue]
  S -- No --> C{Area confidence 0.80 or higher?}
  C -- Yes --> T[Billing, technical, or account team]
  C -- No --> P[Triage queue for a person]
```

## Hybrid diagram (DGM-03)

The check passages before answering diagram, for the Kestrel checked documentation
assistant. Search returns 10 passages, a decision model checks each, and only the
passages that pass reach the answer writer.

```mermaid
flowchart LR
  accTitle: How the Kestrel checked docs assistant checks passages
  accDescr: Search returns 10 passages from the Kestrel guides. A decision model checks each one. Passages that pass go to the answer writer, which answers with citations. If none pass, the assistant declines.
  Q[Question] --> R[Search returns 10 passages]
  R --> J{Passage check}
  J -- passes --> G[Answer writer]
  J -- none pass --> D[Decline]
  G --> A[Answer with citations]
```
