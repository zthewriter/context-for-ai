# Why the RAG pipeline spec template exists (AIE-03)

This note explains why the [RAG pipeline spec template](../../../ai-engineers/templates/rag-pipeline.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Retrieval settings decide answer quality, and they are usually known only to the engineer who chose them.

## What the classic document misses

A classic design document records architecture. This template records each pipeline setting with the evidence for its value, so it is not changed by guesswork later.

## What goes wrong without it

A new engineer changes a setting that was chosen for a measured reason, and answers get worse.
