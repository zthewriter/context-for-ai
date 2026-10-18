# Why the CLI reference template exists (CLS-11)

This note explains why the [CLI reference template](../../../templates/classic/cli-reference.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents run commands in terminals on behalf of developers.

## What the classic document misses

A classic CLI reference lists flags. The upgrade documents exit codes, because an agent decides what to do next from the exit code, not from the text.

## What goes wrong without it

An agent treats a partial failure as success and continues.
