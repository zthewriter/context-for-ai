# Why the Connect a client template exists (MCP-02)

This note explains why the [Connect a client template](../../../templates/mcp-server/02-connect-a-client.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Every client configures servers differently, and the first failure a user meets is a connection that silently shows no tools.

## What the classic document misses

A classic installation guide covers one product. An MCP server is installed into many clients, each with its own configuration file and its own way of failing.

## What goes wrong without it

Users copy one client's configuration into another and conclude the server is broken.
