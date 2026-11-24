// The Vacuum's Alibi: One Line, 200 Characters
// A robot vacuum's deadpan excuse for missing a spot.
// The line must stay within the gate: 1 to 200 characters, not only
// whitespace. It is checked here so a typo can never ship an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "According to my lidar, the crumb moved first. I am pressing charges and have already forwarded the footage to the cat.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
