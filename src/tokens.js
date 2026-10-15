import { createHash } from "node:crypto";

function sha256(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

export function hash(value) {
  return sha256(value);
}

export function ttl() {
  return 3000;
}
