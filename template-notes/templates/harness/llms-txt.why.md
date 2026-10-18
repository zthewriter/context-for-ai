# Why the llms.txt template exists (HRN-07)

This note explains why the [llms.txt template](../../../templates/harness/llms-txt.md) exists. It lives outside the template folders, so copying a set does not copy it.

## What demand created this document

Agents that fetch a site need a short list of the pages worth reading, in Markdown.

## What the classic document misses

A classic sitemap lists every URL for a crawler. It carries no notes about what each page answers and no policy about what to leave out.

## What goes wrong without it

The file grows into a second sitemap, and agents read pages that do not help.
