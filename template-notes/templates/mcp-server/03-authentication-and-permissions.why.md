# Why the Authentication and permissions template exists (MCP-03)

This note explains why the [Authentication and permissions template](../../../templates/mcp-server/03-authentication-and-permissions.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

An agent acts with a user's credential, so admins need to know exactly which tool can read or change what before they approve the server.

## What the classic document misses

A classic authentication guide explains how to get a token. It does not map each tool to the permission it needs, or say that tool annotations are hints a client should not trust.

## What goes wrong without it

Admins approve a server without knowing which tools can change data.
