# Why the Change history template exists (DEC-14)

This note explains why the [Change history template](../../../templates/decision-model/14-change-history.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Readers of a decision-model system need to know when its behavior changed, because the same question can get a different decision after a change.

## What the classic document misses

Classic release notes record code changes. This template also records changes to content, models, prompts, and thresholds, which change behavior without touching code.

## What goes wrong without it

A reader sees a different decision than last week and cannot tell whether it is a bug or an intended change.
