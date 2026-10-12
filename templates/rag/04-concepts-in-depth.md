<!--
SECTION TEMPLATE: RAG concepts in depth (concept page)
Purpose: Explain each core RAG concept in enough depth that a reader can make a
decision: what it is, why it matters, what the options are, how to choose, and what to
document about your own choice. Model this page on the way relevance documentation
explains ranking criteria, with ordered rules, comparison tables, and a worked example.
Audience: Developers and technical writers who have read the concepts overview.
Internal or external: Both. The "What to document" lines tell you what to say about
your own product. Delete the lines that don't apply.
Before you write:
- Keep the explanations. Replace the example numbers with ones from your system.
- Run the worked example against your own settings, and use the real values.
Rules:
- Follow the writing style in ../style.md.
- Each section has the same shape: definition, why it matters, options, how to
  choose, what to document.
- Don't recommend a technique you haven't tested. Say what the trade-off is.
Delete this comment before you publish.
-->

# Concepts in depth

This page explains each core concept in a retrieval-augmented generation (RAG)
system, in the order that content flows through it. For a short definition of each
term, see the [concepts overview](03-concepts-overview.md).

## Who this page is for

This page is for developers who are designing or tuning a RAG system, and for
technical writers who need to explain the choices to their readers. You should have
read the [concepts overview](03-concepts-overview.md).

## Chunking

*Chunking* is splitting a document into passages, called chunks, that the system can
retrieve one at a time.

### Why it matters

Chunk boundaries decide what the model can read. A chunk that's too large mixes
topics, so it matches many questions weakly. A chunk that's too small loses the
context that makes it understandable, such as the heading or the sentence before it.

### Options

The following table compares common chunking strategies:

| Strategy | How it splits | Strength | Weakness |
|---|---|---|---|
| Fixed size | Every [number] characters or tokens | Simple and predictable | Can cut through a sentence or a code block |
| Fixed size with overlap | Fixed size, repeating the last part of each chunk at the start of the next | Keeps context across boundaries | Stores duplicate text and returns near-duplicate results |
| By structure | At headings, paragraphs, or list items | Chunks follow how the author organized ideas | Chunk sizes vary widely |
| By sentence | At sentence boundaries, grouped to a size | Never cuts a sentence | Needs language-aware splitting |

### How to choose

Start with structure-based chunking for documentation, because headings already mark
topics. Add a size limit so that no chunk exceeds the embedding model's input limit.
Keep each chunk's heading path, such as "Install > Linux", as part of its text or
metadata, so that the chunk makes sense on its own.

### What to document

State your split boundary, your size limit, and whether chunks overlap. If readers
control any of these, link to the setting.

## Embeddings and vectors

An *embedding* is a numeric representation of the meaning of a piece of text,
produced by an embedding model. The numbers form a *vector*: a list with a fixed
length, called its *dimensions*. For example, a model might produce a vector with 384
dimensions for every chunk.

Text with similar meanings produces vectors that are close to each other. This
closeness is what lets the system find a chunk about "resetting a password" when the
user asks "I forgot my login."

### Why it matters

The embedding model decides what counts as similar. A model trained mostly on general
text can handle everyday language but struggle with specialized terms, product names,
or other languages.

### Options

The following table lists the measures that compare two vectors:

| Measure | What it calculates | When it's used |
|---|---|---|
| Cosine similarity | The angle between two vectors. It ignores length. | The usual default for text |
| Dot product | The angle and the length of the vectors | When vectors are normalized (scaled to length 1), it gives the same ranking as cosine |
| Euclidean distance | The straight-line distance between two vectors | When the model's documentation recommends it |

### How to choose

Use the measure that the embedding model's documentation recommends. Use the same
model for chunks and questions, because vectors from different models can't be
compared. If you change the model, rebuild the index.

### What to document

State the embedding model, its dimensions, its input limit, the supported languages,
and the similarity measure. State what happens when you change the model.

## Indexing

*Indexing* is storing vectors, chunk text, and metadata so that the system can find
the closest vectors quickly.

### Why it matters

Comparing a question with every chunk gives exact results, but takes longer as
content grows. Most indexes use *approximate nearest neighbor* (ANN) search, which
compares the question with only a promising subset. ANN is much faster, and might
miss a chunk that an exact search would have found.

### Options

The following table compares the two search approaches:

| Approach | Result | Speed | Use when |
|---|---|---|---|
| Exact | Always the closest vectors | Slows as content grows | You have thousands of chunks, or you need exact results |
| Approximate (ANN) | Usually the closest vectors | Stays fast at large sizes | You have many chunks, and can accept small misses |

An index also stores *metadata*, such as the source URL, the product version, or the
last-updated date. Metadata supports [rules](#rules) such as filters.

### How to choose

Use an exact search while the content is small. Switch to ANN when response time
becomes a problem, and measure recall (how often the right chunk is found) before and
after.

### What to document

State what the index stores, how often it refreshes, how long a change takes to
appear, and which metadata fields you can filter on.

## Retrieval

*Retrieval* is finding the chunks most likely to answer a question. The question is
embedded with the same model as the chunks, and the index returns the top *k* closest
chunks, where *k* is a number you choose.

### Why it matters

Retrieval sets the ceiling for the answer. The model can't use a chunk that retrieval
didn't return.

### Options

The following table compares retrieval methods:

| Method | How it matches | Strength | Weakness |
|---|---|---|---|
| Keyword search | Shared words, often scored by how rare they are, as in BM25 | Exact terms such as error codes and setting names | Misses paraphrases |
| Vector search | Closeness of meaning | Paraphrases and natural-language questions | Can miss exact identifiers |
| Hybrid search | Both, with the scores combined | Covers both kinds of question | More to configure and explain |

### How to choose

Use hybrid search if your users search for both concepts and exact terms, which is
typical for technical documentation. Choose *k* by how much text the model can read
and how many chunks it needs to answer, commonly between 3 and 10.

### What to document

State the retrieval method, the default *k*, and whether you can change it.

## Ranking

*Ranking* orders the retrieved chunks from most to least relevant. The order matters
because the system keeps only the top results, and models can give more weight to
text near the beginning or end of their input.

### Why it matters

Retrieval might return the right chunk in position seven, and the system might keep
only five. Better ranking moves the right chunk up without retrieving more.

### Options

The following table compares ranking techniques:

| Technique | What it does | Cost |
|---|---|---|
| Single score | Orders by one score, such as similarity | None |
| Score fusion | Combines the rankings from several methods into one | Low |
| Reranking | Reads the question and each chunk together and rescores them | Adds time and cost for each query |
| Tie-breaking | Applies an ordered list of rules when scores are equal or close | None |

### Worked example: score fusion

*Reciprocal rank fusion* (RRF) is one common way to combine rankings. Each chunk
gets a score of 1 divided by (*k* + its rank) from each method, and the scores are
added. This example uses *k* = 60.

The following table shows the rank each chunk received from two methods and the
combined score:

| Chunk | Keyword rank | Vector rank | Calculation | Combined score | Final position |
|---|---|---|---|---|---|
| B | 2 | 1 | 1/62 + 1/61 | 0.0325 | 1 |
| A | 1 | 3 | 1/61 + 1/63 | 0.0323 | 2 |
| C | 3 | 2 | 1/63 + 1/62 | 0.0320 | 3 |

Chunk B wins even though it isn't first in keyword search, because both methods rank
it highly. A chunk that only one method finds ranks lower than one that both find.

### Worked example: ordered tie-breaking

Ranking often applies several criteria in a fixed order. A later criterion is used
only when all earlier ones are tied. This keeps results predictable, because you can
say exactly why one chunk ranked ahead of another.

This example uses three criteria, in order: exact phrase match, then heading match,
then recency. The following table shows four chunks for the query "rotate API key":

| Chunk | Exact phrase "rotate API key" | Heading contains "rotate" | Updated | Final position |
|---|---|---|---|---|
| D | Yes | Yes | 2026-03 | 1 |
| E | Yes | Yes | 2025-11 | 2 |
| F | Yes | No | 2026-06 | 3 |
| G | No | Yes | 2026-09 | 4 |

Chunks D, E, and F tie on the first criterion, so the second one separates F from D
and E. D and E tie on the first two, so recency decides between them. Chunk G is the
newest, but it's last, because recency is only consulted when everything before it is
tied. Changing the order of the criteria changes the ranking, so document the order.

### How to choose

Start with a single method, and add fusion or reranking only if your
[evaluation](12-evaluation.md) shows wrong or misordered results. Test each change
on the same set of questions, and keep a change only if it helps.

### What to document

State the ranking steps in order, which of them apply to every query, and what
happens when two chunks tie.

## Relevance

*Relevance* is how well a chunk helps answer the question. It isn't the same as
similarity. A chunk can be similar to a question without answering it. For example,
a page that describes a feature is similar to a question about how to turn the
feature off, but it might not contain the steps.

### Why it matters

Similarity is what the system can calculate. Relevance is what the user needs.
Closing the gap is most of the work of tuning a RAG system.

### Options

The following table lists ways to improve relevance, in the order to try them:

| Step | What you change | Effect |
|---|---|---|
| Fix the content | Add headings and plain statements that match the way readers ask | Fixes the cause |
| Tune chunking | Boundaries and size | Changes what's retrievable |
| Change retrieval | Add keyword search | Catches exact terms |
| Rerank | Rescore the top results | Corrects close calls |
| Add rules | Filter, boost, or exclude | Applies knowledge the system can't infer |

### How to tell that relevance needs work

Look for the following signs:

- Many results are irrelevant. This often happens when chunks are long and cover
  several topics. Smaller, focused chunks help.
- Important content is buried. The right chunk exists but ranks low. Check that its
  heading names the topic, and review the ranking order.
- The right chunk is missing. Check chunking, and check whether exact terms need
  keyword search.

Review what readers actually ask and which results they open, and change one thing at a
time so that you can tell which change helped.

### How to choose

Fix the content first. Changes to the content improve the results for every method
and cost nothing at query time.

### What to document

State how you measure relevance, and link to your [evaluation](12-evaluation.md).

## Rules

*Rules* are conditions you set that act on results regardless of similarity.
Rules apply knowledge the system can't infer from the text, such as "readers on
version 3 should never see version 2 pages."

### Why it matters

A chunk can be a perfect match and still be the wrong result: out of date, not
meant for this audience, or restricted.

### Options

The following table lists common rules:

| Rule | What it does | Example |
|---|---|---|
| Filter | Removes results that don't match a metadata value | Only chunks where `version` is `3.2` |
| Exclude | Removes specific sources | Never use the archive section |
| Boost | Moves matching results up, without guaranteeing a position | Prefer official guides over community posts |
| Pin | Always includes a specific result for matching queries | Include the brand guidelines for any email request |

### How to choose

Use a filter when a wrong result is never acceptable, such as another customer's
data. Use a boost when you only have a preference. Rules need testing too: a rule
that's too broad hides correct results.

> **Note:** A rule changes what the system retrieves, not what the content says. It
> can't make the system answer a question that your content doesn't cover.

### What to document

List the available rules, the metadata they depend on, and the order in which they
apply. State how a reader can see which rule changed a result.

## Grounding and citations

*Grounding* means the model answers only from the retrieved chunks. *Citations* name
the chunks it used, so that readers can check the answer.

### Why it matters

Without grounding, the model fills gaps with its training data, and the answer might
read confidently while being wrong. Citations make errors visible.

### Options

The following table lists the ways to enforce grounding:

| Technique | What it does | Limit |
|---|---|---|
| Prompt instructions | Tell the model to answer only from the chunks and to say when it can't | The model might not follow them |
| Required citations | Ask for a source for each statement | The model might cite a source that doesn't support the claim |
| Answer checking | Compare each claim with the cited chunk before showing the answer | Adds time and cost |
| Declining | Return "I couldn't find that" when retrieval is weak | Needs a threshold, which you must calibrate |

### How to choose

Use prompt instructions and citations together. Add answer checking where a wrong
answer is costly. See the [hybrid templates](../hybrid/README.md) for a pattern that
checks chunks before they reach the model.

### What to document

State what the system does when no chunk matches, and how users can report a wrong
answer.

## Context window

The *context window* is the amount of text a model can read at once, measured in
*tokens*, which are small pieces of text. The window must hold the instructions, the
retrieved chunks, the question, and the answer.

### Why it matters

More chunks isn't always better. Extra chunks cost money and time, and unrelated
text can distract the model.

### How to choose

Retrieve more chunks than you send. Rank them, and send only the top few that fit
within a budget you set.

### What to document

State the number of chunks sent to the model and the model's input limit.

## Related pages

For more information, see the following pages:

- [Concepts overview](03-concepts-overview.md)
- [How answers are generated](07-how-answers-are-generated.md)
- [Evaluation](12-evaluation.md)
