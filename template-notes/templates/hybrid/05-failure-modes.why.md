# Why the Failure modes template exists (HYB-05)

This note explains why the [Failure modes template](../../../templates/hybrid/05-failure-modes.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Operators of a hybrid system need to know what happens when any one part fails or is unsure.

## What the classic document misses

A classic failure analysis covers outages. This template also covers a part that runs but returns a weak result, which is how hybrid systems usually fail.

## What goes wrong without it

A weak result from one part flows through the others and comes out as a confident wrong answer.
