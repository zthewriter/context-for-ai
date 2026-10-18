// Proves the linter fails on a bad template. Run: node --test scripts/lint-templates.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { lintTemplate } from './lint-templates.mjs';

const GOOD = `---
template_id: HRN-01
title: "Agents file"
doc_type: reference
template_class: new
personas: [context-engineer]
harness_part: guides
replaces_or_extends: "Contributing guide"
version: 1.0.0
---
<!--
SECTION TEMPLATE: Agents file (reference page)
Purpose: [purpose]
Audience: [audience]
Internal or external: [both]
Before you write, ask the builders:
- [question]
Rules:
- [rule]
Agent notes:
- [note]
Delete this comment before you publish.
-->

# [Repo name] agents file

[Summary.]

## Who this page is for

[Readers.]

## Prerequisites

[None.]

\`\`\`mermaid
flowchart LR
  accTitle: [Title]
  accDescr: [Description]
  A --> B
\`\`\`
`;

const lint = (text, opts) => lintTemplate(text, opts).join('\n');

test('a conforming template passes', () => assert.equal(lint(GOOD), ''));

test('each anatomy rule fails on its own', () => {
  const cases = [
    [GOOD.replace(/^---[\s\S]*?---\n/, ''), /missing YAML front matter/],
    [GOOD.replace('version: 1.0.0\n', ''), /missing version/],
    [GOOD.replace('doc_type: reference', 'doc_type: essay'), /doc_type essay/],
    [GOOD.replace('[context-engineer]', '[wizard]'), /unknown persona wizard/],
    [GOOD.replace('harness_part: guides\n', ''), /harness_part/],
    [GOOD.replace('HRN-01', 'HRN-1'), /not PREFIX-NN/],
    [GOOD.replace('Agent notes:\n- [note]\n', ''), /missing "Agent notes:"/],
    [GOOD.replace('Rules:\n- [rule]\n', '').replace('Agent notes:\n- [note]\n', 'Agent notes:\n- [note]\nRules:\n- [rule]\n'), /"Agent notes:" is out of order/],
    [GOOD.replace('## Who this page is for', '## Readers'), /Who this page is for/],
    [GOOD.replace('## Prerequisites', '## Before you begin'), /Prerequisites/],
    [GOOD.replace('[None.]', 'TBD'), /forbidden placeholder "TBD"/],
    [GOOD.replace('  accTitle: [Title]\n', ''), /lacks accTitle/],
  ];
  for (const [text, expected] of cases) assert.match(lint(text), expected);
});

test('a new template without its .why.md fails', () => {
  assert.match(lint(GOOD, { whyExists: false }), /\.why\.md/);
  assert.equal(lint(GOOD.replace('template_class: new', 'template_class: classic'), { whyExists: false }), '');
});
