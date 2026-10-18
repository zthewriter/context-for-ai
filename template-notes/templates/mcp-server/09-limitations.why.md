# Why the Limitations template exists (MCP-09)

This note explains why the [Limitations template](../../../templates/mcp-server/09-limitations.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents and developers both over-trust a connected server, so the limits need to be stated where they look.

## What the classic document misses

A classic known-issues page lists bugs. It does not state what the server was never meant to do, or what to use instead.

## What goes wrong without it

Agents call the server for tasks outside its scope and return confident, wrong results.
