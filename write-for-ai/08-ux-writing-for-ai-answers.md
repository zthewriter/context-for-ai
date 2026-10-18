# UX writing for AI answers

The words around an AI answer decide whether people trust it the right amount: enough
to use it, not so much that they stop checking. This page is a pattern library for
that microcopy.

## Principles

1. **Describe what happened, not how sure the machine feels.** "Based on 3 documentation
   pages" is checkable. "I'm fairly confident" is not.
2. **Make the source one click away.** A source the reader can open is worth more
   than any disclaimer.
3. **Make no answer a useful answer.** Point somewhere specific.
4. **Do not apologize repeatedly.** One clear statement beats three softeners.
5. **Never blame the reader.** "I couldn't find that in the documentation" is better
   than "Your question was unclear."

## Patterns

### Answer with sources

> Based on 3 documentation pages. **Sources:** Rotate an API key, Create an API key,
> Revoke an API key

### No good match

> I couldn't find this in the documentation. It may not be documented yet.
> **Talk to a person** or **Search the community forum**.

### Partial match

> The documentation covers creating an API key, but not limiting its permissions.
> Here is what it does cover:

### Conflicting sources

> Two pages disagree. The current guide says a revoked key stops working within one
> minute; an older page says one hour. The current guide is more likely to be right.

### Possibly outdated

> This answer is based on an article last updated in March 2025. Check the release
> notes for later changes.

### Before an irreversible action

> This revokes the API key, and requests that use it will fail. Check the cited page
> before continuing.

### Feedback prompt

> Did this answer your question? **Yes** / **No**
>
> (After No:) What was missing? This goes to the team that writes the documentation.

## Words to avoid

The following table lists phrases to avoid in answers, and what to write instead:

| Avoid | Why | Use |
|---|---|---|
| "As an AI..." | Adds nothing | Say the thing |
| "I think" / "I believe" | Implies a judgment it did not make | "Based on [source]" |
| "Always" / "never" in generated answers | Rarely true across versions | State the condition |
| "Sorry for the confusion" | Apology without information | Say what is known |

## Further reading

- [Context engineering for writers](07-context-engineering.md)
- [Limitations template](../templates/rag/10-limitations.md)
