# Why the RAG diagrams template exists (DGM-01)

This note explains why the [RAG diagrams template](../../../templates/diagrams/rag.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Different readers of a RAG system need different levels of detail, and a single architecture diagram serves none of them well.

## What the classic document misses

A classic architecture diagram is an image. This upgrade gives one diagram per reader, each with an accessible title, a description, and a text explanation before it, because an image alone cannot be retrieved as text.

## What goes wrong without it

An agent that retrieves the page gets no information from the diagram, and a screen reader user gets none either.
