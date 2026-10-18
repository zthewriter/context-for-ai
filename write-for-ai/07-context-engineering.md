# Context engineering for writers

Context engineering is deciding what an AI agent knows, and how it is told, before it
answers. Much of it is writing: the instructions an agent receives, the descriptions
that tell it which tool to use, and the content those tools return. Writers are
already good at this, and most teams have no one doing it.

## The three pieces of writing an agent reads

The following table lists the three pieces of writing an agent reads, and what each one decides:

| Piece | Who reads it | What it decides |
|---|---|---|
| Server or system instructions | The model, once per conversation | How it behaves: grounding, citations, tone, what to do when unsure |
| Tool names and descriptions | The model, every time it picks a tool | Which tool it calls, and with what input |
| Returned content | The model, per answer | What the answer can say |

The third piece is your docs. The first two are covered below.

## Template: MCP server instructions

MCP servers can send instructions to the agent when it connects. Copy, then replace
the brackets.

```text
[Server name] answers questions from [content, for example "the Kestrel documentation"].

Grounding
- Base every factual claim on the passages these tools return.
- If the passages do not contain the answer, say so and name what is missing.
  Do not fill the gap from general knowledge.
- Quote exact strings verbatim: settings, commands, error messages, version numbers.

Versions
- Prefer current documentation over version-specific pages unless the question names a version.
- If passages disagree, give the current answer and mention the difference.

Citations
- Give the source link for each fact so the reader can check it.

Searching
- Search using the words the documentation uses, not only the words of the question.
- If the first search is thin, search again with different terms before concluding the answer is absent.
```

Why each part is there:

- **Grounding** stops the agent from mixing your docs with its training data.
- **"Say so and name what is missing"** turns a confident wrong answer into a useful
  gap report.
- **Verbatim strings** prevent the model from tidying a command into one that does
  not work.
- **Search again** fixes the most common failure: one poorly worded search, then
  giving up.

## Patterns for tool descriptions

A model chooses a tool by reading its name and description, so write them the way you
would write a menu label and its tooltip.

| Pattern | Weak | Strong |
|---|---|---|
| Say when to use it | "Searches docs." | "Search the documentation for how-to steps and setting explanations. Use for any question about using the product." |
| Say when not to | (nothing) | "Not for account-specific questions; the documentation has no account data." |
| Describe inputs as questions | "query: string" | "query: the question in the user's words, or the error message exactly as shown" |
| Name the output | (nothing) | "Returns up to five passages, each with its source link." |
| Distinguish siblings | Two tools both "search docs" | "Use `get_code_examples` for code; use `search_docs` for explanations." |

## Testing your instructions

1. Write ten questions: seven your content answers, three it does not.
2. Ask each in a client connected to your server.
3. For the seven, check the tool chosen, the answer, and the citation.
4. For the three, check that the agent said it could not find the answer.
5. Change one sentence at a time and re-run. Keep a log of what each change did.

## Further reading

- [UX writing for AI answers](08-ux-writing-for-ai-answers.md)
- [Model Context Protocol specification](https://modelcontextprotocol.io/)
