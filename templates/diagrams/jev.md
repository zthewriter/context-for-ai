# Jev diagram templates

This page contains Mermaid diagrams for documenting a Jev system, one for each kind
of reader. Copy a diagram and its description into any Markdown file that renders
Mermaid. Each diagram includes an `accTitle` and an `accDescr`, which screen readers
announce, and a description to place before the diagram so every reader gets the
same information. For the method behind these diagrams, see
[Diagramming AI systems for readers](README.md).

## At a glance (end users and people affected)

The following diagram shows how a request is handled. A decision model reads the
request and picks the best matching option. If it's confident, the system acts
automatically. If it isn't, a person decides.

```mermaid
flowchart LR
  accTitle: How your request is handled
  accDescr: A decision model reads your request and picks an option. If it's confident enough, your request is handled automatically. If not, a person reviews it.
  R[Your request] --> D[Decision model picks an option]
  D --> C{Confident enough?}
  C -- Yes --> A[Handled automatically]
  C -- No --> P[A person reviews it]
```

## Confidence routing (operators and support)

The following diagram shows how confidence controls actions. Low-risk actions happen
at moderate confidence. High-risk actions need high confidence or a person's
confirmation. Anything under the lowest threshold goes to a person.

```mermaid
flowchart LR
  accTitle: How confidence controls actions
  accDescr: If confidence is lower than 0.5, a person decides. Otherwise, a low-risk action happens automatically. A high-risk action happens automatically only if confidence is higher than 0.85; otherwise, a person is asked to confirm.
  D[Decision with confidence] --> L{Lower than 0.5?}
  L -- Yes --> P[Person decides]
  L -- No --> K{Low-risk action?}
  K -- Yes --> A[Act automatically]
  K -- No --> H{Higher than 0.85?}
  H -- Yes --> A
  H -- No --> C[Ask a person to confirm]
```

## Question set (developers and writers)

The following diagram shows how several questions about one state become an action.
The state is evaluated against several questions at once, and each question is
answered independently. Code combines the answers into an action.

```mermaid
flowchart LR
  accTitle: How several questions become one action
  accDescr: One state, containing a ticket, an order, and a policy, goes to the decision model. The model answers three questions independently: a yes-or-no question about whether a refund is requested, a choice of team, and a score for urgency. Code combines the answers into an action.
  S[State: ticket, order, policy] --> J[Decision model]
  J --> Q1[Yes or no: is a refund requested?]
  J --> Q2[Choice: which team?]
  J --> Q3[Score: how urgent?]
  Q1 --> C[Your code combines the answers]
  Q2 --> C
  Q3 --> C
  C --> A[Action]
```
