# Site agent readiness checklist

Whether AI agents, answer engines, and RAG pipelines can find, fetch, and read your
docs site intact. Use the [page AI readiness checklist](page-ai-readiness.md) for
individual pages.

The first part follows the
[Agent-Friendly Documentation Spec](https://agentdocsspec.com/spec/), whose web
delivery spec groups its checks into seven categories. The IDs in `code` match
the names the spec uses, so you can look each one up. Its reference implementation tests a site
automatically:

```bash
npx afdocs check https://docs.example.com
```

Mark each item: **yes**, **partly**, **no**, or **not applicable**.

## Part 1: The Agent-Friendly Documentation Spec

### 1. Content discoverability

Run the following checks on how agents find your content:

| Check | Spec IDs | Result |
|---|---|---|
| An `llms.txt` exists at the site root (or docs root) | `llms-txt-exists` | |
| It follows the format: H1 title, blockquote summary, H2 sections of links with notes | `llms-txt-valid` | |
| It fits in one agent fetch (under 50,000 characters), or uses nested files | `llms-txt-size` | |
| Every link in it resolves, and links point to Markdown versions where available | `llms-txt-links-resolve`, `llms-txt-links-markdown` | |
| Every docs page carries a short pointer to `llms.txt` near the top, in HTML and Markdown | `llms-txt-directive-html`, `llms-txt-directive-md` | |

### 2. Markdown availability

Run the following checks on whether agents can get your pages as Markdown:

| Check | Spec IDs | Result |
|---|---|---|
| Each page has a Markdown version at a predictable URL (for example, `page.md`) | `markdown-url-support` | |
| Requests with `Accept: text/markdown` get Markdown | `content-negotiation` | |

### 3. Page size and truncation

Run the following checks on whether pages fit within what agents read:

| Check | Spec IDs | Result |
|---|---|---|
| Content is in the HTML the server sends, not loaded only by JavaScript | `rendering-strategy` | |
| Pages are small enough to arrive in one fetch without being cut off | `page-size-markdown`, `page-size-html`, `single-fetch-completeness` | |
| The main content starts early, not after thousands of characters of navigation | `content-start-position` | |

### 4. Content structure

Run the following checks on how your content is structured:

| Check | Spec IDs | Result |
|---|---|---|
| Content in tabs (for example, per-language code) is all present in the page source | `tabbed-content-serialization` | |
| Headings make sense out of context | `section-header-quality` | |
| Code blocks are properly fenced and labeled | `markdown-code-fence-validity` | |
| Links in Markdown versions are absolute or still work when fetched alone | `markdown-link-portability` | |
| Content is not hidden inside embedded data blobs | `embedded-data-serialization` | |

### 5. URL stability and redirects

Run the following checks on whether your URLs and redirects stay reliable:

| Check | Spec IDs | Result |
|---|---|---|
| Missing pages return a real `404`, not a `200` page that says "not found" | `http-status-codes` | |
| Redirects are server-side and stay on the same host where possible | `redirect-behavior` | |

### 6. Observability and content health

Run the following checks on whether you can see and maintain content health:

| Check | Spec IDs | Result |
|---|---|---|
| `llms.txt` covers the pages that matter, and stays current | `llms-txt-coverage` | |
| Markdown versions say the same thing as the HTML pages | `markdown-content-parity` | |
| Cache headers let updates reach agents promptly | `cache-header-hygiene` | |

### 7. Authentication and access

Run the following checks on how authentication and access affect agents:

| Check | Spec IDs | Result |
|---|---|---|
| Public docs are not behind a login | `auth-gate-detection` | |
| Docs that must be gated have another path for agents (an MCP server, an API, a public subset) | `auth-alternative-access` | |
| Bot protection does not block legitimate agents fetching for a user | `bot-protection-interference` | |

## Part 2: Beyond the spec

### `robots.txt`

Check the following in your `robots.txt` file:

| Check | Result |
|---|---|
| `robots.txt` exists and does not block your docs by accident | |
| It makes a deliberate choice per kind of AI agent: training crawlers, search crawlers, and agents fetching on a user's behalf are usually separate user agents | |
| Each AI user agent you name is current, checked against the provider's own documentation | |
| It links your sitemap | |

Example of a deliberate policy. User agent names change; confirm each one with the
provider before copying.

```text
# Allow AI search and agents fetching for a user
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
Allow: /

# Decide separately whether content may be used for training
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
Allow: /

Sitemap: https://docs.example.com/sitemap.xml
```

### Discovery files

Check the following discovery files:

| Check | Result |
|---|---|
| `sitemap.xml` lists every public docs page, with accurate last-modified dates | |
| An `llms-full.txt` (a single file with the full docs text, a widely used convention) exists if your docs are small enough for it to be useful | |
| Canonical URLs are set, so duplicate pages point to one version | |

### For developers and their agents

Check the following for developers and the coding agents they use:

| Check | Result |
|---|---|
| Your docs or product offers an MCP server, so agents can search it directly | |
| APIs have a complete, published OpenAPI (or equivalent) description | |
| Code repositories carry an `AGENTS.md` (or equivalent) telling coding agents how to build, test, and contribute | |
| Every page states the product version it applies to, and archived versions are labeled | |
| A dated changelog exists, so agents can answer "what changed" | |

### Measuring it

Check the following to measure how agents use your site:

| Check | Result |
|---|---|
| You can see AI agent and crawler traffic separately from human traffic | |
| You can see which pages and passages AI answers use | |

Tools for both are listed in
[Awesome Context Observability](https://github.com/zthewriter/awesome-context-observability).

## Further reading

- [How content becomes passages](../write-for-ai/02-how-content-becomes-passages.md)
- [The `llms.txt` proposal](https://llmstxt.org/)
- [Agent-Friendly Documentation Spec](https://agentdocsspec.com/spec/)
