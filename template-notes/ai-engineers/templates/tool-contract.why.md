# Why the Tool contract template exists (AIE-02)

This note explains why the [Tool contract template](../../../ai-engineers/templates/tool-contract.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents choose tools by reading their names and descriptions, so the description is part of the interface.

## What the classic document misses

A classic API reference is written for a developer who reads all of it. This template is written for a model that reads only the name and description, and it treats a change to either as a breaking change.

## What goes wrong without it

An agent calls the wrong tool, or the right tool with the wrong arguments, and nobody can see why from the code.
