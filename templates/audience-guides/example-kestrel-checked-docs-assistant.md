<!--
EXAMPLE: Audience guides, filled in
This page fills in the end user guide (AUD-01), the admin guide (AUD-02), and the
developer guide (AUD-03) for one fictional system, the Kestrel checked documentation
assistant from the hybrid example (../hybrid/example-kestrel-checked-docs-assistant.md).
Kestrel is a fictional hosting platform for web apps. The endpoint, roles, and values
are written to show the templates, not to document a real system. Each section below
is one guide, shortened to its key sections.
Delete this comment before you copy this page.
-->

# Kestrel checked docs assistant guides, filled in

This example shows the same assistant documented for three readers: the people who
ask it questions, the people who run it, and the developers who call it. Each section
is one guide, shortened to its key sections.

## End user guide (AUD-01)

The following guide is for Kestrel customers who ask the assistant questions:

```markdown
# Use the Kestrel docs assistant

## Get a good result

Name the task and your Kestrel version, for example "How do I roll back a
deployment on CLI 3.0?"

## Check a result

Every answer links to the guide sections it used. Open one, and confirm it says the
same thing.

## What the assistant can't do

It can't see your apps, deployments, or invoices.

## When something goes wrong

"I couldn't find an answer for your version" means no passage passed the check.
Contact support from the console.

## Your data

Your question and the answer are logged for 90 days to improve the guides.
```

## Admin guide (AUD-02)

The following guide is for the Kestrel docs team, who run the assistant:

```markdown
# Administer the Kestrel docs assistant

## Manage content sources

The assistant indexes the Kestrel guides only. Publishing a guide re-indexes it
within an hour.

## Manage questions, criteria, and thresholds

The passage check asks `answers_question`, `matches_version`, and
`contains_instructions_for_model`. Change a threshold only after rerunning the 60
labeled questions, and record the change in the change history.

## Monitor quality

Review the weekly count of declined questions. A rise after a publish usually means
a guide lost its version label.

## Handle a reported mistake

Find the request by its identifier, trace which part caused it, and fix the guide or
the criteria. Add the question to the labeled set.
```

## Developer guide (AUD-03)

The following guide is for developers who call the assistant from their own tools:

````markdown
# Call the Kestrel docs assistant

## Send your first request

```bash
curl -X POST https://assistant.kestrel.example/v1/answer \
  -H "Authorization: Bearer $KESTREL_API_KEY" \
  -d '{"question": "How do I roll back a deployment?", "version": "3.0"}'
```

## Read the response

`answer` holds the text, `citations` lists the guide URLs, and `request_id`
identifies the request in the log.

## Handle every outcome

| `outcome` | Meaning | What to do |
|---|---|---|
| `answered` | At least one passage passed the check | Show the answer and its citations |
| `declined` | No passage passed | Show the reason, and link to support |
| `unavailable` | The passage check is down | Retry after 30 seconds |

## Debug a request

Send the `request_id` to the docs team. They can see each candidate passage and its
check answers.
````
