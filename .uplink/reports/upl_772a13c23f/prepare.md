# OSS contribution packet — upl_772a13c23f

Review this packet (the same markdown is on the Actions job summary / `GITHUB_STEP_SUMMARY`), then approve the **oss** GitHub Environment on the waiting Actions run. That approval is the IP gate. GitHub records it in the environment deployment history and the enterprise audit log. After you approve, the same run submits to the upstream-owned private fork.

| Field | Value |
| --- | --- |
| Patch | `upl_772a13c23f` |
| Title | Use SHA-256 for tokens |
| Intent | upstream |
| Queue status | queued |
| Depends on | none |
| Internal PR | https://github.com/npetzall/uplink-example-internal/pull/3 |

## Commit messages that will be used

Company `main` keeps the cutoff and internal notes. The contribution fork does not.

### Company main

```
Use SHA-256 for tokens

Replace SHA-1 in the default hasher with SHA-256.

----- Uplink: internal below this line -----

Ticket: PROJ-1234
Uplink-Export-Author: Asha <asha@users.noreply.github.com>

Uplink-Patch-Id: upl_772a13c23f
```

### Upstream contrib

```
Use SHA-256 for tokens

Replace SHA-1 in the default hasher with SHA-256.

Uplink-Patch-Id: upl_772a13c23f
```

## Uplink prepare-for-upstream

This is the contribution as it would leave the enterprise. HTML comments from the PR template are stripped. Internal lines below the cutoff stay on company main and are removed before export. Author is rewritten. Approvers can use this report instead of reconstructing the public PR by hand.

**Ready:** yes
**Public subject:** Use SHA-256 for tokens
**Export author:** Asha <asha@users.noreply.github.com>
**Original author:** Nils Petzall <nils.petzall@gmail.com>
**Cutoff found:** yes

### Company commit message

```
Use SHA-256 for tokens

Replace SHA-1 in the default hasher with SHA-256.

----- Uplink: internal below this line -----

Ticket: PROJ-1234
Uplink-Export-Author: Asha <asha@users.noreply.github.com>
```

### Upstream commit message

```
Use SHA-256 for tokens

Replace SHA-1 in the default hasher with SHA-256.
```

### Checks

- **message-scrubbed** (pass): Internal section removed. Public body is what upstream will see.
- **cutoff-used** (pass): Cutoff “----- Uplink: internal below this line -----” found.
- **author-rewrite** (pass): Export author Asha <asha@users.noreply.github.com> (was Nils Petzall <nils.petzall@gmail.com>). Company main still records the Uplink bot.
- **affiliation-leak** (warn): No redactKeywords / internalEmailDomains configured. Set them (or UPLINK_REDACT_KEYWORDS) so tests cannot mention the company.

## What happens when you approve the oss environment

1. GitHub records the environment reviewer (audit log + Deployments).
2. This workflow writes `.uplink/reports/upl_772a13c23f/approval.md` on `uplink/state`.
3. `git uplink approve` then `git uplink submit` run with App credentials that exist **only** on the oss environment.
4. No public PR is opened unless export preflight still passes.
