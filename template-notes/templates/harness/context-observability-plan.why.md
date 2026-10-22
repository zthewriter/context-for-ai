# Why the Context observability plan template exists (HRN-13)

This note explains why the [Context observability plan template](../../../templates/harness/context-observability-plan.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Teams that deliver documentation as context need to know which sources an agent retrieves, which ones it cites, and which questions it can't answer. Those signals are spread across tool logs, access logs, and evaluation runs, and nobody owns the full picture.

## What the classic document misses

A classic monitoring plan watches uptime, latency, and errors. An agent can be up, fast, and error free while it cites the wrong source or finds nothing for a whole topic. A monitoring plan has no place for retrieval, citation, or coverage signals.

## What goes wrong without it

A context change ships and answers get worse, and the only evidence is a customer complaint weeks later. The context changelog can record the change, but with no agreed signal there is no measured effect to record beside it.
