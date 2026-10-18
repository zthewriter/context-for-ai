<!--
EXAMPLE: Developer advocate templates, filled in
This page fills in the verified sample README (DVA-01) and the demo script (DVA-02)
for one fictional talk, a five-minute demo of the Kestrel docs assistant. Kestrel is
a fictional hosting platform for web apps. The commands, versions, and output are
written to show the templates, not to document a real tool.
Delete this comment before you copy this page.
-->

# Kestrel docs assistant demo, filled in

This example shows the sample README the audience clones after the talk, and the
script the presenter follows on stage. Each section is one page, shortened to its
key sections.

## Verified sample README (DVA-01)

The following README ships with the demo's sample repository:

````markdown
# Kestrel docs assistant sample

**Verified:** 2026-10-01, with Kestrel API v3, kestrel-sdk 2.4.0, and Node.js 22.

## Run it

1. Run `npm ci`.
2. Set `KESTREL_DOCS_MCP_URL=https://mcp.kestrel.example/mcp`.
3. Run it:

   ```bash
   npm start -- "How do I roll back a deployment?"
   ```

## Check that it worked

You see an answer that ends with
`https://docs.kestrel.example/guides/deploy#roll-back-a-deployment`.
````

## Demo script (DVA-02)

The following script runs the five-minute demo, with a fallback for each step:

```markdown
# Demo: answers that cite the Kestrel docs

## Steps

| Step | You do | The audience sees | You say | If it fails |
|---|---|---|---|---|
| 1 | Open the sample in the editor | The repository and its README | "This is the sample you can clone after the talk." | Show the README screenshot in tab 2 |
| 2 | Run `npm start` with no question | The tools `search_docs` and `get_page` listed | "The agent sees two read-only tools." | Show the saved tool list in tab 3 |
| 3 | Ask "How do I roll back a deploy?" | An answer citing the rollback guide | "Every answer links to the page it came from." | Show the saved answer in tab 4 |
| 4 | Ask "Does Kestrel support Kubernetes?" | "I couldn't find that in the Kestrel docs." | "When the docs don't say, neither does the agent." | Show the saved answer in tab 5 |

## Reset after the demo

Clear the terminal and close tabs 2 to 5, so the next run starts clean.
```
