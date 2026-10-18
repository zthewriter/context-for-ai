# Why the Runbook template exists (CLS-19)

This note explains why the [Runbook template](../../../templates/classic/runbook.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

On-call engineers and assisting agents follow runbooks under pressure.

## What the classic document misses

A classic runbook lists steps. The upgrade marks every step that changes production and who approves it, and records when it was last tested, so an agent knows which steps it may not run alone.

## What goes wrong without it

An assisting agent runs a production-changing step that needed approval.
