# Why the How answers are generated template exists (RAG-07)

This note explains why the [How answers are generated template](../../../templates/rag/07-how-answers-are-generated.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Readers deciding whether to trust a RAG system ask how an answer is put together.

## What the classic document misses

A classic architecture overview shows components. This template follows one question from retrieval to the cited answer, in the order the reader experiences it.

## What goes wrong without it

Readers treat the answer as the model's own knowledge and do not check the cited source.
