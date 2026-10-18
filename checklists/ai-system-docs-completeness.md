# AI system docs completeness checklist

Whether the documentation for a RAG, decision-model, or hybrid system answers what each audience
needs. Mark each item **yes**, **partly**, **no**, or **not applicable**, and link
the page that satisfies it.

## Everyone

Check the following for every reader of the documentation, and record the page and the result:

| Check | Page | Result |
|---|---|---|
| A one-screen overview says what the system does and for whom | | |
| Limitations are stated, each paired with what to do instead | | |
| Readers know how to report a wrong answer or dispute a decision | | |

## End users and people affected

Check the following for people who use the system or are affected by its decisions:

| Check | Page | Result |
|---|---|---|
| Readers know how to check a result (citations, confidence, sources) | | |
| What happens when the system cannot help is described in their words | | |
| What is stored about their input, and for how long, is stated | | |

## Admins and operators

Check the following for the administrators and operators who run the system:

| Check | Page | Result |
|---|---|---|
| Every content source is listed with its refresh schedule and owner (RAG, hybrid) | | |
| Every question and its criteria are published or faithfully summarized (decision model, hybrid) | | |
| Every confidence threshold and its action is documented, with its rationale (decision model, hybrid) | | |
| Routine quality tasks have an owner and a schedule | | |

## Developers

Check the following for the developers who build on or integrate with the system:

| Check | Page | Result |
|---|---|---|
| A quickstart works when copied | | |
| Every response outcome is documented: answered, nothing matched, low confidence, error | | |
| Limits, versioning, and debugging identifiers are documented | | |
| For hybrid systems, each handoff and failure mode is documented | | |

## Evaluators

Check the following for the people who judge whether the system is good enough:

| Check | Page | Result |
|---|---|---|
| Evaluation results are published with their method and date | | |
| Results include cases the system should decline | | |
| For decision systems, confidence is shown to be honest (calibration) | | |

## Keeping it current

Check the following to keep the documentation accurate after launch:

| Check | Page | Result |
|---|---|---|
| A change history records content, criteria, threshold, and model changes | | |
| Every page has an owner and a review date | | |

Templates for each item are in [templates](../templates/).
