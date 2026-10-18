# Why the API errors template exists (CLS-07)

This note explains why the [API errors template](../../../templates/classic/api-errors.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents retry and repair failed calls on their own, so an error page is now an instruction set.

## What the classic document misses

A classic error reference lists codes and meanings. The upgrade gives each code its own heading with the cause, the fix as an action, and whether retrying is safe, so an agent can act without asking.

## What goes wrong without it

An agent retries a request that can never succeed, or gives up on one that would have.
