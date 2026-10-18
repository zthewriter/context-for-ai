# Why the Context source map template exists (HRN-03)

This note explains why the [Context source map template](../../../templates/harness/context-source-map.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

When an agent reads several sources, someone must decide which one answers which kind of question.

## What the classic document misses

A classic content inventory lists pages by topic. It does not map questions to sources, so it cannot settle which source wins when two could answer.

## What goes wrong without it

The agent answers from whichever source ranked first, including ones that should never answer that question.
