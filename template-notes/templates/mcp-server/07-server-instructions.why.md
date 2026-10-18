# Why the Server instructions template exists (MCP-07)

This note explains why the [Server instructions template](../../../templates/mcp-server/07-server-instructions.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

The instructions a server sends shape how every connected agent behaves, so they deserve the review and history code gets.

## What the classic document misses

There is no classic equivalent. The text lives in code, changes without notice, and its purpose is rarely written down.

## What goes wrong without it

A maintainer deletes an instruction whose reason was never recorded, and answers get worse with no visible cause.
