# Why the API endpoint reference template exists (CLS-06)

This note explains why the [API endpoint reference template](../../../templates/classic/api-endpoint-reference.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Coding agents generate calls from endpoint references, and they copy what they find.

## What the classic document misses

A classic endpoint reference lists parameters. The upgrade adds when to use the endpoint instead of a similar one, real tested examples, and an OpenAPI description beside the page, because an agent chooses between endpoints the way it chooses between tools.

## What goes wrong without it

An agent calls a similar endpoint that does almost the right thing.
