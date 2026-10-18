# Why the Customer data map template exists (FDE-09)

This note explains why the [Customer data map template](../../../forward-deployed-engineers/templates/customer-data-map.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Customer security reviewers ask where their data goes, and an AI system sends some of it to a model provider.

## What the classic document misses

A data flow diagram shows movement. This template adds a row per data category with retention, logging, and third parties, because those are the reviewer's questions.

## What goes wrong without it

A security review stalls for weeks, or passes without anyone knowing what is logged.
