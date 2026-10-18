---
template_id: AUD-02
title: "Admin guide"
doc_type: how-to
template_class: upgraded-classic
personas: [technical-writer, internal-engineer]
replaces_or_extends: "Admin guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Admin guide (task page)
Purpose: Help the people who configure and operate the system keep it accurate,
safe, and current.
Audience: Admins and operators.
Internal or external:
- External: document the settings customers' admins can change.
- Internal: add runbooks, dashboards, and the escalation path.
Before you write, ask the builders:
- Which settings can an admin change, and which need an engineer?
- How is a reported mistake triaged, and who owns the fix?
Rules:
- Follow the writing style in ../style.md.
- Make every section something an admin does. Start each task heading with a verb.
- Delete sections that don't apply to your system type.
Agent notes:
- Infer from the configuration and admin interface: the settings, roles, and
  dashboards an admin uses.
- Ask a person: which settings need an engineer, and how a reported mistake is
  triaged.
Delete this comment before you publish.
-->

# Administer [system name]

This guide shows admins how to manage [system name]'s content, decisions, and access,
monitor its quality, and handle reported mistakes.

## Who this page is for

This guide is for the admins and operators who configure [system name], manage what it answers from, and handle reported mistakes.

## Prerequisites

To complete the tasks in this guide, you need the following:

- [Role or permission]
- [Access to the dashboard or configuration, with a link to request it]

## Manage content sources

<!-- RAG and hybrid systems. -->

[Summarize, and link to the full procedures in the RAG set's Manage content page:
how to add, refresh, exclude, and remove a source, and how long a change takes to
reach results.]

## Manage questions, criteria, and thresholds

<!-- Decision-model and hybrid systems. -->

To change an option definition or a confidence threshold, do the following:

1. [Propose the change to [owner], with examples of decisions it would change.]
2. [Get approval from [role].]
3. [Make the change in [location].]
4. [Record the change in the change history.]

## Configure access

[Describe who can use the system, how to make it private, and how to issue and revoke
credentials.]

## Monitor quality

The following table lists the signals to watch and what to do when each one changes:

| Signal | Where to find it | What to do when it changes |
|---|---|---|
| [Unanswered questions] | [Analytics page] | [Add or fix content.] |
| [Low-confidence decisions] | [Review queue] | [Review the criteria for overlapping options.] |
| [Pages never used in answers] | [Analytics page] | [Fix, merge, or retire the page.] |

## Handle a reported mistake

To handle a reported mistake, do the following:

1. Reproduce the mistake using the input, the time, and the result in the report.
2. Find the cause, such as missing content, a wrong passage, or an unclear definition.
3. Fix the cause, and record the change in the change history.
4. Reply to the person who reported it.

## Routine tasks

The following table lists recurring tasks, how often to do them, and who owns them:

| Task | How often | Owner |
|---|---|---|
| [Review unanswered questions] | [Weekly] | [Team] |
| [Run the evaluation] | [After every criteria or content change] | [Team] |
| [Rotate credentials] | [Quarterly] | [Team] |
