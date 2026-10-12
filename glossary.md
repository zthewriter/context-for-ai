# Glossary

Plain definitions for terms used in this repository.

**`AGENTS.md`.** A file in a code repository that tells AI coding agents how to build,
test, and contribute to the project.

**AI agent.** An AI model that can take actions, such as calling tools or searching,
to complete a request, not just reply with text.

**Calibration.** Whether a model's confidence matches reality: when it reports 90%
confidence, it should be right about 90% of the time.

**Chunk or passage.** A short piece of a page, usually a few paragraphs, that a RAG
system stores and returns. AI systems see passages, not whole pages.

**Citation.** A link from an answer to the passage it was drawn from.

**Confidence.** A number from 0 to 1 describing how concentrated a decision model's
probabilities are on one option. High means a clear answer; low means the options
were close.

**Content gap.** A question people ask that your content does not answer.

**Content observability.** Measuring how your content is used inside AI answers and
decisions: which passages, for which questions, and where nothing matched.

**Context engineering.** Deciding what an AI system knows and how it is instructed
before it answers.

**Context window.** The amount of text a model can consider at once.

**Criteria.** In a decision model, the written description of each option. The model
judges the state against them.

**Decision model (discriminative model).** A model that chooses, scores, or classifies
instead of writing text. Jev is an example.

**Embedding.** A list of numbers representing the meaning of a piece of text, used to
find passages with similar meaning.

**Generative model.** A model that writes text, such as the language model in a RAG
system.

**Grounding.** Requiring an answer to be based on supplied sources rather than the
model's general training.

**Hybrid system.** A system that combines a decision model with retrieval and a
generative model, for example to check passages before an answer is written.

**Index.** The searchable store of passages a RAG system draws from.

**Jev.** A decision model from TypeSafe AI that takes a state and typed questions and
returns probabilities and confidence instead of text.

**`llms.txt`.** A Markdown file, usually at a site's root, that lists its important
pages for AI tools. See [llmstxt.org](https://llmstxt.org/).

**`llms-full.txt`.** A widely used convention: a single file containing a site's full
docs text for AI tools.

**MCP (Model Context Protocol).** An open standard for connecting AI agents to tools
and data. An MCP server offers tools that an agent can call.

**Noul, Choice, Score.** Jev's three question types: yes or no, one of several
options, and a place on an ordered scale.

**RAG (retrieval augmented generation).** Answering a question by first searching a
body of content, then having a language model write the answer from what was found.

**Refresh.** Re-reading a source so the index reflects its latest content.

**`robots.txt`.** A file at a site's root that tells crawlers, including AI crawlers,
which parts of the site they may fetch.

**State.** In Jev, the content a decision is about: a string, a JSON object, or a list
of strings.

**Threshold.** The confidence or match strength a system requires before it acts or
answers.

**Tool description.** The text that tells an agent what a tool does and when to use
it.
