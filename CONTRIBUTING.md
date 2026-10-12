# Contributing

Thank you for helping. This project is better with more people checking it.

## How contributions work

1. **Every change is a pull request.** Nobody pushes to `main` directly, including
   collaborators. `main` is protected.
2. **Every pull request is reviewed and approved by the maintainer,
   [@zthewriter](https://github.com/zthewriter), before it is merged.** The
   [CODEOWNERS](.github/CODEOWNERS) file makes that review required.
3. **The maintainer merges.** Contributors do not merge their own pull requests.
4. **Automated checks must pass** (links, diagrams, and a secrets scan) before a pull
   request can be merged.

You will get a first response on every pull request and Discussion within two
business days. Not every pull request is accepted; when one is not, you will get a
reason.

## Step by step

1. **For anything bigger than a fix, open a Discussion first** so you and the maintainer can agree on
   scope before you write. This includes new pages and new template sets.
2. **Fork** this repository and create a branch with a short descriptive name, such as
   `fix-rag-limitations-typo` or `add-mcp-tool-description-template`.
3. **Make your change** following the style rules below.
4. **Open a pull request** against `main` and fill in the template.
5. **Respond to review.** The maintainer may ask for changes. Push them to the same
   branch.
6. **The maintainer approves and merges.**

## What goes where

The following table shows where each kind of contribution goes:

| You want to | Put it in | Notes |
|---|---|---|
| Explain how AI uses content | `write-for-ai/` | Concepts, not product how-tos. Open a Discussion first |
| Add or improve a RAG template | `templates/rag/` | Keep the numbered order; add to the example if you add a template |
| Add or improve a Jev template | `templates/jev/` | Check details against the model provider's current API reference |
| Add or improve a hybrid template | `templates/hybrid/` | |
| Add an audience guide | `templates/audience-guides/` | One reader per guide |
| Add a diagram | `templates/diagrams/` | Mermaid only, with a description before it |
| Add a checklist item | `checklists/` | Link the standard or spec it comes from |
| Start a new template set (SDK, API, MCP, headless) | `templates/<set>/` | Listed on the [roadmap](templates/README.md#roadmap). Discussion required first |
| List a tool | Not here | Tools go in [Awesome Context Observability](https://github.com/zthewriter/awesome-context-observability) |
| Report something wrong | An issue | Use the **Correction** form |

## Style rules

1. **American English**, second person ("you"), sentence-case headings.
2. **No em dashes.** Use a period, a comma, a colon, or parentheses.
3. **Explain why before how.** A reader should know when to use something.
4. **Every claim is checkable.** Link a source for figures, and say how a number was
   measured.
5. **Teach the field, not a product.** Products may appear as one example among
   others, with any affiliation disclosed.
6. **Templates follow the house format**: a guidance comment at the top (audience,
   questions to ask, rules), brackets for what to replace, one reader's question per
   template.
7. **Diagrams are Mermaid**, one idea each, five to seven boxes, with a one-paragraph
   description before it that doubles as alt text.
8. **Templates are section templates.** Each one covers one page type, and states its
   audience and prerequisites, defines the technology with a link to its official
   reference, and puts a lead-in sentence before every table, list, and code block.
9. **No "we," "our," or "us"** in templates and examples. Write to the reader.


## Page template

```markdown
# Title in sentence case

One or two sentences: what this is and why it matters.

## How it works

The explanation, with one diagram.

## What this means for writers

## Further reading
```

## Licensing

By contributing, you agree that your contribution is licensed under
[CC BY 4.0](LICENSE-CONTENT) for writing, templates, and diagrams, and the
[MIT License](LICENSE) for code.

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).
