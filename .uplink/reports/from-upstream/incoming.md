# Incoming upstream — from-upstream

Public main moved, and company patches do not explain all of it. Review the unaccounted changes below (the same markdown is on the Actions job summary / `GITHUB_STEP_SUMMARY`), then approve the **from-upstream** GitHub Environment on the waiting Actions run. That approval updates `uplink/upstream` and rebuilds company main. GitHub records it in the environment deployment history and the enterprise audit log.

| Field | Value |
| --- | --- |
| Current `uplink/upstream` | `c93796dab791ad0b6b358d62915594da98344dd1` |
| Pending public main | `dda09849bf8488e990f9f747dc0dab3b2e6cb998` |
| Commits | 1 |
| Patches merged | 0 |
| Unproven claims | 0 |

## Marked merged when you approve

A patch is merged when a commit has its `git patch-id --stable`, or when its recorded public pull request is merged. The `Uplink-Patch-Id` trailer alone is not enough.

None.

## Claims without proof

None.

## Commits

| Commit | Author | Subject | Classified |
| --- | --- | --- | --- |
| `dda09849bf8488e990f9f747dc0dab3b2e6cb998` | Nils Petzäll &lt;nils.petzall@gmail.com> | Change default TTL value from 3600 to 3000 | foreign |

## Unaccounted changes

The diff from `uplink/upstream` with the merged patches applied to pending public main. This is what the approval is for.

```
 src/tokens.js | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

```
diff --git a/src/tokens.js b/src/tokens.js
index 0c7da2d..5d4e142 100644
--- a/src/tokens.js
+++ b/src/tokens.js
@@ -13,5 +13,5 @@ export function hash(value) {
 }
 
 export function ttl() {
-  return 3600;
+  return 3000;
 }
```

## What happens when you approve the from-upstream environment

1. GitHub records the environment reviewer (audit log + Deployments).
2. This workflow writes `.uplink/reports/from-upstream/approval.md` on `uplink/state`.
3. `git uplink accept-upstream` moves `uplink/upstream` to `dda09849bf8488e990f9f747dc0dab3b2e6cb998` and rebuilds company main.
4. The patches listed above are marked merged and are not applied again. Remaining patches replay onto the new upstream; one that applies empty is marked merged too.
