# Documentation best practices for AI systems

This page lists the practices that the strongest public documentation for AI systems
has in common, and explains how the templates in this repository apply them. Use it
to plan a documentation set, to review a draft, or to decide what a template asks
for and why.

The practices are grouped into four sections:

- [Practices for every AI system](#practices-for-every-ai-system)
- [Practices for RAG systems](#practices-for-rag-systems)
- [Practices for decision-model systems](#practices-for-decision-model-systems)
- [Practices for hybrid systems](#practices-for-hybrid-systems)

These practices apply to internal and external documentation alike. Where the two
differ, the templates say so in their guidance comments.

## Practices for every AI system

The following practices apply whether the system writes answers, makes decisions, or
does both.

### Organize pages by what the reader is trying to do

Strong documentation sets separate pages by type, and each type answers one kind of
question:

| Page type | Answers | Example title |
|---|---|---|
| Concept | What is this, and how does it work? | About [system name] |
| Quickstart | How do I get a first result? | Get started with [system name] |
| Task | How do I do one specific thing? | Add a content source |
| Reference | What are the exact values, fields, and limits? | [System name] reference |
| Troubleshooting | Why did this go wrong, and how do I fix it? | Troubleshoot [system name] |

Mixing types makes every page longer and harder to scan. A reader who wants a
parameter name doesn't want to read the architecture first.

### Open every page with a summary

Start each page with one or two sentences that say what the page covers and who it's
for. Readers, search engines, and AI agents all use that first paragraph to decide
whether the page is the right one.

### Show the difference the context makes

The most persuasive concept pages show the same request twice: once without the
system's content and once with it. The first result is generic, outdated, or wrong;
the second is specific and cited. Readers understand the system's value in one
glance, and they learn what failure looks like.

### Show the expected result after every step

Quickstarts and task pages show what the reader sees after each step: the output, the
message, or the state of the screen. A reader who sees the expected result knows the
step worked. A reader who sees something else knows exactly where to start
troubleshooting.

### Draw each stage, and describe every drawing in text

Diagrams of the ingest, retrieval, and decision stages appear in almost every strong
AI documentation set. Each diagram needs a title and a text description that conveys
the same information, so that readers using screen readers, readers with images
turned off, and AI agents get the same content. See
[Diagrams](diagrams/) for the method.

### Put limits, quotas, and supported formats in tables

Readers look up limits; they don't read them. A table of supported file types, size
limits, rate limits, and regions answers those questions faster than prose, and a
table is easier to keep current.

### Give security its own section

AI systems introduce risks that ordinary software doesn't. Strong documentation
addresses them directly, in a section of their own:

- **Access control:** state whether the system respects the permissions of the
  content it reads, so that people retrieve only what they are allowed to see.
- **Prompt injection:** state that content the system reads can contain text that
  looks like instructions, describe the mitigations in place, and say plainly that no
  mitigation fully prevents it.
- **Data handling:** state what is stored, for how long, and who can see it.

### State limitations plainly, and pair each one with an alternative

A limitation without an alternative leaves the reader stuck. Write "The assistant
can't see your invoices. To check a payment, go to **Account > Activity**," not "The
assistant may have some limitations with account data."

### Report every number with its method

An accuracy figure means nothing without what was tested, on what data, and how
"correct" was judged. Report results in plain language ("found the right article in
its top five results for 91 of 100 questions"), not in metric names.

### Treat content and configuration changes as releases

The behavior of an AI system changes when its content, criteria, thresholds, or model
version change, even if no code ships. Record those changes in a change history and
date them, so a reader can answer "why is it different from last week?"

### End with next steps

Close concept pages and quickstarts with links to the logical next pages: the task a
reader is likely to need next, the reference, and the troubleshooting page.

## Practices for RAG systems

A retrieval-augmented generation (RAG) system answers questions by searching content
and having a language model write a response from what it found. Strong RAG
documentation applies the following practices.

### Explain the pipeline in the stages readers recognize

Describe the system in three stages, in this order, and use the same names on every
page:

1. **Ingest:** load the content, split it into passages (chunks), convert each
   passage into a numeric representation (an embedding), and store it in an index.
2. **Retrieve:** turn the question into a search, find matching passages, and rank
   them.
3. **Generate:** give the question and the top passages to a language model, which
   writes an answer and cites the passages it used.

### Name the content, and say how current it is

A reader can't judge an answer without knowing what it could have come from. List
every source, what it contains, how often it refreshes, who owns it, and what is
deliberately excluded and why.

### Explain why the system retrieves instead of reading everything

Readers often ask why the system doesn't read all the content for every question.
Explain the reasons in one paragraph: models have a limited context window, long
inputs make it harder for a model to find the relevant part, and sending everything
costs more and takes longer.

### Document exactly what a citation points to

State what a citation links to: a page, a section, a passage, or a character range.
State whether a reader can open it, and what happens when the source has changed
since it was indexed.

### Document the behavior when nothing matches

The most important behavior of a RAG system is what it does when its content doesn't
answer the question. State whether it says so, suggests an alternative, or answers
anyway, and show an example.

### Document the settings that change what is retrieved

List every setting a reader can change, such as the number of passages retrieved,
metadata filters, the search type, and passage size, with the default value and the
effect of changing it.

### Explain how content gets updated

Describe how to add, refresh, and remove content, how long a change takes to appear
in answers, and how to confirm that it did.

## Practices for decision-model systems

A decision-model system uses a decision model to read content and return typed answers that
software acts on: a yes-or-no probability, one option from a set, or a place on an
ordered scale. Strong decision-system documentation applies the following practices.

### Separate the content from the questions

Document the state (the content each decision reads) and the questions (the
judgments made about that content) on separate pages. They change for different
reasons and are owned by different people.

### Say which logic is code and which is the model

State which rules are deterministic code, such as "invoices more than 30 days
overdue go to collections," and which judgments are made by the model. Readers who
don't know where the boundary is assume the model decides everything.

### Publish the questions and criteria, because they are the behavior

The wording of a question and the definition of each option determine every
decision the system makes. Publish them, or a faithful summary, and treat a wording
change as a release.

### Explain probability and confidence

State what each answer type returns. A yes-or-no answer returns a probability. A
choice returns a probability for each option and a confidence. A scale returns a
weighted score, a probability for each level, and a confidence. Explain that
confidence measures how certain the model is, which is not the same as how likely
the chosen option is.

### Document thresholds as policy

A threshold such as "refunds are automatic when confidence is higher than 0.85" is a business rule.
Document each one, the action it triggers, the reason for the value, and who can
change it. Thresholds usually fall into three ranges:

- **High:** act automatically.
- **Medium:** act with a safeguard, such as confirmation or review.
- **Low:** don't act; route to a person or ask for more information.

Riskier actions need higher thresholds than reversible ones.

### Document known failure modes by category

Decision models fail in recognizable ways. Document which of the following apply to
your system and what happens instead:

- Reading the criteria too literally.
- Counting, arithmetic, and comparing numbers.
- Comparing dates and times.
- Following references to information that isn't in the state.
- Large states full of irrelevant detail.
- Content written to manipulate the decision.
- Criteria that contradict each other or the question.
- Sensitivity to the order of options.
- Languages other than the one the model was primarily trained on.
- Input types the model doesn't accept, such as images or audio.

### Measure calibration, not only accuracy

Report how often the system is right at each confidence level. A system whose low
confidence reliably flags its mistakes is safer to automate than one that is equally
confident when wrong.

## Practices for hybrid systems

A hybrid system combines a decision model with retrieval and a language model. Use
the RAG and decision-model practices for each part, and add the following practices for how the
parts work together.

### Map every part and its responsibility

Name each part, what kind of component it is, what it is responsible for, and what it
is not responsible for. Readers assume "the AI" did everything unless told otherwise.

### Document every handoff

For each point where one part passes work to another, document what crosses, the rule
that decides it, and what happens to anything rejected. Most surprises in hybrid
systems happen at handoffs.

### Document what happens when each part fails

For every part, state what the whole system does when that part is wrong, unsure, or
unavailable.

### Show how to trace one result through every part

Give operators a procedure to follow one result from input to output, so they can
find the part that caused a bad result instead of guessing.

### Evaluate the parts and the whole separately

Report each part's results and the end-to-end result side by side. An improvement in
one part can make the overall result worse, and a single blended score hides that.

## Next steps

To continue, see the following pages:

- To apply these practices, start with the [templates](README.md).
- To check the writing, use the [writing style](style.md) page.
- To review a finished set, use the
  [AI system documentation completeness checklist](../checklists/ai-system-docs-completeness.md).
