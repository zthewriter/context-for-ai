---
template_id: FDE-01
title: "Field playbook"
doc_type: how-to
template_class: new
personas: [forward-deployed-engineer, technical-writer]
replaces_or_extends: "Implementation guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Field playbook (task page)
Purpose: Record the repeated steps of a customer engagement so the next account does not start from zero.
Audience: Forward deployed engineers and the writer who keeps the playbook current.
Internal or external:
- Internal: this page stays internal. It describes how your team works.
- External: do not publish this page. Customers receive the handover pack, the reference architecture, and the limitations note.
Before you write, ask the builders:
- What question starts every engagement?
- What metric means the customer adopted the system?
- Which steps were repeated on the last three accounts?
- What failure should the product team hear about?
Rules:
- Follow the writing style in ../../templates/style.md.
- Write steps you have used more than once. A one-off belongs in that account's handover pack until it repeats.
- Do not include a customer's name, data, or credentials. Use [account] as the placeholder.
Agent notes:
- Infer from the deployment repo: the setup steps, commands, and configuration the
  engagement uses.
- Ask a person: the customer's constraints, the decision makers, and anything learned
  in the field that is not in the code.
Delete this comment before you publish.
-->

# Field playbook for [motion or product area]

This page is the repeated path from a first conversation to a system [account]
runs without you. Update it when a step changes for every new account, not when
one account needs a special case.

## Who this page is for

This page is for the forward deployed engineer on the next account, and for the
writer who keeps the path accurate.

## Prerequisites

Before you begin, make sure you have the following:

- The reference architecture for this motion
- A way to record the success metric the account agrees to

## What you learn before you build

Ask the following, and write the answers in the account folder before you write
code:

1. What decision or task should be faster or more consistent when this works?
2. Which system holds the data, and who can grant access?
3. What is the person doing by hand today, and what must stay in their hands?
4. What number will [account] accept as success, and who measures it?

Stop and rewrite the scope when the answer to the first question is still
vague. A build without that answer does not have a handover test.

## The path that repeats

Do the following in order. Skip a step only when the account folder says why.

1. Confirm access to [data or system] with a read that returns one known record.
2. Run the smallest path in the reference architecture against that record.
3. Agree the success metric with [role at the account].
4. Add the account-specific tools using a tool contract for each one.
5. Run the evaluation questions the account cares about. Record the method and the date.
6. Watch [role] complete the task on their own. Fix the page they could not follow.
7. Deliver the handover pack and the limitations note.
8. Send [product team] the failure that should become a product change.

## What you send back

After handover, file the following where the product team reads it:

- The task the product could not do, in one sentence
- The workaround you built, and whether a second account will need it
- The evaluation row that failed in the field and should become a permanent test

Do not attach customer data to that note. Describe the shape of the data instead.
