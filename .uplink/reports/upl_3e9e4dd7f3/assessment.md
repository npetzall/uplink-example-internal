# Contribution packet — upl_3e9e4dd7f3

Review this packet (the same markdown is on the Actions job summary / `GITHUB_STEP_SUMMARY`), then approve the **to-upstream** GitHub Environment on the waiting Actions run. That approval is the IP gate. GitHub records it in the environment deployment history and the enterprise audit log. After you approve, the same run submits to the upstream-owned private fork.

| Field | Value |
| --- | --- |
| Patch | `upl_3e9e4dd7f3` |
| Title | Extend TTL |
| Queue | upstream |
| Queue status | queued |
| Depends on | none |
| Internal PR | https://github.com/npetzall/uplink-example-internal/pull/13 |

## Commit messages that will be used

Company `main` keeps the cutoff and internal notes. The contribution fork does not.

### Company main

```
Extend TTL

Extend the default token TTL from one hour to two.

----- Uplink: internal below this line -----

Ticket: PROJ-2001
Uplink-Export-Author: Ben <ben@example.com>

Uplink-Patch-Id: upl_3e9e4dd7f3
```

### Upstream contrib

```
Extend TTL

Extend the default token TTL from one hour to two.

Uplink-Patch-Id: upl_3e9e4dd7f3
```

## Uplink assess-for-upstream

This is the contribution as it would leave the enterprise. HTML comments from the PR template are stripped. Internal lines below the cutoff stay on company main and are removed before export. Author is rewritten. Approvers can use this report instead of reconstructing the public PR by hand.

**Ready:** yes
**Public subject:** Extend TTL
**Export author:** Ben <ben@example.com>
**Original author:** Nils Petzall <nils.petzall@gmail.com>
**Cutoff found:** yes

### Company commit message

```
Extend TTL

Extend the default token TTL from one hour to two.

----- Uplink: internal below this line -----

Ticket: PROJ-2001
Uplink-Export-Author: Ben <ben@example.com>
```

### Upstream commit message

```
Extend TTL

Extend the default token TTL from one hour to two.
```

### Checks

- **message-scrubbed** (pass): Internal section removed. Public body is what upstream will see.
- **cutoff-used** (pass): Cutoff “----- Uplink: internal below this line -----” found.
- **author-rewrite** (pass): Export author Ben <ben@example.com> (was Nils Petzall <nils.petzall@gmail.com>). Company main still records the Uplink bot.
- **affiliation-leak** (warn): No redactKeywords / internalEmailDomains configured. Set them (or UPLINK_REDACT_KEYWORDS) so tests cannot mention the company.

## What happens when you approve the to-upstream environment

1. GitHub records the environment reviewer (audit log + Deployments).
2. This workflow writes `.uplink/reports/upl_3e9e4dd7f3/approval.md` on `uplink/state`.
3. `git uplink approve` then `git uplink submit` run with App credentials that exist **only** on the to-upstream environment (git push to the contrib fork).
4. The workflow opens the public pull request with `POST /repos/{parent}/pulls` (`head` is the branch, `head_repo` is `<contrib_owner>/<contrib_repo>`, `maintainer_can_modify` false) and runs `git uplink submitted`. No public PR is opened unless export preflight still passes.
