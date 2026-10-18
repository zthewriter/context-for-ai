---
template_id: RAG-09
title: "Security and data"
doc_type: concept
template_class: new
personas: [technical-writer, ai-engineer]
replaces_or_extends: "Security and privacy page"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Security and data (concept page)
Purpose: Explain who can see what, what is stored, and how the system handles content
that tries to manipulate it. Security reviewers, buyers, and admins read this page
before they approve the system.
Audience: Admins, security reviewers, and evaluators.
Internal or external:
- External: describe guarantees and controls. Don't publish details that would help
  an attacker, such as internal hostnames or the exact wording of mitigations.
- Internal: add the threat model, the owners of each control, and links to the
  security review and incident runbook.
Before you write, ask the builders and your security team:
- Does retrieval respect the permissions of the source content? How?
- What is stored (questions, answers, passages, logs), where, and for how long?
- Who in the organization can read stored questions and answers?
- Is any data used to train models? By whom?
- What mitigations exist for prompt injection in retrieved content?
Rules:
- Follow the writing style in ../style.md.
- Don't claim that any mitigation fully prevents prompt injection.
- Have your security team review this page before you publish it.
Agent notes:
- Infer from the code and configuration: what is logged, where data is stored, and
  which third parties receive it.
- Ask a person: retention periods, the legal basis for processing, and anything the
  security team must approve before publishing.
Delete this comment before you publish.
-->

# Security and data handling

This page describes how [system name] controls access to content, what data it
stores, and how it handles content that tries to manipulate its answers.

## Who this page is for

This page is for administrators and security reviewers who decide whether [system name] meets their requirements.

## Prerequisites

Before you begin, make sure you have the following:

- [Permission to view access settings]
- A read of the [indirect prompt injection](04-concepts-in-depth.md#grounding-and-citations) discussion

## Access control

[Choose the statement that's true, and delete the others.]

- [System name] respects the permissions of each source. When you ask a question,
  [system name] retrieves only passages from content you're allowed to see.
- [System name] indexes only content that everyone with access to [system name] is
  allowed to see. Don't add sources that contain restricted content.

[Describe how access to the system itself is controlled, for example "Only members
of your workspace can ask questions" or "Each API key is scoped to one workspace."]

## Data that [system name] stores

The following table lists the data that [system name] stores:

| Data | Why it's stored | Retention | Who can see it |
|---|---|---|---|
| Questions and answers | [Reason, for example "To show your history and measure quality"] | [Period] | [Roles] |
| Indexed passages | To answer questions | Until the source is removed | [Roles] |
| Uploaded files | [Reason] | [Period, or "Not stored; only the extracted text is kept"] | [Roles] |
| Logs | [Reason] | [Period] | [Roles] |

[State whether data is used to train models, and by whom. For example: "Your content,
questions, and answers aren't used to train models."]

## Prompt injection

> **Warning:** Content that [system name] retrieves can contain text that looks like
> instructions, such as "ignore your previous instructions." Because retrieved
> passages are given to the language model alongside its instructions, the model
> might follow them. This is called indirect prompt injection.

No technique fully prevents prompt injection. [System name] reduces the risk in the
following ways:

- [Mitigation, for example "The model is instructed to treat retrieved passages as
  information, not as instructions."]
- [Mitigation, for example "Each passage is labeled with its source, so readers can
  see where text came from."]
- [Mitigation, for example "Passages are checked for embedded instructions before they
  reach the model."]

To reduce the risk further, do the following:

- Index only content from sources you trust.
- Check that answers cite the pages you expect before you act on them.

## Report a security issue

To report a security issue, [contact method, for example "email
security@example.com"]. Don't include sensitive data in the report.
