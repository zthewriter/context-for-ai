<!--
EXAMPLE: Forward deployed engineer templates, filled in
This page fills in every forward deployed engineer template for one fictional
engagement, with Kestrel, a fictional hosting platform, as the customer. Every
value is written to show the templates, not to document a real engagement.
Delete this comment before you copy this page.
-->

# Kestrel engagement pages, filled in

This example shows the pages from an engagement with Kestrel, a fictional hosting
platform, to build a support docs assistant. Each section is one page, shortened to
its key sections.

## Field playbook (FDE-01)

The following page records the path that repeats across support assistant
engagements:

```markdown
# Field playbook: support docs assistant

## What you learn before you build

Which questions support answers every day (sample 100 recent tickets), where the
docs live, and who owns them.

## The path that repeats

1. Connect the customer's docs MCP server to their support tool.
2. Measure the 100-ticket sample before launch, as the baseline.
3. Add retrieval rules only for misses the sample shows.
4. Hand over with the handover pack.

## What you send back

File a field feedback report when a customer asks for something the docs server
cannot do, such as searching past tickets.
```

## Reference architecture (FDE-02)

The following page shows what was deployed for Kestrel:

```markdown
# Reference architecture: Kestrel support assistant

## The parts

- **Support tool:** where the support team asks questions.
- **Assistant:** the agent, configured with the Kestrel docs MCP server.
- **Kestrel docs MCP server:** `search_docs` and `get_page`, scope `docs:read`.
- **Kestrel support API:** `open_ticket`, after the user confirms.

## What stays in Kestrel's account

The support API key and every ticket. The docs server holds only published guides.
```

## Sample and tutorial (FDE-03)

The following page lets Kestrel engineers run the assistant themselves:

```markdown
# Run the Kestrel support assistant sample

## Run the sample

1. Run `npm ci`.
2. Set `KESTREL_DOCS_MCP_URL=https://mcp.kestrel.example/mcp`.
3. Run `npm start` and sign in to Kestrel when the browser opens.

## Expected output

Ask "How do I roll back a deployment?" The answer cites
`https://docs.kestrel.example/guides/deploy#roll-back-a-deployment`.

## If the output does not match

| What you see | Fix |
|---|---|
| No tools listed | Finish the sign-in in the browser, then restart |
| An answer with no link | Check that `KESTREL_DOCS_MCP_URL` is set |
```

## Handover pack (FDE-04)

The following page is what Kestrel keeps when the engagement ends:

```markdown
# Handover: Kestrel support assistant

## Who owns it now

The Kestrel docs team owns the assistant and its sources. The support team owns
ticket handling.

## Turn it off

Remove the Kestrel docs MCP server from the support tool's configuration. Tickets
already opened stay open.
```

## Limitations note (FDE-05)

The following page tells Kestrel what the assistant will not do:

```markdown
# Limitations of the Kestrel support assistant

## What it will not do

- Read a customer's apps, deployments, or invoices.
- Issue refunds or change plans.
- Report outages from memory. It reads the status page live.

## How to tell a limit from a failure

A limit: the assistant says it cannot help and offers to open a ticket. A failure:
it answers without a link to a Kestrel page.
```

## Discovery brief (FDE-06)

The following page records the problem before the build:

```markdown
# Discovery brief: Kestrel support assistant

## The problem

In Kestrel's words: "Our support team answers the same hosting questions every day,
and the answers are already in our docs."

## Systems involved

- The Kestrel docs site, which the assistant reads.
- The Kestrel support API, where the assistant opens tickets.

## Decision makers

- Kestrel support lead: approves the success criteria and sign-off.
```

## Success criteria (FDE-07)

The following page records the result both sides agreed on:

```markdown
# Success criteria: Kestrel support assistant

| Criterion | Target | Baseline | Method | Period | Measured by |
|---|---|---|---|---|---|
| Support questions answered without an engineer | 60 of 100 | 20 of 100 | Sample of 100 tickets, labeled by the support lead | Four weeks after launch | Kestrel support lead |
```
