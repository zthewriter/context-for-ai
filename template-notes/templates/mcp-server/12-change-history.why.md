# Why the Change history template exists (MCP-12)

This note explains why the [Change history template](../../../templates/mcp-server/12-change-history.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Connected agents and saved workflows depend on tool names and descriptions, so changes to them break users.

## What the classic document misses

Classic release notes treat a reworded description as cosmetic. For an agent it is a change to the interface.

## What goes wrong without it

Users find a renamed or reworded tool by watching their workflows fail.
