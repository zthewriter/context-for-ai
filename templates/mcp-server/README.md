# MCP server templates

The MCP server set documents a server that gives AI agents tools, resources, and
prompts through the [Model Context Protocol](https://modelcontextprotocol.io). Its
readers are the developers who connect the server and the agents that read its
descriptions to decide what to call.

The templates use the terms of
[MCP specification revision 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28),
the current revision when this set was written. If you document a server that targets
another revision, check each specification link against that revision.

## When to use the MCP server set

Use this set when you publish or maintain an MCP server, for your own teams or for
customers. To document the product behind the server, add the
[classic set](../classic/README.md). If the server answers from retrieved content, add
the [RAG set](../rag/README.md).

## Pages in reading order

The following table lists the MCP server templates in the order a new reader meets
them. Required pages are the minimum for a server other people connect to.

| ID | Template | Required |
|---|---|---|
| MCP-01 | [Overview](01-overview.md) | Required |
| MCP-02 | [Connect a client](02-connect-a-client.md) | Required |
| MCP-03 | [Authentication and permissions](03-authentication-and-permissions.md) | Required |
| MCP-04 | [Tools reference](04-tools-reference.md) | Required when the server has tools |
| MCP-05 | [Resources reference](05-resources-reference.md) | Optional: when the server has resources |
| MCP-06 | [Prompts reference](06-prompts-reference.md) | Optional: when the server has prompts |
| MCP-07 | [Server instructions](07-server-instructions.md) | Required when the server returns instructions |
| MCP-08 | [Security and data](08-security-and-data.md) | Required |
| MCP-09 | [Limitations](09-limitations.md) | Required |
| MCP-10 | [Troubleshooting](10-troubleshooting.md) | Required |
| MCP-11 | [Evaluation](11-evaluation.md) | Optional: before you publish results |
| MCP-12 | [Change history](12-change-history.md) | Required |

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/templates/mcp-server#v1.0.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](example-kestrel-docs-server.md), which documents
the Kestrel docs MCP server.

## How the templates are built

Every template follows the [template anatomy](../anatomy.md). For the writing rules,
see [Writing style for these templates](../style.md).
