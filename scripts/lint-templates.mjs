#!/usr/bin/env node
// Checks every template against templates/anatomy.md. Run: node scripts/lint-templates.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const REQUIRED_FIELDS = [
  'template_id', 'title', 'doc_type', 'template_class', 'personas',
  'replaces_or_extends', 'version',
];
export const DOC_TYPES = ['tutorial', 'how-to', 'concept', 'reference', 'overview', 'decision', 'operational'];
export const CLASSES = ['classic', 'upgraded-classic', 'new'];
export const PERSONAS = [
  'technical-writer', 'developer-advocate', 'internal-engineer',
  'ai-engineer', 'forward-deployed-engineer', 'context-engineer',
];
export const HARNESS_PARTS = ['guides', 'context', 'tool-orchestration', 'guardrails'];
export const COMMENT_FIELDS = [
  'SECTION TEMPLATE:', 'Purpose:', 'Audience:', 'Internal or external:',
  'Before you write, ask the builders', 'Rules:', 'Agent notes:',
  'Delete this comment before you publish.',
];
const NOT_TEMPLATES = new Set(['README.md', 'style.md', 'best-practices.md', 'how-to-use.md', 'anatomy.md', 'catalog.md']);

// Flat YAML only: `key: value`, quoted strings, and `[a, b]` lists, which is all the anatomy allows.
export function parseFrontMatter(text) {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(text);
  if (!m) return null;
  const data = {};
  for (const line of m[1].split('\n')) {
    const kv = /^([a-z_]+):\s*(.*?)\s*(#.*)?$/.exec(line);
    if (!kv) continue;
    let v = kv[2];
    if (/^\[.*\]$/.test(v)) v = v.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else v = v.replace(/^"(.*)"$/, '$1');
    data[kv[1]] = v;
  }
  return { data, body: text.slice(m[0].length) };
}

export function lintTemplate(text, { whyExists = true } = {}) {
  const errors = [];
  const fm = parseFrontMatter(text);
  if (!fm) return ['missing YAML front matter at the top of the file'];
  const { data, body } = fm;
  for (const f of REQUIRED_FIELDS) if (!data[f] || data[f].length === 0) errors.push(`front matter is missing ${f}`);
  if (data.template_id && !/^[A-Z]{3}-\d{2}$/.test(data.template_id)) errors.push(`template_id ${data.template_id} is not PREFIX-NN`);
  if (data.doc_type && !DOC_TYPES.includes(data.doc_type)) errors.push(`doc_type ${data.doc_type} is not one of ${DOC_TYPES.join(', ')}`);
  if (data.template_class && !CLASSES.includes(data.template_class)) errors.push(`template_class ${data.template_class} is not one of ${CLASSES.join(', ')}`);
  for (const p of Array.isArray(data.personas) ? data.personas : []) if (!PERSONAS.includes(p)) errors.push(`unknown persona ${p}`);
  if (data.template_id?.startsWith('HRN-') && !HARNESS_PARTS.includes(data.harness_part)) errors.push(`harness_part must be one of ${HARNESS_PARTS.join(', ')}`);

  const comment = /^\s*<!--([\s\S]*?)-->/.exec(body);
  if (!comment) errors.push('missing the guidance comment directly after the front matter');
  else {
    let at = -1;
    for (const field of COMMENT_FIELDS) {
      const i = comment[1].split('\n').findIndex((l) => l.startsWith(field));
      if (i === -1) errors.push(`guidance comment is missing "${field}"`);
      else if (i < at) errors.push(`guidance comment field "${field}" is out of order`);
      else at = i;
    }
  }
  if (!/^## Who this page is for$/m.test(body)) errors.push('missing "## Who this page is for"');
  if (!/^## Prerequisites$/m.test(body)) errors.push('missing "## Prerequisites"');
  for (const bad of body.match(/\bTODO\b|\bTBD\b|lorem ipsum/gi) ?? []) errors.push(`forbidden placeholder "${bad}"`);
  for (const block of body.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
    if (!/accTitle:/.test(block[1]) || !/accDescr/.test(block[1])) errors.push('a Mermaid diagram lacks accTitle or accDescr');
  }
  if (['new', 'upgraded-classic'].includes(data.template_class) && !whyExists) errors.push('missing its template-notes .why.md file');
  return errors;
}

export function findTemplates(root) {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md') && !NOT_TEMPLATES.has(e.name) && !e.name.startsWith('example-')
        && !/^# Moved$/m.test(fs.readFileSync(p, 'utf8'))) out.push(path.relative(root, p));
    }
  };
  if (fs.existsSync(path.join(root, 'templates'))) walk(path.join(root, 'templates'));
  for (const e of fs.readdirSync(root, { withFileTypes: true })) {
    const t = path.join(root, e.name, 'templates');
    if (e.isDirectory() && !['templates', 'template-notes'].includes(e.name) && fs.existsSync(t)) walk(t);
  }
  return out.sort();
}

export const whyPath = (rel) => path.join('template-notes', rel.replace(/\.md$/, '.why.md'));

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  const ids = new Map();
  let failed = 0;
  const files = findTemplates(root);
  for (const rel of files) {
    const text = fs.readFileSync(path.join(root, rel), 'utf8');
    const errors = lintTemplate(text, { whyExists: fs.existsSync(path.join(root, whyPath(rel))) });
    const id = parseFrontMatter(text)?.data.template_id;
    if (id && ids.has(id)) errors.push(`template_id ${id} is also used by ${ids.get(id)}`);
    if (id) ids.set(id, rel);
    for (const e of errors) console.log(`${rel}: ${e}`);
    if (errors.length) failed++;
  }
  console.log(`${files.length} templates checked, ${failed} with problems`);
  process.exit(failed ? 1 : 0);
}
