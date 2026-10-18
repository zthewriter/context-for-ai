# Harness templates

The harness set documents an AI agent's environment: the instructions it reads, the
context it may retrieve, the tools it may call, and the checks and approvals around
its work. Each template belongs to one of the four harness parts the
[harness engineering cookbook](https://github.com/zthewriter/harness-engineering-cookbook)
uses: guides, context engineering, tool orchestration, and guardrails.

## When to use the harness set

Use this set when you build or maintain an agent, or when agents work in your
repository. The templates document the harness, not the product the agent helps
with. For that, use the [classic set](../classic/README.md). If the agent reads
documentation through an MCP server, add the [MCP server set](../mcp-server/README.md).

## Pages by harness part

The following table lists the harness templates by part, in the order most teams
write them. Required pages are the minimum for an agent other people rely on.

| ID | Template | Harness part | Required |
|---|---|---|---|
| HRN-01 | [AGENTS.md](agents-md.md) | Guides | Required |
| HRN-02 | [Agent skill](agent-skill.md) | Guides | Optional: one per repeated procedure |
| HRN-03 | [Context source map](context-source-map.md) | Context | Required |
| HRN-04 | [Retrieval rules spec](retrieval-rules-spec.md) | Context | Optional: when you use retrieval rules |
| HRN-05 | [Memory spec](memory-spec.md) | Context | Optional: when the agent remembers across sessions |
| HRN-06 | [Context delivery plan](context-delivery-plan.md) | Context | Required |
| HRN-07 | [llms.txt](llms-txt.md) | Context | Optional: when you publish an `llms.txt` file |
| HRN-08 | [Tool catalog](tool-catalog.md) | Tool orchestration | Required |
| HRN-09 | [Definition of done](definition-of-done.md) | Tool orchestration | Required |
| HRN-10 | [Guardrails and approvals](guardrails-and-approvals.md) | Guardrails | Required |
| HRN-11 | [Session handoff note](session-handoff-note.md) | Guardrails | Optional: for work that spans sessions |
| HRN-12 | [Context changelog](context-changelog.md) | Context | Required |

## How the templates fit together

The templates refer to each other, so keep them consistent:

- The tool catalog and the guardrails page use the same permission levels.
- Every retrieval rule names a source from the context source map.
- The definition of done is linked from AGENTS.md.
- Every change to sources, rules, or instructions gets a context changelog entry.

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/templates/harness#v1.0.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](example-kestrel-docs-assistant.md), which documents
the Kestrel docs assistant, with every page consistent with the others.

## How the templates are built

Every template follows the [template anatomy](../anatomy.md). For the writing rules,
see [Writing style for these templates](../style.md).
