# Why the State and inputs template exists (DEC-06)

This note explains why the [State and inputs template](../../../templates/decision-model/06-state-and-inputs.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Developers and reviewers need to know exactly what information a decision model sees.

## What the classic document misses

A classic data model describes storage. This template describes the state sent to the model at the moment of a decision and where each value came from.

## What goes wrong without it

Nobody can say why the model decided as it did, because nobody knows what it saw.
