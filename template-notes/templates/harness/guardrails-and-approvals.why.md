# Why the Guardrails and approvals template exists (HRN-10)

This note explains why the [Guardrails and approvals template](../../../templates/harness/guardrails-and-approvals.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents can now send, spend, and delete, so teams must decide which actions need a person.

## What the classic document misses

A classic access control policy grants permissions to people and roles. It does not say what an agent does while it waits for approval, or what happens when no one answers.

## What goes wrong without it

An agent takes an action that cannot be undone, because nothing said it should ask.
