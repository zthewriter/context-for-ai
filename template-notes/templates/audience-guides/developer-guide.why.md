# Why the Developer guide template exists (AUD-03)

This note explains why the [Developer guide template](../../../templates/audience-guides/developer-guide.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Developers integrating an AI system have to handle uncertain and partial results, not only success and error.

## What the classic document misses

A classic developer guide covers requests and errors. This upgrade adds every outcome a request can return, including low confidence and no answer.

## What goes wrong without it

Integrations treat every response as certain and pass guesses to their users as facts.
