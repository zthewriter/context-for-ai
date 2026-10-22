# AEO templates

The answer engine optimization (AEO) set documents how your public content is meant
to appear in AI answer engines: the questions it should answer, the engines in scope,
what answer engines may read, and the prompts you run to check the result. An answer
engine is a system that answers a question in its own words and may cite sources,
such as a chat assistant with web search or an AI summary in search results.

## When to use the AEO set

Use this set when people ask AI assistants about your product or field before they
reach your site, and you want to know whether the answers cite your content. The set
documents a content strategy, not an agent. To document an agent's own context and
how you observe it, use the [harness set](../harness/README.md), including the
[context observability plan](../harness/context-observability-plan.md).

## AEO pages

The following table lists the AEO templates in the order most teams write them:

| ID | Template | What it records | Required |
|---|---|---|---|
| AEO-01 | [AEO strategy](aeo-strategy.md) | The goal, engines in scope, content priorities, access policy, and success measure | Required |
| AEO-02 | [Tracked prompt set](tracked-prompt-set.md) | The prompts you run on a schedule, the page each should cite, and the results | Required |

## How the AEO templates fit together

The templates refer to each other, so keep them consistent:

- Every engine in the tracked prompt set is listed in the AEO strategy.
- The success measure in the AEO strategy is computed from the tracked prompt set.
- If you publish an `llms.txt` file, the access policy agrees with the
  [llms.txt template](../harness/llms-txt.md).

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/templates/aeo#v1.1.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](example-kestrel-aeo.md), which
documents AEO for Kestrel, a fictional hosting platform.

## How the AEO templates are built

Every template follows the [template anatomy](../anatomy.md). For the writing rules,
see [Writing style for these templates](../style.md).
