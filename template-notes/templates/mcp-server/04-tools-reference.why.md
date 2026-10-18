# Why the Tools reference template exists (MCP-04)

This note explains why the [Tools reference template](../../../templates/mcp-server/04-tools-reference.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents choose tools by reading their names and descriptions, so the description is an interface, not a label.

## What the classic document misses

A classic API reference documents a call for a developer who already chose it. It does not explain how to choose between two similar tools, which is the decision an agent makes on every request.

## What goes wrong without it

Agents call the wrong tool, and nobody can tell from the server log why.
