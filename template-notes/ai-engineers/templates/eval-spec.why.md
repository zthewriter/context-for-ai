# Why the Evaluation spec template exists (AIE-01)

This note explains why the [Evaluation spec template](../../../ai-engineers/templates/eval-spec.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

AI engineers change prompts, models, and retrieval weekly and need a fixed contract to test each change against.

## What the classic document misses

A classic test plan lists cases that pass or fail. This template defines a question set, a grader, and a release bar, because an AI result is graded, not asserted.

## What goes wrong without it

Changes ship on the strength of a few manual tries, and regressions reach users first.
