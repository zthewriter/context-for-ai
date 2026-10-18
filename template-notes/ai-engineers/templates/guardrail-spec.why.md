# Why the Guardrail spec template exists (AIE-08)

This note explains why the [Guardrail spec template](../../../ai-engineers/templates/guardrail-spec.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

AI systems add input and output checks, and each check blocks some requests it should not.

## What the classic document misses

Validation rules document what is rejected. This template adds the false-positive rate, what the user sees, and how to appeal, because an AI check is a judgment, not a schema.

## What goes wrong without it

Users are blocked with no explanation, and support cannot tell which check fired or why.
