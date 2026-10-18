# Why the Data model and ERD template exists (CLS-04)

This note explains why the [Data model and ERD template](../../../templates/classic/data-model-erd.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents now write queries and migrations, and they need the data model in text.

## What the classic document misses

A classic ERD is a diagram alone. The upgrade adds a plain-language sentence per relationship, a table per entity, and a column naming the service that writes each attribute, because a diagram is not retrievable text and ownership is the first question before any change.

## What goes wrong without it

An agent writes a migration against a table another service owns.
