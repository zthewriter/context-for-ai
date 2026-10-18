# Why the Integration spec template exists (FDE-08)

This note explains why the [Integration spec template](../../../forward-deployed-engineers/templates/integration-spec.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Most forward deployed work is connecting the product to systems the customer already has.

## What the classic document misses

An interface control document lists fields. This template adds who owns each credential and what happens when the customer system is slow, down, or returns bad data.

## What goes wrong without it

The customer system goes down, and the integration fails in a way nobody agreed to.
