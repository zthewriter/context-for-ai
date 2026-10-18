# Why the Architecture overview template exists (CLS-03)

This note explains why the [Architecture overview template](../../../templates/classic/architecture-overview.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Engineers and agents need to know how components relate before they change one.

## What the classic document misses

A classic architecture document centers on a diagram. The upgrade follows every diagram with one sentence per relationship, because an agent cannot read an image and a screen reader announces only its title.

## What goes wrong without it

An agent proposes a change that breaks a relationship that existed only in a picture.
