# Why the Architecture decision record template exists (CLS-18)

This note explains why the [Architecture decision record template](../../../templates/classic/adr.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents propose designs, and they propose the obvious option, which is often the one already rejected.

## What the classic document misses

A classic ADR records the decision. The upgrade requires the rejected options with their evidence, because a rejected option leaves no trace in the code and an agent will propose it again.

## What goes wrong without it

Teams re-run an experiment that already failed, because the evidence was never written down.
