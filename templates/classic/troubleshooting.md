---
template_id: CLS-15
title: "Troubleshooting"
doc_type: how-to
template_class: upgraded-classic
personas: [technical-writer, developer-advocate, internal-engineer]
replaces_or_extends: "Troubleshooting guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Troubleshooting (task page)
Purpose: Help a reader go from a symptom to a fix: what they see, why it happens, and
what to do.
Audience: Users, support engineers, and agents that diagnose problems from an error
message or a description.
Internal or external:
- External: list problems customers can fix themselves, and when to contact support.
- Internal: add log queries, dashboards, and escalation paths.
Before you write, ask the builders:
- Which problems come up most often in support tickets and the issue tracker?
- For each one, what is the exact error message or visible symptom?
- What fixes it, and how does the reader confirm it is fixed?
Rules:
- Follow the writing style in ../style.md.
- Put the symptom in the heading, in the words a reader would search for. Quote exact
  error messages.
- Give each problem its own section with symptom, cause, and fix, so each one can be
  retrieved alone.
- Reproduce each problem and confirm each fix before you publish.
Agent notes:
- Infer from the code and issue tracker: exact error messages, the conditions that
  raise them, and fixes in closed issues.
- Ask a person: which problems are most common and when to escalate.
Delete this comment before you publish.
-->

# Troubleshoot [product or feature]

This page lists common problems with [product or feature], their causes, and how to
fix them.

## Who this page is for

This page is for [users or operators] who see an error or unexpected behavior in
[product or feature].

## Prerequisites

To use the fixes on this page, you need [access or tools].

## "[Exact error message or symptom]"

- **Symptom:** [What the reader sees.]
- **Cause:** [Why it happens, in one sentence.]
- **Fix:** [Steps, as actions.]
- **Confirm the fix:** [What the reader sees when it works.]

## [Next symptom]

[Repeat the pattern.]

## Get more help

If none of these fixes work, [contact support, with a link], and include [what to
include, for example the request ID].

## Example

The following example shows one problem filled in for a fictional hosting platform:

```markdown
## "Health check failed: no response on port 8080"

- **Symptom:** The deployment rolls back, and the log shows this message.
- **Cause:** The app listens on a port other than the one Kestrel checks.
- **Fix:** Set the `PORT` environment variable in your app, or change the health
  check port under **Settings > Health check**.
- **Confirm the fix:** The next deployment shows **Healthy**.
```
