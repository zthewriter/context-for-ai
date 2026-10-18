---
name: fill-template
description: Copies a Context for AI documentation template by its template ID, fills it from the code and from answers you give, and checks the page before handing it back. Use when someone asks to fill, write, or draft a page from a template, names an ID such as MCP-04 or CLS-15, or asks for docs "using the Context for AI templates".
---

# Fill a template

## Steps

1. **Find the template by its ID.** Look up the ID in
   `templates/catalog.json` in the zthewriter/context-for-ai repository, pinned to a
   release tag, and copy the file at its `path` into the user's docs folder. If the
   ID is not in the catalog, stop and say so.
2. **Read the guidance comment.** It is the HTML comment at the top. Note the
   purpose, the audience, the internal or external notes, and the questions under
   "Before you write, ask the builders".
3. **Fill what `Agent notes` says you may infer.** Read the code, configuration, and
   existing docs for those facts only. Note the file each fact came from.
4. **Ask the person for everything else.** Ask the questions under "Agent notes" that
   say "Ask a person", in one message. Do not guess an answer to any of them.
5. **Replace every placeholder.** Search the page for `[` and confirm no bracketed
   placeholder is left. If a fact is still missing, leave the placeholder and list
   it in your report.
6. **Delete the guidance comment.** Keep the front matter unless the person's docs
   framework needs it removed. `templates/how-to-use.md` in the same repository
   and release has notes for common frameworks.
7. **Check the page.** Run the checklist in `checklists/page-ai-readiness.md`, from
   the same repository and release, and fix what fails. Update or remove links to
   pages the person did not copy.

## Report format

- Page written: the path.
- Facts taken from the code: each fact and the file it came from.
- Facts the person gave: a short list.
- Placeholders left: each one, and what is needed to fill it.
- Checklist: passed, or the items that still fail.

## Never

- Never invent a fact, a number, a version, or a command. Leave the placeholder.
- Never copy real secrets, tokens, customer names, or internal hostnames from the
  code into the page.
- Never keep the guidance comment in a page you hand back as finished.
