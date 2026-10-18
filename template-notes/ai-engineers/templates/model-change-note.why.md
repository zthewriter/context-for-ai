# Why the Model change note template exists (AIE-07)

This note explains why the [Model change note template](../../../ai-engineers/templates/model-change-note.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Teams switch models for quality, cost, latency, or deprecation, often several times a year.

## What the classic document misses

A change request records approval. This template records evaluation results for both models from the same question set, including what got worse, and the rollback path.

## What goes wrong without it

A model upgrade ships on a few good examples, and a regression surfaces weeks later with no record of what changed.
