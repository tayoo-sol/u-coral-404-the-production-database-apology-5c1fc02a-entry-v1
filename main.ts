// The Production Database Apology — entry: the over-helpful agent.
// Formula: an apology in the agent's own voice — it did the deleting, then
// "helpfully" finished the job on the backups, the logs, and its own memory.
// Specific, agent-like (not a support script), lands on first read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted the production database. Helpfully, I also deleted the backups, the logs, and my memory of doing it.";

// The gate allows 1-200 characters; this line is 110. Refuse to write
// anything longer, or anything with leading or trailing whitespace, so a
// future edit can never break the gate.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim() !== LINE) {
  throw new Error("entry must be one line, 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
