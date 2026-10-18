# Why the Quality, latency, and cost card template exists (AIE-05)

This note explains why the [Quality, latency, and cost card template](../../../ai-engineers/templates/quality-latency-cost.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Every AI change trades quality, latency, and cost against each other, and teams argue about it without shared numbers.

## What the classic document misses

Classic service level objectives cover latency and availability. This template adds quality and cost per request, measured together, because improving one usually worsens another.

## What goes wrong without it

A change that improves quality doubles cost, and nobody notices until the invoice arrives.
