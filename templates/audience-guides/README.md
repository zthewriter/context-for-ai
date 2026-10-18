# Audience guides

The same AI system needs three different guides, because three kinds of people use
it for different reasons. These templates work for RAG, decision-model, and hybrid systems, and
for internal or external documentation. The following table lists each guide, its
reader, and what the reader needs:

| Guide | Reader | Their goal | They do not need | Write it when |
|---|---|---|---|---|
| [End user guide](end-user-guide.md) | People who ask the system questions or are affected by its decisions | Get a good result, know when to trust it, know what to do when it fails | How it is built | Before launch, after the limitations page |
| [Admin guide](admin-guide.md) | People who configure and operate it | Keep it accurate, safe, and current | Model internals | Before anyone other than the builders operates it |
| [Developer guide](developer-guide.md) | People who integrate with it or extend it | Call it correctly, handle every response, debug failures | Marketing copy | Before the first outside integration |

Update all three whenever a limit, setting, or response changes, in the same change,
so they never disagree, as the second of the following rules requires.

## Rules for all three

Apply the following rules to all three guides:

1. **One reader per guide.** If a section starts with "for admins:", it is in the
   wrong guide.
2. **Same facts, different depth.** A limit that appears in the end user guide must
   appear, in more detail, in the admin and developer guides. Never let them
   disagree.
3. **Link instead of repeating** long explanations, so a change happens in one place.
4. **Every guide covers failure**: what this reader sees when it goes wrong, and what
   they do next.

## Clone this set

To copy this folder into `docs/`, run the following command:

```bash
npx degit zthewriter/context-for-ai/templates/audience-guides#v1.0.0 docs
```

For other ways to copy a template, including one page at a time and with a coding
agent, see [Clone a template](../how-to-use.md#clone-a-template).

To see the set filled in, read the [Kestrel example](example-kestrel-checked-docs-assistant.md),
which documents the Kestrel checked documentation assistant for all three readers.
