#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Import game tags from a Libretro JSON file into your Tag tree.
 *
 * - Interactive TagPlacement chooser (browse by numbers; 'b' back; 's' select; 'q' quit)
 * - Creates Tag(name=serial) only if serial contains '-'
 * - Tag.description = title, Tag.photoUrl = boxartUrl
 * - Places each Tag under the selected branch (TagPlacement)
 * - Rebuilds PlacementClosure at the end
 *
 * Usage:
 *   node scripts/games/import-libretro-tags.cjs --json "data/games/libretro/Nintendo - Game Boy.json"
 *   # optional:
 *   --parent <placementId>  (skip the interactive picker)
 *   --dry-run               (no DB writes)
 *   --force-photo           (overwrite Tag.photoUrl if already set)
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// ───────────────────────────────────────────────────────────────────────────────
// CLI
// ───────────────────────────────────────────────────────────────────────────────
const args = new Map();
for (let i = 2; i < process.argv.length; i++) {
  const k = process.argv[i];
  const v = process.argv[i + 1];
  if (k && k.startsWith('--')) {
    if (v && !v.startsWith('--')) { args.set(k.slice(2), v); i++; }
    else { args.set(k.slice(2), true); }
  }
}
const JSON_PATH = args.get('json');
const PARENT_PLACEMENT = args.get('parent') || null;
const DRY_RUN = !!args.get('dry-run');
const FORCE_PHOTO = !!args.get('force-photo');

if (!JSON_PATH) {
  console.error('❌ Missing --json <file>');
  process.exit(1);
}

function readJsonArray(p) {
  const raw = fs.readFileSync(p, 'utf8');
  const data = JSON.parse(raw);
  if (!Array.isArray(data)) throw new Error('JSON must be an array of { title, serial, boxartUrl, ... }');
  return data;
}

// ───────────────────────────────────────────────────────────────────────────────
// Tag tree utilities
// ───────────────────────────────────────────────────────────────────────────────
async function loadPlacementsTree() {
  const rows = await prisma.tagPlacement.findMany({
    select: {
      id: true,
      tagId: true,
      parentPlacementId: true,
      tag: { select: { id: true, name: true, description: true } },
    },
  });

  const byParent = new Map();
  for (const r of rows) {
    const k = r.parentPlacementId === null ? 'root' : r.parentPlacementId;
    if (!byParent.has(k)) byParent.set(k, []);
    byParent.get(k).push(r);
  }
  // sort children by tag.name for stable UX
  for (const arr of byParent.values()) arr.sort((a, b) => a.tag.name.localeCompare(b.tag.name));

  function build(parentId) {
    const key = parentId === null ? 'root' : parentId;
    const kids = byParent.get(key) || [];
    return kids.map((r) => ({
      placementId: r.id,
      tagId: r.tagId,
      name: r.tag.name,
      description: r.tag.description || '',
      children: build(r.id),
    }));
  }
  return build(null);
}

function printMenu(nodes, pathNames) {
  console.log('\nPath:', pathNames.length ? pathNames.join(' › ') : '(root)');
  if (!nodes.length) {
    console.log('(no children here)');
  } else {
    nodes.forEach((n, i) => console.log(`${String(i + 1).padStart(2, ' ')}. ${n.name}`));
  }
  console.log("\nChoose a number, 'b' = back, 's' = select here, 'q' = quit");
}

async function pickPlacementInteractively() {
  const roots = await loadPlacementsTree();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ask = (q) => new Promise((res) => rl.question(q, (a) => res(a.trim())));

  const stack = []; // stack of { nodes, index, name }
  let currentNodes = roots;
  let pathNames = [];

  while (true) {
    printMenu(currentNodes, pathNames);
    const ans = await ask('> ');
    if (ans === 'q') { rl.close(); process.exit(0); }
    if (ans === 's') {
      // selecting "here": return parent placement (the current list's parent)
      const parentPlacementId = stack.length ? stack[stack.length - 1].node.placementId : null;
      rl.close();
      return parentPlacementId;
    }
    if (ans === 'b') {
      if (stack.length) {
        const popped = stack.pop();
        currentNodes = stack.length ? stack[stack.length - 1].node.children : roots;
        pathNames = pathNames.slice(0, -1);
      } else {
        console.log('(already at root)');
      }
      continue;
    }
    const idx = parseInt(ans, 10);
    if (!Number.isFinite(idx) || idx < 1 || idx > currentNodes.length) {
      console.log('Invalid choice.');
      continue;
    }
    const chosen = currentNodes[idx - 1];
    stack.push({ node: chosen });
    pathNames.push(chosen.name);
    currentNodes = chosen.children;
  }
}

// ensure TagPlacement(tagId under parentPlacementId) exists
async function ensurePlacement(tagId, parentPlacementId) {
  const existing = await prisma.tagPlacement.findFirst({
    where: { tagId, parentPlacementId: parentPlacementId ?? null },
    select: { id: true },
  });
  if (existing) return existing.id;
  const created = await prisma.tagPlacement.create({
    data: { tagId, parentPlacementId: parentPlacementId ?? null },
    select: { id: true },
  });
  return created.id;
}

// rebuild PlacementClosure (BFS from every node)
async function rebuildPlacementClosureAll() {
  await prisma.placementClosure.deleteMany({});
  const placements = await prisma.tagPlacement.findMany({
    select: { id: true, parentPlacementId: true },
  });
  if (!placements.length) return;

  // self-rows
  await prisma.placementClosure.createMany({
    data: placements.map((p) => ({
      ancestorPlacementId: p.id,
      descendantPlacementId: p.id,
      depth: 0,
    })),
    skipDuplicates: true,
  });

  const childrenByParent = new Map();
  for (const p of placements) {
    const k = p.parentPlacementId;
    if (!childrenByParent.has(k)) childrenByParent.set(k, []);
    childrenByParent.get(k).push(p.id);
  }

  const toInsert = [];
  for (const anc of placements) {
    const q = [{ id: anc.id, depth: 0 }];
    const seen = new Set([anc.id]);
    while (q.length) {
      const { id, depth } = q.shift();
      const kids = childrenByParent.get(id) || [];
      for (const ch of kids) {
        if (!seen.has(ch)) {
          seen.add(ch);
          toInsert.push({
            ancestorPlacementId: anc.id,
            descendantPlacementId: ch,
            depth: depth + 1,
          });
          q.push({ id: ch, depth: depth + 1 });
        }
      }
    }
  }
  if (toInsert.length) {
    // chunk to avoid giant single payloads
    const CHUNK = 1000;
    for (let i = 0; i < toInsert.length; i += CHUNK) {
      await prisma.placementClosure.createMany({
        data: toInsert.slice(i, i + CHUNK),
        skipDuplicates: true,
      });
    }
  }
}

// ───────────────────────────────────────────────────────────────────────────────
// Import logic
// ───────────────────────────────────────────────────────────────────────────────
function sanitizeSerial(serial) {
  if (!serial || typeof serial !== 'string') return null;
  const s = serial.trim();
  if (!s.includes('-')) return null; // rule: must contain dash
  return s;
}

async function importFromJson(file, parentPlacementId) {
  const records = readJsonArray(file);

  let createdTags = 0;
  let updatedDesc = 0;
  let updatedPhoto = 0;
  let createdPlacements = 0;
  let skippedNoDash = 0;

  let i = 0;
  for (const rec of records) {
    i++;
    const title = (rec.title || '').trim();
    const serial = sanitizeSerial(rec.serial);
    const boxartUrl = (rec.boxartUrl || '').trim();

    if (!serial) {
      skippedNoDash++;
      continue;
    }

    let tag = await prisma.tag.findUnique({ where: { name: serial } });
    if (!tag) {
      if (DRY_RUN) {
        createdTags++;
      } else {
        tag = await prisma.tag.create({
          data: {
            name: serial,
            description: title || null,
            photoUrl: boxartUrl || null,
          },
        });
        createdTags++;
      }
    } else {
      const patch = {};
      if (!tag.description && title) { patch.description = title; updatedDesc++; }
      if ((FORCE_PHOTO && boxartUrl) || (!tag.photoUrl && boxartUrl)) { patch.photoUrl = boxartUrl; updatedPhoto++; }
      if (!DRY_RUN && Object.keys(patch).length) {
        tag = await prisma.tag.update({ where: { id: tag.id }, data: patch });
      }
    }

    if (!DRY_RUN) {
      const existed = await prisma.tagPlacement.findFirst({
        where: { tagId: tag.id, parentPlacementId: parentPlacementId ?? null },
        select: { id: true },
      });
      if (!existed) {
        await ensurePlacement(tag.id, parentPlacementId);
        createdPlacements++;
      }
    } else {
      createdPlacements++;
    }

    if (i % 100 === 0) {
      console.log(`… processed ${i}/${records.length}`);
    }
  }

  return { createdTags, updatedDesc, updatedPhoto, createdPlacements, skippedNoDash, total: records.length };
}

// ───────────────────────────────────────────────────────────────────────────────
// Main
// ───────────────────────────────────────────────────────────────────────────────
(async function main() {
  try {
    const parentPlacementId = PARENT_PLACEMENT || await pickPlacementInteractively();

    console.log('\n--- Import starting ---');
    console.log('JSON:', path.resolve(JSON_PATH));
    console.log('Parent placement:', parentPlacementId ?? '(root)');
    console.log('Dry run:', DRY_RUN ? 'YES' : 'NO');
    console.log('Force photo overwrite:', FORCE_PHOTO ? 'YES' : 'NO');

    const stats = await importFromJson(JSON_PATH, parentPlacementId);

    console.log('\nStats:');
    console.log(`  Total records:           ${stats.total}`);
    console.log(`  Skipped (no dash):       ${stats.skippedNoDash}`);
    console.log(`  Created tags:            ${stats.createdTags}`);
    console.log(`  Updated descriptions:    ${stats.updatedDesc}`);
    console.log(`  Updated photoUrl:        ${stats.updatedPhoto}`);
    console.log(`  Created placements:      ${stats.createdPlacements}`);

    if (!DRY_RUN) {
      console.log('\nRebuilding PlacementClosure…');
      await rebuildPlacementClosureAll();
    }

    console.log('\n✅ Done.');
  } catch (e) {
    console.error('❌', e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
