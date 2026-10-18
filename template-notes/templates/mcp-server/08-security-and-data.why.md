# Why the Security and data template exists (MCP-08)

This note explains why the [Security and data template](../../../templates/mcp-server/08-security-and-data.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Security reviewers must approve a server that sends user data to tools and returns content written by third parties.

## What the classic document misses

A classic security page covers storage and access. It does not cover prompt injection, where content returned by a tool carries instructions aimed at the agent.

## What goes wrong without it

A server is approved without anyone noticing that one tool returns untrusted text to the agent.
