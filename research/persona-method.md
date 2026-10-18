# Persona sample method

This page describes how the job-posting samples behind the
[AI engineers](../ai-engineers/README.md) and
[forward deployed engineers](../forward-deployed-engineers/README.md) role pages are
gathered and coded. The role pages summarize the results. This page is the method.

## Sample size and date

Each role uses a pool of 10 public openings. Both pools were read on October 17,
2026, at 7:15 p.m. Central Time (UTC−5).

## Kind of sample

Each pool is a convenience sample of career pages that were readable that evening.
It is not a random sample of the labor market, and openings close. A duty that
overlaps across 10 openings shows what those employers asked for. It does not
measure how common the duty is across the occupation.

## Inclusion rules

Openings were found with web searches run on October 17, 2026. The searches used
the job title in quotes, alone or limited to the Ashby, Greenhouse, and Lever job
boards. A few searches named employers or a specific posting. The following rules
decided whether an opening counted:

- The opening was public and readable without signing in.
- For the AI engineer pool, the title or the body asked for an AI engineer. Titles
  such as Applied AI Engineer, AI Solutions Engineer, GenAI engineer, and a
  software engineer posting that asks for an AI engineer all counted.
- For the forward deployed engineer pool, the title was forward deployed engineer
  or forward deployed software engineer.

In both pools, no employer appears twice.

## What was recorded

The following were recorded for each pool:

- The duties that overlapped across the openings.
- The stack pieces that showed up with those duties.
- The documents a writer has to produce because of those duties.

## What was excluded and why

Employer names, posting links, and posting text are not stored in this repository,
because openings close and a posting is an employer's words.

One forward deployed engineer page was read and then excluded, because its title
named one company and its body described a different company's product, so it was
not a clean record of either.

## How duties were coded

An AI research assistant read each opening at the author's request and recorded a
short summary of what the role builds, the stack the posting names, and the
documentation the role needs. The duties were coded afterward from those
summaries, not from the posting text, which is not kept:

- A duty counts for an opening when the summary of what the role builds names it,
  or when the summary records that the posting itself asks for it.
- The note on the documentation a role needs is the reader's inference, so it is
  not counted as a duty.
- Wording that names the same work is grouped into one duty, for example "tool
  calling", "tool use", and "tools that touch internal systems".
- A duty is overlapping when at least two openings in a pool name it.

Because the counts come from summaries, they can undercount a duty a posting
mentioned that its summary left out.

## Growth figures are a separate source

The growth figures on the role pages come from published labor market reports, not
from these pools. Each figure is cited to its original publisher on the role page.
