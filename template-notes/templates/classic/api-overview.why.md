# Why the API overview template exists (CLS-05)

This note explains why the [API overview template](../../../templates/classic/api-overview.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Developers and agents need the rules that apply to every endpoint in one place.

## What the classic document misses

A classic API overview mixes conventions into long pages. The upgrade gives each convention its own section, so an agent that retrieves the rate limit section gets the whole rule, including what the client sees when it exceeds it.

## What goes wrong without it

Generated client code ignores rate limits and pagination, because the rules were not in the passage the agent retrieved.
