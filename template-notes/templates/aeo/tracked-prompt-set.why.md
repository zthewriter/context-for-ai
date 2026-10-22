# Why the Tracked prompt set template exists (AEO-02)

This note explains why the [Tracked prompt set template](../../../templates/aeo/tracked-prompt-set.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Answer engine results can't be read from a dashboard the way search rankings can. The only reliable way to know whether an engine cites your content is to ask it the same questions on a schedule and record what it says.

## What the classic document misses

A classic keyword tracking list holds short search terms and a rank. People type full questions into answer engines, answers vary between runs, and the outcome is cited, mentioned, absent, or wrong rather than a position. A keyword list records none of that, and it has no run method, so two runs can't be compared.

## What goes wrong without it

Someone tries a few prompts, sees one good answer, and reports success. Prompts get reworded between runs, so trends are meaningless, and a wrong claim about the product goes unnoticed because nobody was checking for it.
