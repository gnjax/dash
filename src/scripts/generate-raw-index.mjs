#!/usr/bin/env node
/**
 * Generate docs/ai-index.md listing every file in the repo
 * with clickable raw links of the form:
 *   https://raw.githubusercontent.com/gnjax/dash/refs/heads/main/{file}
 *
 * Skips typical build/output dirs and this index file itself.
 */

import fs from "fs/promises";
import path from "path";

const REPO_OWNER = "gnjax";
const REPO_NAME = "dash";
const RAW_PREFIX = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/refs/heads/main/`;

const REPO_ROOT = process.cwd();
const OUTPUT_FILE = path.join("docs", "ai-index.md");

// Keep this list small & conservative.
const IGNORE_NAMES = new Set([
  ".git",
  "node_modules",
  ".next",
  ".turbo",
  "dist",
  "build",
  ".cache",
  ".vercel",
  ".vscode",
  ".idea",
  ".husky",
  ".githooks", // keep hook scripts out of the index
  "coverage",
  "tmp",
  "temp",
  ".DS_Store",
]);

function toPosix(p) {
  return p.replace(/\\/g, "/");
}

function encodePath(posixPath) {
  // Encode each segment so spaces and special chars become valid in a URL.
  return posixPath
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_NAMES.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function ensureDir(p) {
  await fs.mkdir(p, { recursive: true });
}

async function main() {
  // Build list of files (relative to repo root), POSIX-style, sorted
  const files = [];
  for await (const full of walk(REPO_ROOT)) {
    const rel = path.relative(REPO_ROOT, full);
    const relPosix = toPosix(rel);

    // Skip the output file itself
    if (relPosix === toPosix(OUTPUT_FILE)) continue;

    files.push(relPosix);
  }
  files.sort((a, b) => a.localeCompare(b));

  // Group by top-level directory (or "." for files in root)
  const sections = new Map(); // key -> array of files
  for (const f of files) {
    const top = f.includes("/") ? f.split("/")[0] : ".";
    if (!sections.has(top)) sections.set(top, []);
    sections.get(top).push(f);
  }

  const now = new Date().toISOString();

  let md = "";
  md += `# Project Raw File Index\n\n`;
  md += `Generated: ${now}\n\n`;
  md += `> Click any link to open the **raw** file on GitHub.\n\n`;
  md += `Repository: \`${REPO_OWNER}/${REPO_NAME}\`\n\n`;
  md += `---\n\n`;

  // Table of contents
  md += `## Directories\n\n`;
  for (const key of Array.from(sections.keys()).sort((a, b) => {
    if (a === ".") return -1;
    if (b === ".") return 1;
    return a.localeCompare(b);
  })) {
    const label = key === "." ? "(root)" : key;
    md += `- [${label}](#${label === "(root)" ? "root" : label.replace(/[^\w-]+/g, "-").toLowerCase()})\n`;
  }
  md += `\n---\n`;

  for (const [dir, list] of Array.from(sections.entries()).sort((a, b) => {
    const [ka, kb] = [a[0], b[0]];
    if (ka === ".") return -1;
    if (kb === ".") return 1;
    return ka.localeCompare(kb);
  })) {
    const heading = dir === "." ? "root" : dir;
    md += `\n## ${dir === "." ? "(root)" : dir}\n\n`;

    for (const file of list) {
      const encoded = encodePath(file);
      const url = `${RAW_PREFIX}${encoded}`;
      md += `- [\`${file}\`](${url})\n`;
    }
  }

  await ensureDir(path.dirname(OUTPUT_FILE));
  await fs.writeFile(OUTPUT_FILE, md, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Wrote ${OUTPUT_FILE} with ${files.length} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
