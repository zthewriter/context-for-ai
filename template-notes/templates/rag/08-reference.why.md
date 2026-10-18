# Why the Reference template exists (RAG-08)

This note explains why the [Reference template](../../../templates/rag/08-reference.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Developers integrating a RAG system need every field, type, and limit in one place.

## What the classic document misses

A classic API reference lists fields. This template adds the fields that describe confidence and states which model or content version each response came from.

## What goes wrong without it

Developers ignore the confidence and source fields and build integrations that cannot handle an uncertain answer.
