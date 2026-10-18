# Why the Troubleshooting template exists (MCP-10)

This note explains why the [Troubleshooting template](../../../templates/mcp-server/10-troubleshooting.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

MCP problems fall into three groups, connection, authentication, and tool choice, and each needs a different fix.

## What the classic document misses

A classic troubleshooting guide assumes the server log shows the problem. A client that never sends a request leaves nothing in the server log, so the client log is the first place to look.

## What goes wrong without it

Teams debug a healthy server while the problem sits in a client configuration.
