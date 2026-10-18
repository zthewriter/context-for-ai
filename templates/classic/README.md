# Classic templates

The classic set holds the document types writers already know, such as a README, an
API reference, and a runbook, upgraded so each one also works as context an AI agent
retrieves. Each template keeps the classic structure and adds what an agent needs:
one fact per section, headings that name their subject, and text beside every
diagram.

## When to use the classic set

Use the classic set to document any software project, API, SDK, or service, with or
without AI in it. To document an AI system's behavior, add the
[RAG](../rag/README.md), [decision model](../decision-model/README.md), or
[hybrid](../hybrid/README.md) set.

## Pages in reading order

The following table lists the classic templates in the order a new reader meets them.
Required pages are the minimum for a project others depend on. Add optional pages
when the project has the matching interface or audience.

| ID | Template | Required |
|---|---|---|
| CLS-01 | [Project README](project-readme.md) | Required |
| CLS-02 | [Technical overview](technical-overview.md) | Required |
| CLS-03 | [Architecture overview](architecture-overview.md) | Required |
| CLS-04 | [Data model and ERD](data-model-erd.md) | Optional: when the project stores data |
| CLS-05 | [API overview](api-overview.md) | Optional: when the project has an API |
| CLS-06 | [API endpoint reference](api-endpoint-reference.md) | Optional: one per endpoint |
| CLS-07 | [API errors](api-errors.md) | Optional: when the project has an API |
| CLS-08 | [Authentication](authentication.md) | Optional: when the project has an API |
| CLS-09 | [SDK quick start](sdk-quickstart.md) | Optional: when the project has an SDK |
| CLS-10 | [SDK reference](sdk-reference.md) | Optional: one per class or module |
| CLS-11 | [CLI reference](cli-reference.md) | Optional: one per command |
| CLS-12 | [Tutorial](tutorial.md) | Required |
| CLS-13 | [How-to guide](how-to.md) | Optional: one per task |
| CLS-14 | [Concept](concept.md) | Optional: one per idea |
| CLS-15 | [Troubleshooting](troubleshooting.md) | Required |
| CLS-16 | [Release notes](release-notes.md) | Required |
| CLS-17 | [Migration guide](migration-guide.md) | Optional: one per breaking release |
| CLS-18 | [Architecture decision record](adr.md) | Optional: one per decision |
| CLS-19 | [Runbook](runbook.md) | Optional: one per alert, for services you run |
| CLS-20 | [Onboarding guide](onboarding-guide.md) | Optional: for internal codebases |
| CLS-21 | [Glossary](glossary.md) | Optional: when the project has its own terms |

Two templates outside this folder also belong to the classic set:

- CLS-22, the [technical design document](../technical-design-doc.md), records how a
  system is built and why.
- CLS-23, the [case study](../case-study.md), records what a system achieved for one
  team.

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/templates/classic#v1.0.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](example-kestrel-deploy-cli.md), which documents
the Kestrel deploy CLI.

## How the templates are built

Every template follows the [template anatomy](../anatomy.md). For the writing rules,
see [Writing style for these templates](../style.md).
