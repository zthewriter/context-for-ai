# Why the Hybrid tutorial template exists (HYB-01)

This note explains why the [Hybrid tutorial template](../../../templates/hybrid/01-tutorial.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Teams building a hybrid system need one path from nothing to a working result, because the concepts only make sense once a reader has seen them run.

## What the classic document misses

A classic tutorial ends when the code runs. It does not show the reader how to tell a good results from a plausible wrong one, so this template adds a step that checks the result against its source.

## What goes wrong without it

Readers copy the code, get output that looks right, and ship a system they cannot evaluate.
