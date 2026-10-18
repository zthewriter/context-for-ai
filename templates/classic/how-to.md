---
template_id: CLS-13
title: "How-to guide"
doc_type: how-to
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "How-to guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: How-to guide (task page)
Purpose: Help a reader who already knows the product complete one task.
Audience: Readers with a specific goal, and coding agents carrying out the task for
them.
Internal or external:
- External: describe steps customers can perform.
- Internal: add internal tools, approvals, and links to tickets or dashboards.
Before you write, ask the builders:
- What exactly is the goal, and how does the reader know it is done?
- Which permission or setting must be in place first?
- What goes wrong most often, and how is it fixed?
Rules:
- Follow the writing style in ../style.md.
- Cover one goal. If the page has two goals, write two pages.
- Put the goal in the title and the first sentence, so a retrieved page states what
  it does.
- Number the steps, and start each one with a verb.
Agent notes:
- Infer from the repo: commands, settings, and file paths used in the steps.
- Ask a person: the permission each step needs and the most common failure.
Delete this comment before you publish.
-->

# [Verb] [object]

This page shows you how to [goal]. [When or why a reader needs to do it.]

## Who this page is for

This page is for [readers] who need to [goal].

## Prerequisites

Before you begin, make sure you have the following:

- [Permission or role]
- [Setting or prior task, with a link]

## [Verb] [object]

To [goal], do the following:

1. [Step.]
1. [Step.]
1. [Step.]

## Verify that [object] is [state]

To confirm that it worked, [check]. [What the reader sees.]

## If [object] does not [work]

If [symptom], [fix]. For other problems, see [troubleshooting, with a link].

## Example

The following example shows the steps filled in for a fictional hosting platform:

```markdown
## Add a custom domain

To add a custom domain to a Kestrel app, do the following:

1. In the Kestrel console, open the app and select **Domains**.
1. Select **Add domain** and enter `docs.example.com`.
1. Copy the CNAME record that Kestrel shows, and add it at your DNS provider.
```
