# Why the Handoffs template exists (HYB-04)

This note explains why the [Handoffs template](../../../templates/hybrid/04-handoffs.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

A hybrid system passes results between parts, and each handoff is a place information can be lost.

## What the classic document misses

A classic interface specification lists fields. This template also records what each handoff guarantees and what happens when one side is unsure.

## What goes wrong without it

One part's uncertainty is dropped at the handoff, and the next part acts on a guess as if it were a fact.
