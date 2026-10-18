# Why the Migration guide template exists (CLS-17)

This note explains why the [Migration guide template](../../../templates/classic/migration-guide.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents now perform upgrades, applying code changes across a repository.

## What the classic document misses

A classic migration guide describes changes in prose. The upgrade shows each change as before and after code and adds a checklist and rollback, so an agent can apply and verify each change.

## What goes wrong without it

An agent applies half a migration and leaves the codebase between versions.
