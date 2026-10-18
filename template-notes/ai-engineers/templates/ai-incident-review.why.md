# Why the AI incident review template exists (AIE-10)

This note explains why the [AI incident review template](../../../ai-engineers/templates/ai-incident-review.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

AI systems fail by being wrong while healthy, and those failures need review like outages do.

## What the classic document misses

A classic postmortem centers on a timeline of system events. This template requires the trace of what was retrieved, decided, or called, and names content, prompts, and models as possible causes.

## What goes wrong without it

The review blames the model, and the indexed content that caused the wrong answer stays in place.
