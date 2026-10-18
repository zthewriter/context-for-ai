# Why the Security and data template exists (HYB-07)

This note explains why the [Security and data template](../../../templates/hybrid/07-security-and-data.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Security reviewers, buyers, and affected people ask where their data goes when a hybrid system handles it.

## What the classic document misses

A classic security page covers storage and access. This template adds what is sent to a model provider, what is logged with each request, and the risks specific to AI, such as instructions hidden in retrieved content.

## What goes wrong without it

A security review stalls, or worse, passes without anyone knowing that requests are logged with their full text.
