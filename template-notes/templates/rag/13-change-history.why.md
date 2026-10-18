# Why the Change history template exists (RAG-13)

This note explains why the [Change history template](../../../templates/rag/13-change-history.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Readers of a RAG system need to know when its behavior changed, because the same question can get a different answer after a change.

## What the classic document misses

Classic release notes record code changes. This template also records changes to content, models, prompts, and thresholds, which change behavior without touching code.

## What goes wrong without it

A reader sees a different answer than last week and cannot tell whether it is a bug or an intended change.
