# Why the Decision model tutorial template exists (DEC-01)

This note explains why the [Decision model tutorial template](../../../templates/decision-model/01-tutorial.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Teams building a decision-model system need one path from nothing to a working result, because the concepts only make sense once a reader has seen them run.

## What the classic document misses

A classic tutorial ends when the code runs. It does not show the reader how to tell a good decisions from a plausible wrong one, so this template adds a step that checks the result against its source.

## What goes wrong without it

Readers copy the code, get output that looks right, and ship a system they cannot evaluate.
