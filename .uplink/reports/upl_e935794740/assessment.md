# Delta packet — upl_e935794740

This contribution was **already IP-approved** and submitted. Review **only the delta** since the last approval. Historical packets below were already approved; do not re-litigate them unless the delta depends on that context.

| Field | Value |
| --- | --- |
| Patch | `upl_e935794740` |
| Title | Update ttl function to return 7200 seconds |
| Amendment | 1 |
| Public PR | https://github.com/npetzall-contrib-a/uplink-example-upstream/pull/7 |
| Last approved at | 2026-10-15T11:45:45.144Z |
| Last approved commit | `31ec13274f466b6b1d3e4b9b9b9743ec5bfc45ca` |
| Last approval run | https://github.com/npetzall/uplink-example-internal/actions/runs/38729484103 |
| Review token | `474f8b514f6a6db2ddc06168c0578b6bb9315dc0` |

## Delta since last approval

### Changed lines: approved vs current

The lines the patch adds and removes, file by file, compared with what was last approved. The unchanged lines around them are not listed.

```
diff --git a/tmp/uplink-delta-89a5e2e8-a7d9-4e7c-80aa-ddebb8d62118/approved.txt b/tmp/uplink-delta-89a5e2e8-a7d9-4e7c-80aa-ddebb8d62118/current.txt
index 40aa136..058fd71 100644
--- a/tmp/uplink-delta-89a5e2e8-a7d9-4e7c-80aa-ddebb8d62118/approved.txt
+++ b/tmp/uplink-delta-89a5e2e8-a7d9-4e7c-80aa-ddebb8d62118/current.txt
@@ -1,3 +1,5 @@
 diff --git a/src/tokens.js b/src/tokens.js
--  return 3600;
-+  return 7200;
+-function sha1(value) {
+-  return createHash("sha1").update(String(value)).digest("hex");
+-}
+-
```

The previously approved patch no longer applies cleanly on the current export base (typical after upstream moved). Diff of the two patch files, plus the current patch that will be exported:

### Patch-file diff

```
diff --git a/tmp/uplink-delta-0c9bbde7-a511-4810-bfe5-1529dcd0656e/approved.patch b/tmp/uplink-delta-0c9bbde7-a511-4810-bfe5-1529dcd0656e/current.patch
index 6e7b434..0241662 100644
--- a/tmp/uplink-delta-0c9bbde7-a511-4810-bfe5-1529dcd0656e/approved.patch
+++ b/tmp/uplink-delta-0c9bbde7-a511-4810-bfe5-1529dcd0656e/current.patch
@@ -1,27 +1,30 @@
-From 1e47b3ae225aa1ca5423a8cd50aed476dad55aaa Mon Sep 17 00:00:00 2001
+From eda7ca195b151ad619dda2222276e1aab517027a Mon Sep 17 00:00:00 2001
 From: Uplink Bot <uplink@company.example>
-Date: Thu, 15 Oct 2026 11:42:51 +0000
+Date: Thu, 15 Oct 2026 12:01:54 +0000
 Subject: [PATCH] Update ttl function to return 7200 seconds
 
-Increase the TTL since it was too short
+Remove unused sha function
 
 ----- Uplink: internal below this line -----
 
 Uplink-Patch-Id: upl_e935794740
 ---
- src/tokens.js | 2 +-
- 1 file changed, 1 insertion(+), 1 deletion(-)
+ src/tokens.js | 4 ----
+ 1 file changed, 4 deletions(-)
 
 diff --git a/src/tokens.js b/src/tokens.js
-index 0c7da2d506f5b1b38094895aeabfe9743b77877f..bb8c4b2fb06ac0d7f92f1e508ab5cd8f3f72b44a 100644
+index 5d4e142f7c530e7d47790dd1fe50afb32c292862..47cb938609f1cbcc29ef9f0dfb367b3b0d82f278 100644
 --- a/src/tokens.js
 +++ b/src/tokens.js
-@@ -13,5 +13,5 @@ export function hash(value) {
- }
+@@ -1,9 +1,5 @@
+ import { createHash } from "node:crypto";
  
- export function ttl() {
--  return 3600;
-+  return 7200;
+-function sha1(value) {
+-  return createHash("sha1").update(String(value)).digest("hex");
+-}
+-
+ function sha256(value) {
+   return createHash("sha256").update(String(value)).digest("hex");
  }
 -- 
-2.55.0
\ No newline at end of file
+2.55.0
```

### Current patch (will be exported)

```
From eda7ca195b151ad619dda2222276e1aab517027a Mon Sep 17 00:00:00 2001
From: Uplink Bot <uplink@company.example>
Date: Thu, 15 Oct 2026 12:01:54 +0000
Subject: [PATCH] Update ttl function to return 7200 seconds

Remove unused sha function

----- Uplink: internal below this line -----

Uplink-Patch-Id: upl_e935794740
---
 src/tokens.js | 4 ----
 1 file changed, 4 deletions(-)

diff --git a/src/tokens.js b/src/tokens.js
index 5d4e142f7c530e7d47790dd1fe50afb32c292862..47cb938609f1cbcc29ef9f0dfb367b3b0d82f278 100644
--- a/src/tokens.js
+++ b/src/tokens.js
@@ -1,9 +1,5 @@
 import { createHash } from "node:crypto";
 
-function sha1(value) {
-  return createHash("sha1").update(String(value)).digest("hex");
-}
-
 function sha256(value) {
   return createHash("sha256").update(String(value)).digest("hex");
 }
-- 
2.55.0
```


## Upstream commit message

```
Update ttl function to return 7200 seconds

Remove unused sha function

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
4. The workflow opens the public pull request with `POST /repos/{parent}/pulls` (`head` is the branch, `head_repo` is `<contrib_owner>/<contrib_repo>`, `maintainer_can_modify` false) or reuses the recorded PR, then runs `git uplink submitted`. No second PR is opened.

## Previously approved packets

Each packet below **was already approved**. The delta above is what still needs review.

### Already approved (initial) — 2026-10-15T11:45:45.144Z

| Field | Value |
| --- | --- |
| Version | 1 |
| Queue commit | `31ec13274f466b6b1d3e4b9b9b9743ec5bfc45ca` |
| Run | https://github.com/npetzall/uplink-example-internal/actions/runs/38729484103 |

This historical report has **already been approved**.

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
