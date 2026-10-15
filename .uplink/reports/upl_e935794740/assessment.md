# Contribution packet — upl_e935794740

| Field | Value |
| --- | --- |
| Patch | `upl_e935794740` |
| Title | Update ttl function to return 7200 seconds |
| Depends on | none |
| Internal PR | https://github.com/npetzall/uplink-example-internal/pull/15 |
| Review token | `251ca2846537df1f689acd1ab71fa27dfc8a0758` |

## Upstream commit message

```
Update ttl function to return 7200 seconds

Increase the TTL since it was too short

Uplink-Patch-Id: upl_e935794740
```

## Upstream Assessment: ✅

[What this checks and how to fix a failure](https://npetzall.github.io/git-uplink/day-to-day#assess-fails)

### Checks

| Check | Description | Result |
| --- | --- | --- |
| `message-scrubbed` | No cutoff in the message. The whole message is treated as public. | ✅ |
| `cutoff-used` | Optional. Add “----- Uplink: internal below this line -----” under the public body for issue ids and other internal notes. | ⏭️ |
| `co-author` | No Uplink-Export-Author below the cutoff, so no Co-Authored-By trailer. The commit author is the contrib token's identity. | ⏭️ |
| `affiliation-leak` | No configured company keywords or internal email domains in the export surface. | ✅ |
| `dependencies` | No Uplink-Depends-On. | ⏭️ |

## What happens when you approve the to-upstream environment

1. GitHub records the environment reviewer (audit log + Deployments).
2. This workflow writes `.uplink/reports/upl_e935794740/approval.md` on `uplink/state`.
3. `git uplink approve` then `git uplink submit` run with App credentials that exist **only** on the to-upstream environment. The approval is for the review token above: if the patch changed since this packet, approve stops and nothing is exported.
4. The workflow opens the public pull request with `POST /repos/{parent}/pulls` (`head` is the branch, `head_repo` is `<contrib_owner>/<contrib_repo>`, `maintainer_can_modify` false) and runs `git uplink submitted`. No public PR is opened unless export preflight still passes.
