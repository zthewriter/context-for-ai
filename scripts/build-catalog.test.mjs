// Run: node --test scripts/build-catalog.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { setOf, renderMarkdown } from './build-catalog.mjs';

test('names the set from the path', () => {
  assert.equal(setOf('templates/mcp-server/01-overview.md'), 'mcp-server');
  assert.equal(setOf('templates/case-study.md'), 'shared');
  assert.equal(setOf('ai-engineers/templates/eval-spec.md'), 'ai-engineers');
});

test('links persona folder templates relative to templates/ and lists each template under its set', () => {
  const md = renderMarkdown([{
    template_id: 'AIE-01', title: 'Eval spec', set: 'ai-engineers', path: 'ai-engineers/templates/eval-spec.md',
    doc_type: 'reference', template_class: 'new', personas: ['ai-engineer'],
  }]);
  assert.match(md, /\[AIE-01\]\(\.\.\/ai-engineers\/templates\/eval-spec\.md\)/);
  assert.match(md, /\| \[AIE-01\]\(.*\) \| Eval spec \| reference \| new \| ai-engineer \|$/m);
  assert.match(md, /\| AI engineer \| \[AIE-01\]/);
});
