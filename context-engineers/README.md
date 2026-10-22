# Context engineers

This folder is for context engineers, who decide what an AI agent can see: which
sources it reads, the rules that choose between them, what it remembers, how
documentation reaches it, and how anyone finds out whether that context was used.
This folder holds no templates of its own. It indexes the templates this role uses
most.

## Templates this role uses

The following templates live in other folders and are linked here, not copied:

| ID | Template | Use it for |
|---|---|---|
| HRN-03 | [Context source map](../templates/harness/context-source-map.md) | Which question each source answers, and its owner |
| HRN-04 | [Retrieval rules spec](../templates/harness/retrieval-rules-spec.md) | Rules that force or prefer a source, each with a test |
| HRN-05 | [Memory spec](../templates/harness/memory-spec.md) | What persists across sessions, and when it expires |
| HRN-06 | [Context delivery plan](../templates/harness/context-delivery-plan.md) | The channel for each audience, and how usage is observed |
| HRN-07 | [llms.txt](../templates/harness/llms-txt.md) | An `llms.txt` file and its listing policy |
| HRN-12 | [Context changelog](../templates/harness/context-changelog.md) | Context changes and their measured effect |
| HRN-13 | [Context observability plan](../templates/harness/context-observability-plan.md) | Which signals show what the agent retrieves and cites, and what to do when they move |
| AEO-01 | [AEO strategy](../templates/aeo/aeo-strategy.md) | Which questions your content should answer in AI answer engines |
| AEO-02 | [Tracked prompt set](../templates/aeo/tracked-prompt-set.md) | The prompts you run on a schedule and what each engine cited |
| MCP-04 | [Tools reference](../templates/mcp-server/04-tools-reference.md) | Tool descriptions agents choose from |
| MCP-07 | [Server instructions](../templates/mcp-server/07-server-instructions.md) | The instructions an MCP server sends, versioned |
| MCP-11 | [Evaluation](../templates/mcp-server/11-evaluation.md) | Tool choice and answers on a fixed question set |
| AIE-06 | [Prompt and instruction spec](../ai-engineers/templates/prompt-and-instruction-spec.md) | A system prompt as a versioned contract |

For the full sets, see the [harness templates](../templates/harness/README.md) and the
[MCP server templates](../templates/mcp-server/README.md).

## Recipes for this role

For steps that put these documents to work, see the
[context engineer recipes](https://github.com/zthewriter/harness-engineering-cookbook/blob/v1.0.0/context-engineers/README.md)
in the harness engineering cookbook.
