# Why the Authentication template exists (CLS-08)

This note explains why the [Authentication template](../../../templates/classic/authentication.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Developers and agents set up credentials from this page, and security reviewers audit it.

## What the classic document misses

A classic authentication guide describes the flow in prose. The upgrade adds a sequence diagram with a step list, one row per scope, and obviously fake example values, so nothing secret is copied and each scope can be retrieved alone.

## What goes wrong without it

An agent requests broader scopes than it needs because the scope table was not in the retrieved passage.
