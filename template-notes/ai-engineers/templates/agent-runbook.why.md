# Why the Agent runbook template exists (AIE-04)

This note explains why the [Agent runbook template](../../../ai-engineers/templates/agent-runbook.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents in production fail in ways that need a person, and the person on call may not have built the agent.

## What the classic document misses

A classic runbook covers a service that is up or down. This template also covers an agent that is up and wrong, which no health check detects.

## What goes wrong without it

The on-call engineer sees healthy dashboards while the agent gives users wrong results.
