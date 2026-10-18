# Why the SDK reference template exists (CLS-10)

This note explains why the [SDK reference template](../../../templates/classic/sdk-reference.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents write code against SDKs and read the reference to do it.

## What the classic document misses

A classic SDK reference is generated signatures. The upgrade adds when to use each class and gives each method its own heading, because an agent that searches for a method needs the whole entry in one passage.

## What goes wrong without it

An agent uses a class that works but is meant for a different job.
