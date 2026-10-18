# Why the Prompt and instruction spec template exists (AIE-06)

This note explains why the [Prompt and instruction spec template](../../../ai-engineers/templates/prompt-and-instruction-spec.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

System prompts change behavior as much as code does, and teams edit them more often than code.

## What the classic document misses

A configuration reference lists settings and defaults. This template treats a prompt as a contract: its purpose, its inputs, the constraints it must keep, and the evaluation question that tests each constraint.

## What goes wrong without it

A prompt is edited to fix one answer and silently breaks a behavior nobody wrote down.
