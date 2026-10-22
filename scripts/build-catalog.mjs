#!/usr/bin/env node
// Writes templates/catalog.md and templates/catalog.json from template front matter.
// Run: node scripts/build-catalog.mjs          (write)
//      node scripts/build-catalog.mjs --check  (fail if the committed catalog is stale)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { findTemplates, parseFrontMatter, PERSONAS } from './lint-templates.mjs';

const SET_NAMES = {
  classic: 'Classic', rag: 'RAG', 'decision-model': 'Decision model', hybrid: 'Hybrid',
  'mcp-server': 'MCP server', harness: 'Harness', aeo: 'AEO', 'audience-guides': 'Audience guides',
  diagrams: 'Diagrams', shared: 'Shared', 'ai-engineers': 'AI engineers',
  'forward-deployed-engineers': 'Forward deployed engineers', 'developer-advocates': 'Developer advocates',
};
const PERSONA_NAMES = {
  'technical-writer': 'Technical writer', 'developer-advocate': 'Developer advocate',
  'internal-engineer': 'Internal engineer', 'ai-engineer': 'AI engineer',
  'forward-deployed-engineer': 'Forward deployed engineer', 'context-engineer': 'Context engineer',
};

export function setOf(rel) {
  const parts = rel.split('/');
  if (parts[0] === 'templates') return parts.length === 2 ? 'shared' : parts[1];
  return parts[0];
}

export function buildCatalog(root) {
  return findTemplates(root).map((rel) => {
    const d = parseFrontMatter(fs.readFileSync(path.join(root, rel), 'utf8')).data;
    return {
      template_id: d.template_id, title: d.title, set: setOf(rel), path: rel,
      doc_type: d.doc_type, template_class: d.template_class, personas: d.personas,
      harness_part: d.harness_part ?? null,
      replaces_or_extends: d.replaces_or_extends, version: d.version,
    };
  }).sort((a, b) => a.template_id.localeCompare(b.template_id));
}

export function renderMarkdown(entries) {
  const link = (e) => `[${e.template_id}](${path.posix.relative('templates', e.path)})`;
  const found = new Set(entries.map((e) => e.set));
  const sets = [...Object.keys(SET_NAMES).filter((s) => found.has(s)), ...[...found].filter((s) => !(s in SET_NAMES))];
  const out = [
    '# Template catalog', '',
    'This page lists every template in the repository. It is generated from each',
    "template's front matter by `scripts/build-catalog.mjs`, so don't edit it by hand.",
    'The same data is in [catalog.json](catalog.json) for agents and tools.', '',
    '## Persona matrix', '',
    'The following table shows, for each persona, the templates that list it first. A',
    'template lists first the persona that uses it most.', '',
    `| Persona | ${sets.map((s) => SET_NAMES[s] ?? s).join(' | ')} |`,
    `|---|${sets.map(() => '---').join('|')}|`,
  ];
  for (const p of PERSONAS) {
    const cells = sets.map((s) => entries.filter((e) => e.set === s && e.personas[0] === p).map(link).join(', '));
    out.push(`| ${PERSONA_NAMES[p]} | ${cells.join(' | ')} |`);
  }
  for (const s of sets) {
    out.push('', `## ${SET_NAMES[s] ?? s}`, '', `The following table lists the ${SET_NAMES[s] ?? s} templates:`, '',
      '| ID | Title | Doc type | Class | Personas |', '|---|---|---|---|---|');
    for (const e of entries.filter((x) => x.set === s)) {
      out.push(`| ${link(e)} | ${e.title} | ${e.doc_type} | ${e.template_class} | ${e.personas.join(', ')} |`);
    }
  }
  out.push('', '## Other files', '',
    'The [content usage log](content-usage-log.csv) is a spreadsheet, not a page, so it has',
    'no front matter and no ID.', '');
  return out.join('\n');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const entries = buildCatalog(root);
  const files = {
    'templates/catalog.md': renderMarkdown(entries),
    'templates/catalog.json': `${JSON.stringify(entries, null, 2)}\n`,
  };
  if (process.argv.includes('--check')) {
    const stale = Object.entries(files).filter(([f, c]) => !fs.existsSync(path.join(root, f)) || fs.readFileSync(path.join(root, f), 'utf8') !== c);
    for (const [f] of stale) console.log(`${f} is out of date. Run: node scripts/build-catalog.mjs`);
    process.exit(stale.length ? 1 : 0);
  }
  for (const [f, c] of Object.entries(files)) fs.writeFileSync(path.join(root, f), c);
  console.log(`${entries.length} templates written to templates/catalog.md and templates/catalog.json`);
}
