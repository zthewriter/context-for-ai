# Why the Tool catalog template exists (HRN-08)

This note explains why the [Tool catalog template](../../../templates/harness/tool-catalog.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents call tools from several servers and APIs, and reviewers need one place to see them all with their permission levels.

## What the classic document misses

A classic service catalog lists services for engineers. It does not record which tools an agent may call or at what permission level.

## What goes wrong without it

Tools get connected without review, and nobody can say what the agent is able to do.
