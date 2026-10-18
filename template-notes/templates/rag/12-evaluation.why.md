# Why the Evaluation template exists (RAG-12)

This note explains why the [Evaluation template](../../../templates/rag/12-evaluation.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Teams shipping a RAG system need a shared definition of good enough, and buyers ask how quality is measured.

## What the classic document misses

A classic test plan checks that features work. This template measures how often answers are right, states the method beside every number, and names the result that blocks a release.

## What goes wrong without it

Each change is judged by whoever tried it last, and quality drifts without anyone noticing.
