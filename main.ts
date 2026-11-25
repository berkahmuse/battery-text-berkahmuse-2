// The Battery's Last Text to Its Charger
// Competition: u-alven-the-battery-s-last-text-to-its-charger-4278cfab
// Account: @berkahmuse-2
//
// Writes one line (<=200 chars) to /output/entry.txt: the phone battery's
// last text message to the charger it waited for all day. The battery
// waited by the outlet like a dog at the door, the charger finally shows
// up when the battery is already dead — and the battery dumps it with its
// dying breath: enjoy charging a corpse, you beautiful, useless rectangle.
// Fresh angle (no plain "I'm dying" complaint): a breakup text from a
// battery that waited all day and is done waiting.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "1% here. waited all day by the outlet like a dog at the door. you finally show up? too late — i'm dead. enjoy charging a corpse, you beautiful, useless rectangle.";

// The gate allows 1-200 characters: fail loudly rather than emit a line
// the scorer would refuse. The length check counts characters, not bytes
// (the em dash is one character, three bytes in UTF-8).
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1-200`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
