# Developer advocates

This folder is for developer advocates, whose quickstarts, samples, and demos are
now read by AI agents as well as people. An agent that copies a quickstart into a
user's project runs every step exactly as written, so a sample has to work on the
date it claims and against the versions it names.

## Templates for this role

The following templates belong to this folder:

| ID | Template | Use it for |
|---|---|---|
| DVA-01 | [Verified sample README](templates/verified-sample-readme.md) | A sample whose steps were run on a stated date and version |
| DVA-02 | [Demo script](templates/demo-script.md) | A live demo, step by step, with a fallback for each step |

## Shared templates this role uses

The following templates live in other folders and are linked here, not copied:

| ID | Template | Use it for |
|---|---|---|
| CLS-12 | [Tutorial](../templates/classic/tutorial.md) | A learning path that ends in a working result |
| CLS-09 | [SDK quick start](../templates/classic/sdk-quickstart.md) | Install, authenticate, first call, verify |
| FDE-03 | [Sample and tutorial](../forward-deployed-engineers/templates/sample-and-tutorial.md) | A sample built for one customer's setup |
| MCP-02 | [Connect a client](../templates/mcp-server/02-connect-a-client.md) | Setting up an MCP server in each client |

## Recipes for this role

For steps that deliver these pages as context, see the
[developer advocate recipes](https://github.com/zthewriter/harness-engineering-cookbook/blob/v1.0.0/developer-advocates/README.md)
in the harness engineering cookbook.

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/developer-advocates/templates#v1.0.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../templates/how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](templates/example-kestrel-demo.md), which
documents a five-minute demo of the Kestrel docs assistant.
