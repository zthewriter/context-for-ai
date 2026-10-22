# Template catalog

This page lists every template in the repository. It is generated from each
template's front matter by `scripts/build-catalog.mjs`, so don't edit it by hand.
The same data is in [catalog.json](catalog.json) for agents and tools.

## Persona matrix

The following table shows, for each persona, the templates that list it first. A
template lists first the persona that uses it most.

| Persona | Classic | RAG | Decision model | Hybrid | MCP server | Harness | AEO | Audience guides | Diagrams | Shared | AI engineers | Forward deployed engineers | Developer advocates |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Technical writer | [CLS-01](classic/project-readme.md), [CLS-02](classic/technical-overview.md), [CLS-05](classic/api-overview.md), [CLS-06](classic/api-endpoint-reference.md), [CLS-07](classic/api-errors.md), [CLS-08](classic/authentication.md), [CLS-10](classic/sdk-reference.md), [CLS-11](classic/cli-reference.md), [CLS-12](classic/tutorial.md), [CLS-13](classic/how-to.md), [CLS-14](classic/concept.md), [CLS-15](classic/troubleshooting.md), [CLS-16](classic/release-notes.md), [CLS-17](classic/migration-guide.md), [CLS-21](classic/glossary.md) | [RAG-01](rag/01-tutorial.md), [RAG-02](rag/02-quickstart.md), [RAG-03](rag/03-concepts-overview.md), [RAG-04](rag/04-concepts-in-depth.md), [RAG-05](rag/05-overview.md), [RAG-06](rag/06-manage-content.md), [RAG-07](rag/07-how-answers-are-generated.md), [RAG-08](rag/08-reference.md), [RAG-09](rag/09-security-and-data.md), [RAG-10](rag/10-limitations.md), [RAG-11](rag/11-troubleshooting.md), [RAG-12](rag/12-evaluation.md), [RAG-13](rag/13-change-history.md) | [DEC-01](decision-model/01-tutorial.md), [DEC-02](decision-model/02-quickstart.md), [DEC-03](decision-model/03-concepts-overview.md), [DEC-04](decision-model/04-concepts-in-depth.md), [DEC-05](decision-model/05-overview.md), [DEC-06](decision-model/06-state-and-inputs.md), [DEC-07](decision-model/07-questions-and-criteria.md), [DEC-08](decision-model/08-confidence-and-actions.md), [DEC-09](decision-model/09-reference.md), [DEC-10](decision-model/10-security-and-data.md), [DEC-11](decision-model/11-limitations.md), [DEC-12](decision-model/12-troubleshooting.md), [DEC-13](decision-model/13-evaluation.md), [DEC-14](decision-model/14-change-history.md) | [HYB-01](hybrid/01-tutorial.md), [HYB-02](hybrid/02-concepts.md), [HYB-03](hybrid/03-system-overview.md), [HYB-04](hybrid/04-handoffs.md), [HYB-05](hybrid/05-failure-modes.md), [HYB-06](hybrid/06-trace-a-result.md), [HYB-07](hybrid/07-security-and-data.md), [HYB-08](hybrid/08-evaluation.md) |  |  | [AEO-01](aeo/aeo-strategy.md), [AEO-02](aeo/tracked-prompt-set.md) | [AUD-01](audience-guides/end-user-guide.md), [AUD-02](audience-guides/admin-guide.md), [AUD-03](audience-guides/developer-guide.md) | [DGM-01](diagrams/rag.md), [DGM-02](diagrams/decision-model.md), [DGM-03](diagrams/hybrid.md) | [CLS-23](case-study.md) |  |  |  |
| Developer advocate | [CLS-09](classic/sdk-quickstart.md) |  |  |  |  |  |  |  |  |  |  |  | [DVA-01](../developer-advocates/templates/verified-sample-readme.md), [DVA-02](../developer-advocates/templates/demo-script.md) |
| Internal engineer | [CLS-03](classic/architecture-overview.md), [CLS-04](classic/data-model-erd.md), [CLS-18](classic/adr.md), [CLS-19](classic/runbook.md), [CLS-20](classic/onboarding-guide.md) |  |  |  |  |  |  |  |  | [CLS-22](technical-design-doc.md) |  |  |  |
| AI engineer |  |  |  |  |  |  |  |  |  |  | [AIE-01](../ai-engineers/templates/eval-spec.md), [AIE-02](../ai-engineers/templates/tool-contract.md), [AIE-03](../ai-engineers/templates/rag-pipeline.md), [AIE-04](../ai-engineers/templates/agent-runbook.md), [AIE-05](../ai-engineers/templates/quality-latency-cost.md), [AIE-06](../ai-engineers/templates/prompt-and-instruction-spec.md), [AIE-07](../ai-engineers/templates/model-change-note.md), [AIE-08](../ai-engineers/templates/guardrail-spec.md), [AIE-09](../ai-engineers/templates/dataset-card.md), [AIE-10](../ai-engineers/templates/ai-incident-review.md) |  |  |
| Forward deployed engineer |  |  |  |  |  |  |  |  |  |  |  | [FDE-01](../forward-deployed-engineers/templates/field-playbook.md), [FDE-02](../forward-deployed-engineers/templates/reference-architecture.md), [FDE-03](../forward-deployed-engineers/templates/sample-and-tutorial.md), [FDE-04](../forward-deployed-engineers/templates/handover-pack.md), [FDE-05](../forward-deployed-engineers/templates/limitations-note.md), [FDE-06](../forward-deployed-engineers/templates/discovery-brief.md), [FDE-07](../forward-deployed-engineers/templates/success-criteria.md), [FDE-08](../forward-deployed-engineers/templates/integration-spec.md), [FDE-09](../forward-deployed-engineers/templates/customer-data-map.md), [FDE-10](../forward-deployed-engineers/templates/deployment-checklist.md), [FDE-11](../forward-deployed-engineers/templates/field-feedback-report.md) |  |
| Context engineer |  |  |  |  | [MCP-01](mcp-server/01-overview.md), [MCP-02](mcp-server/02-connect-a-client.md), [MCP-03](mcp-server/03-authentication-and-permissions.md), [MCP-04](mcp-server/04-tools-reference.md), [MCP-05](mcp-server/05-resources-reference.md), [MCP-06](mcp-server/06-prompts-reference.md), [MCP-07](mcp-server/07-server-instructions.md), [MCP-08](mcp-server/08-security-and-data.md), [MCP-09](mcp-server/09-limitations.md), [MCP-10](mcp-server/10-troubleshooting.md), [MCP-11](mcp-server/11-evaluation.md), [MCP-12](mcp-server/12-change-history.md) | [HRN-01](harness/agents-md.md), [HRN-02](harness/agent-skill.md), [HRN-03](harness/context-source-map.md), [HRN-04](harness/retrieval-rules-spec.md), [HRN-05](harness/memory-spec.md), [HRN-06](harness/context-delivery-plan.md), [HRN-07](harness/llms-txt.md), [HRN-08](harness/tool-catalog.md), [HRN-09](harness/definition-of-done.md), [HRN-10](harness/guardrails-and-approvals.md), [HRN-11](harness/session-handoff-note.md), [HRN-12](harness/context-changelog.md), [HRN-13](harness/context-observability-plan.md) |  |  |  |  |  |  |  |

## Classic

The following table lists the Classic templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [CLS-01](classic/project-readme.md) | Project README | overview | upgraded-classic | technical-writer, internal-engineer, developer-advocate |
| [CLS-02](classic/technical-overview.md) | Technical overview | overview | upgraded-classic | technical-writer, internal-engineer |
| [CLS-03](classic/architecture-overview.md) | Architecture overview | concept | upgraded-classic | internal-engineer, technical-writer, ai-engineer |
| [CLS-04](classic/data-model-erd.md) | Data model and ERD | reference | upgraded-classic | internal-engineer, technical-writer, ai-engineer |
| [CLS-05](classic/api-overview.md) | API overview | overview | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-06](classic/api-endpoint-reference.md) | API endpoint reference | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-07](classic/api-errors.md) | API errors | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-08](classic/authentication.md) | Authentication | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-09](classic/sdk-quickstart.md) | SDK quick start | tutorial | upgraded-classic | developer-advocate, technical-writer |
| [CLS-10](classic/sdk-reference.md) | SDK reference | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-11](classic/cli-reference.md) | CLI reference | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-12](classic/tutorial.md) | Tutorial | tutorial | upgraded-classic | technical-writer, developer-advocate |
| [CLS-13](classic/how-to.md) | How-to guide | how-to | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-14](classic/concept.md) | Concept | concept | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-15](classic/troubleshooting.md) | Troubleshooting | how-to | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-16](classic/release-notes.md) | Release notes | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-17](classic/migration-guide.md) | Migration guide | how-to | upgraded-classic | technical-writer, developer-advocate, internal-engineer |
| [CLS-18](classic/adr.md) | Architecture decision record | decision | upgraded-classic | internal-engineer, ai-engineer, technical-writer |
| [CLS-19](classic/runbook.md) | Runbook | operational | upgraded-classic | internal-engineer, technical-writer |
| [CLS-20](classic/onboarding-guide.md) | Onboarding guide | tutorial | upgraded-classic | internal-engineer, technical-writer |
| [CLS-21](classic/glossary.md) | Glossary | reference | upgraded-classic | technical-writer, developer-advocate, internal-engineer, context-engineer |

## RAG

The following table lists the RAG templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [RAG-01](rag/01-tutorial.md) | RAG tutorial | tutorial | new | technical-writer, ai-engineer, developer-advocate |
| [RAG-02](rag/02-quickstart.md) | RAG quick start | tutorial | new | technical-writer, ai-engineer, developer-advocate |
| [RAG-03](rag/03-concepts-overview.md) | RAG concepts overview | concept | new | technical-writer, ai-engineer |
| [RAG-04](rag/04-concepts-in-depth.md) | RAG concepts in depth | concept | new | technical-writer, ai-engineer |
| [RAG-05](rag/05-overview.md) | Overview | overview | new | technical-writer, ai-engineer |
| [RAG-06](rag/06-manage-content.md) | Manage content | how-to | new | technical-writer, ai-engineer |
| [RAG-07](rag/07-how-answers-are-generated.md) | How answers are generated | concept | new | technical-writer, ai-engineer |
| [RAG-08](rag/08-reference.md) | Reference | reference | new | technical-writer, ai-engineer |
| [RAG-09](rag/09-security-and-data.md) | Security and data | concept | new | technical-writer, ai-engineer |
| [RAG-10](rag/10-limitations.md) | Limitations | concept | new | technical-writer, ai-engineer |
| [RAG-11](rag/11-troubleshooting.md) | Troubleshooting | how-to | new | technical-writer, ai-engineer |
| [RAG-12](rag/12-evaluation.md) | Evaluation | concept | new | technical-writer, ai-engineer |
| [RAG-13](rag/13-change-history.md) | Change history | reference | new | technical-writer, ai-engineer |

## Decision model

The following table lists the Decision model templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [DEC-01](decision-model/01-tutorial.md) | Decision model tutorial | tutorial | new | technical-writer, ai-engineer, developer-advocate |
| [DEC-02](decision-model/02-quickstart.md) | Decision model quick start | tutorial | new | technical-writer, ai-engineer, developer-advocate |
| [DEC-03](decision-model/03-concepts-overview.md) | Decision model concepts overview | concept | new | technical-writer, ai-engineer |
| [DEC-04](decision-model/04-concepts-in-depth.md) | Decision model concepts in depth | concept | new | technical-writer, ai-engineer |
| [DEC-05](decision-model/05-overview.md) | Overview | overview | new | technical-writer, ai-engineer |
| [DEC-06](decision-model/06-state-and-inputs.md) | State and inputs | reference | new | technical-writer, ai-engineer |
| [DEC-07](decision-model/07-questions-and-criteria.md) | Questions and criteria | reference | new | technical-writer, ai-engineer |
| [DEC-08](decision-model/08-confidence-and-actions.md) | Confidence and actions | concept | new | technical-writer, ai-engineer |
| [DEC-09](decision-model/09-reference.md) | Reference | reference | new | technical-writer, ai-engineer |
| [DEC-10](decision-model/10-security-and-data.md) | Security and data | concept | new | technical-writer, ai-engineer |
| [DEC-11](decision-model/11-limitations.md) | Limitations | concept | new | technical-writer, ai-engineer |
| [DEC-12](decision-model/12-troubleshooting.md) | Troubleshooting | how-to | new | technical-writer, ai-engineer |
| [DEC-13](decision-model/13-evaluation.md) | Evaluation | concept | new | technical-writer, ai-engineer |
| [DEC-14](decision-model/14-change-history.md) | Change history | reference | new | technical-writer, ai-engineer |

## Hybrid

The following table lists the Hybrid templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [HYB-01](hybrid/01-tutorial.md) | Hybrid tutorial | tutorial | new | technical-writer, ai-engineer, developer-advocate |
| [HYB-02](hybrid/02-concepts.md) | Hybrid concepts | concept | new | technical-writer, ai-engineer |
| [HYB-03](hybrid/03-system-overview.md) | System overview | overview | new | technical-writer, ai-engineer |
| [HYB-04](hybrid/04-handoffs.md) | Handoffs | reference | new | technical-writer, ai-engineer |
| [HYB-05](hybrid/05-failure-modes.md) | Failure modes | reference | new | technical-writer, ai-engineer |
| [HYB-06](hybrid/06-trace-a-result.md) | Trace a result | how-to | new | technical-writer, ai-engineer |
| [HYB-07](hybrid/07-security-and-data.md) | Security and data | concept | new | technical-writer, ai-engineer |
| [HYB-08](hybrid/08-evaluation.md) | Evaluation | concept | new | technical-writer, ai-engineer |

## MCP server

The following table lists the MCP server templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [MCP-01](mcp-server/01-overview.md) | MCP server overview | overview | new | context-engineer, technical-writer, developer-advocate |
| [MCP-02](mcp-server/02-connect-a-client.md) | Connect a client | how-to | new | context-engineer, technical-writer, developer-advocate |
| [MCP-03](mcp-server/03-authentication-and-permissions.md) | Authentication and permissions | reference | new | context-engineer, technical-writer, internal-engineer |
| [MCP-04](mcp-server/04-tools-reference.md) | Tools reference | reference | new | context-engineer, technical-writer, ai-engineer |
| [MCP-05](mcp-server/05-resources-reference.md) | Resources reference | reference | new | context-engineer, technical-writer |
| [MCP-06](mcp-server/06-prompts-reference.md) | Prompts reference | reference | new | context-engineer, technical-writer |
| [MCP-07](mcp-server/07-server-instructions.md) | Server instructions | reference | new | context-engineer, technical-writer, ai-engineer |
| [MCP-08](mcp-server/08-security-and-data.md) | Security and data | concept | new | context-engineer, technical-writer, internal-engineer |
| [MCP-09](mcp-server/09-limitations.md) | Limitations | concept | new | context-engineer, technical-writer |
| [MCP-10](mcp-server/10-troubleshooting.md) | Troubleshooting | how-to | new | context-engineer, technical-writer, developer-advocate |
| [MCP-11](mcp-server/11-evaluation.md) | Evaluation | concept | new | context-engineer, ai-engineer, technical-writer |
| [MCP-12](mcp-server/12-change-history.md) | Change history | reference | new | context-engineer, technical-writer |

## Harness

The following table lists the Harness templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [HRN-01](harness/agents-md.md) | AGENTS.md | reference | new | context-engineer, internal-engineer, technical-writer |
| [HRN-02](harness/agent-skill.md) | Agent skill | how-to | new | context-engineer, ai-engineer, developer-advocate |
| [HRN-03](harness/context-source-map.md) | Context source map | reference | new | context-engineer, technical-writer |
| [HRN-04](harness/retrieval-rules-spec.md) | Retrieval rules spec | reference | new | context-engineer, ai-engineer |
| [HRN-05](harness/memory-spec.md) | Memory spec | reference | new | context-engineer, ai-engineer |
| [HRN-06](harness/context-delivery-plan.md) | Context delivery plan | decision | new | context-engineer, technical-writer, developer-advocate |
| [HRN-07](harness/llms-txt.md) | llms.txt | reference | new | context-engineer, technical-writer |
| [HRN-08](harness/tool-catalog.md) | Tool catalog | reference | new | context-engineer, ai-engineer, internal-engineer |
| [HRN-09](harness/definition-of-done.md) | Definition of done | operational | new | context-engineer, internal-engineer, ai-engineer |
| [HRN-10](harness/guardrails-and-approvals.md) | Guardrails and approvals | operational | new | context-engineer, ai-engineer, internal-engineer |
| [HRN-11](harness/session-handoff-note.md) | Session handoff note | operational | new | context-engineer, internal-engineer, ai-engineer |
| [HRN-12](harness/context-changelog.md) | Context changelog | reference | new | context-engineer, technical-writer, ai-engineer |
| [HRN-13](harness/context-observability-plan.md) | Context observability plan | operational | new | context-engineer, ai-engineer, technical-writer |

## AEO

The following table lists the AEO templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [AEO-01](aeo/aeo-strategy.md) | AEO strategy | decision | new | technical-writer, developer-advocate, context-engineer |
| [AEO-02](aeo/tracked-prompt-set.md) | Tracked prompt set | reference | new | technical-writer, developer-advocate, context-engineer |

## Audience guides

The following table lists the Audience guides templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [AUD-01](audience-guides/end-user-guide.md) | End user guide | how-to | upgraded-classic | technical-writer |
| [AUD-02](audience-guides/admin-guide.md) | Admin guide | how-to | upgraded-classic | technical-writer, internal-engineer |
| [AUD-03](audience-guides/developer-guide.md) | Developer guide | how-to | upgraded-classic | technical-writer, developer-advocate |

## Diagrams

The following table lists the Diagrams templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [DGM-01](diagrams/rag.md) | RAG diagrams | reference | upgraded-classic | technical-writer, ai-engineer |
| [DGM-02](diagrams/decision-model.md) | Decision model diagrams | reference | upgraded-classic | technical-writer, ai-engineer |
| [DGM-03](diagrams/hybrid.md) | Hybrid diagrams | reference | upgraded-classic | technical-writer, ai-engineer |

## Shared

The following table lists the Shared templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [CLS-22](technical-design-doc.md) | Technical design document | decision | classic | internal-engineer, ai-engineer, technical-writer |
| [CLS-23](case-study.md) | Case study | concept | classic | technical-writer, developer-advocate |

## AI engineers

The following table lists the AI engineers templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [AIE-01](../ai-engineers/templates/eval-spec.md) | Evaluation spec | reference | new | ai-engineer, technical-writer |
| [AIE-02](../ai-engineers/templates/tool-contract.md) | Tool contract | reference | new | ai-engineer, technical-writer, context-engineer |
| [AIE-03](../ai-engineers/templates/rag-pipeline.md) | RAG pipeline spec | concept | new | ai-engineer, technical-writer |
| [AIE-04](../ai-engineers/templates/agent-runbook.md) | Agent runbook | operational | new | ai-engineer, technical-writer |
| [AIE-05](../ai-engineers/templates/quality-latency-cost.md) | Quality, latency, and cost card | reference | new | ai-engineer, technical-writer |
| [AIE-06](../ai-engineers/templates/prompt-and-instruction-spec.md) | Prompt and instruction spec | reference | new | ai-engineer, technical-writer, context-engineer |
| [AIE-07](../ai-engineers/templates/model-change-note.md) | Model change note | decision | new | ai-engineer, technical-writer |
| [AIE-08](../ai-engineers/templates/guardrail-spec.md) | Guardrail spec | reference | new | ai-engineer, technical-writer, context-engineer |
| [AIE-09](../ai-engineers/templates/dataset-card.md) | Dataset card | reference | new | ai-engineer, technical-writer |
| [AIE-10](../ai-engineers/templates/ai-incident-review.md) | AI incident review | operational | new | ai-engineer, technical-writer, internal-engineer |

## Forward deployed engineers

The following table lists the Forward deployed engineers templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [FDE-01](../forward-deployed-engineers/templates/field-playbook.md) | Field playbook | how-to | new | forward-deployed-engineer, technical-writer |
| [FDE-02](../forward-deployed-engineers/templates/reference-architecture.md) | Reference architecture | concept | new | forward-deployed-engineer, technical-writer |
| [FDE-03](../forward-deployed-engineers/templates/sample-and-tutorial.md) | Sample and tutorial | tutorial | new | forward-deployed-engineer, developer-advocate, technical-writer |
| [FDE-04](../forward-deployed-engineers/templates/handover-pack.md) | Handover pack | operational | new | forward-deployed-engineer, technical-writer |
| [FDE-05](../forward-deployed-engineers/templates/limitations-note.md) | Limitations note | concept | new | forward-deployed-engineer, technical-writer |
| [FDE-06](../forward-deployed-engineers/templates/discovery-brief.md) | Discovery brief | overview | new | forward-deployed-engineer, technical-writer |
| [FDE-07](../forward-deployed-engineers/templates/success-criteria.md) | Success criteria | decision | new | forward-deployed-engineer, technical-writer |
| [FDE-08](../forward-deployed-engineers/templates/integration-spec.md) | Integration spec | reference | new | forward-deployed-engineer, technical-writer |
| [FDE-09](../forward-deployed-engineers/templates/customer-data-map.md) | Customer data map | reference | new | forward-deployed-engineer, technical-writer |
| [FDE-10](../forward-deployed-engineers/templates/deployment-checklist.md) | Deployment checklist | operational | new | forward-deployed-engineer, technical-writer |
| [FDE-11](../forward-deployed-engineers/templates/field-feedback-report.md) | Field feedback report | reference | new | forward-deployed-engineer, technical-writer |

## Developer advocates

The following table lists the Developer advocates templates:

| ID | Title | Doc type | Class | Personas |
|---|---|---|---|---|
| [DVA-01](../developer-advocates/templates/verified-sample-readme.md) | Verified sample README | tutorial | new | developer-advocate, technical-writer |
| [DVA-02](../developer-advocates/templates/demo-script.md) | Demo script | operational | new | developer-advocate |

## Other files

The [content usage log](content-usage-log.csv) is a spreadsheet, not a page, so it has
no front matter and no ID.
