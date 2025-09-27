#!/usr/bin/env node
/**
 * Crawl Libretro Database for a given platform and save a JSON catalog:
 *   - title, region, serial, detailUrl, boxartUrl
 *
 * Example:
 *   node scripts/games/scrape-libretro.mjs --platform "Nintendo - Game Boy"
 */

import fs from "fs/promises";
import path from "path";

const DB_BASE = "https://db.libretro.com";
const THUMB_BASE = "https://thumbnails.libretro.com";
const OUTPUT_DIR = path.join("data", "games", "libretro");
const DEFAULT_DELAY_MS = Number(process.env.LIBRETRO_SCRAPE_DELAY_MS || 150);

// ---------------- CLI ----------------
function parseArgs(argv) {
  const args = { platform: null, out: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--platform" || a === "-p") args.platform = argv[++i];
    else if (a === "--out" || a === "-o") args.out = argv[++i];
    else if (a === "--help" || a === "-h") {
      console.log(`Usage:
  node scripts/games/scrape-libretro.mjs --platform "Nintendo - Game Boy" [--out custom.json]

Env:
  LIBRETRO_SCRAPE_DELAY_MS  throttle between requests (default ${DEFAULT_DELAY_MS}ms)
`);
      process.exit(0);
    }
  }
  if (!args.platform) {
    console.error('Missing --platform (e.g., "Nintendo - Game Boy")');
    process.exit(1);
  }
  return args;
}

// ------------- Helpers ---------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function encodePath(p) {
  // encode each path segment (space -> %20 etc.), keep slashes
  return p.split("/").map((seg) => encodeURIComponent(seg)).join("/");
}
function platformIndexUrl(platform, pageIndex) {
  return `${DB_BASE}/${encodePath(platform)}/index-${pageIndex}.html`;
}
function absoluteUrl(href, platform) {
  if (/^https?:\/\//i.test(href)) return href;
  let rel = href.replace(/^\//, "");

  // If rel already includes the platform segment (raw or encoded), don't prepend it again.
  const platRaw = `${platform}/`;
  const platEnc = `${encodePath(platform)}/`;
  if (rel.startsWith(platRaw) || rel.startsWith(platEnc)) {
    const encodedRel = /%[0-9A-Fa-f]{2}/.test(rel) ? rel : encodePath(rel);
    return `${DB_BASE}/${encodedRel}`;
  }

  const encodedRel = /%[0-9A-Fa-f]{2}/.test(rel) ? rel : encodePath(rel);
  return `${DB_BASE}/${encodePath(platform)}/${encodedRel}`;
}

function sanitizeForBoxartName(name) {
  // libretro-thumbnails rule: replace &*/:`<>?\|" with "_"
  return name.replace(/[&*\/:`<>?\\|"]/g, "_");
}
function boxartUrl(platform, displayName) {
  const file = sanitizeForBoxartName(displayName) + ".png";
  return `${THUMB_BASE}/${encodePath(platform)}/Named_Boxarts/${encodePath(file)}`;
}
function matchAll(regex, str) {
  const out = [];
  let m;
  while ((m = regex.exec(str))) out.push(m);
  return out;
}
function extractTitleFromDetail(html, fallbackFromUrl) {
  const m = html.match(/<h1[^>]*>\s*([^<]+?)\s*<\/h1>/i);
  if (m && m[1]) return decodeHtml(m[1].trim());
  if (fallbackFromUrl) {
    const seg = fallbackFromUrl.replace(/\.html?$/i, "").replace(/_/g, " ");
    try { return decodeURIComponent(seg); } catch { return seg; }
  }
  return null;
}
function decodeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}
function extractRegionFromTitle(title) {
  const m = title && title.match(/\(([^)]+)\)\s*$/);
  return m ? m[1] : null;
}

// Robust serial extraction
function extractSerial(html) {
  // A: simple text (works when no tags in between)
  let m = html.match(/Serial:\s*([A-Za-z0-9][A-Za-z0-9._\-\/]+)\b/i);
  if (m) return m[1];

  // B: value appears after closing tag following "Serial"
  // e.g., <strong>Serial</strong>: <span>DMG-XXXX-YYY</span>
  m = html.match(/>Serial<\/[^>]*>[^<]*:\s*<\/?[^>]*>\s*([A-Za-z0-9][A-Za-z0-9._\-\/]+)/i);
  if (m) return m[1];

  // C: generic — find "Serial" label then scan the next ~120 chars for a token
  const pos = html.search(/Serial\b/i);
  if (pos !== -1) {
    const tail = html.slice(pos, pos + 200);
    const m2 = tail.match(/Serial[^<:]*:?[^A-Za-z0-9._\-\/]{0,10}([A-Za-z0-9][A-Za-z0-9._\-\/]+)/i);
    if (m2) return m2[1];
  }

  // D: strip tags and retry on plaintext
  const plain = html.replace(/<[^>]+>/g, " ");
  m = plain.match(/Serial:\s*([A-Za-z0-9][A-Za-z0-9._\-\/]+)\b/i);
  if (m) return m[1];

  return null;
}

// -------------- Fetch ----------------
async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": "dash-scraper/1.0" } });
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.text();
}

async function crawlIndex(platform) {
  const links = [];
  let page = 0;
  while (true) {
    const url = platformIndexUrl(platform, page);
    let html;
    try {
      html = await get(url);
    } catch (e) {
      if (page === 0) throw e;
      break; // end of pages
    }

    // "See details" anchors; href may be just "<title>.html" OR "<platform>/<title>.html"
    const pageLinks = matchAll(/<a\s+href="([^"]+?\.html)".*?>\s*See details\s*<\/a>/gi, html)
      .map((m) => m[1]); // keep href as-is

    if (!pageLinks.length) break;
    links.push(...pageLinks);
    page++;
    await sleep(DEFAULT_DELAY_MS);
  }
  return links;
}

async function scrapeDetail(platform, href) {
  const url = absoluteUrl(href, platform);
  const html = await get(url);

  // Serial (robust)
  const serial = extractSerial(html);

  // Title (prefer <h1>, fallback to file name)
  const fileName = href.split("/").pop() || "";
  const displayTitle = extractTitleFromDetail(html, fileName) || fileName.replace(/\.html?$/i, "");
  const region = extractRegionFromTitle(displayTitle);

  return {
    platform,
    title: displayTitle,
    region,
    serial,
    detailUrl: url,
    boxartUrl: boxartUrl(platform, displayTitle),
  };
}

// --------------- Main ----------------
async function main() {
  const { platform, out } = parseArgs(process.argv);

  console.log(`[libretro] Crawling platform: ${platform}`);
  const detailHrefs = await crawlIndex(platform);
  console.log(`[libretro] Found ${detailHrefs.length} detail pages`);

  const outRecords = [];
  let i = 0;
  for (const href of detailHrefs) {
    i++;
    try {
      const rec = await scrapeDetail(platform, href);
      outRecords.push(rec);
      if (i % 25 === 0) console.log(`  … ${i}/${detailHrefs.length}`);
    } catch (e) {
      console.warn(`  ! Failed on ${href}: ${e.message}`);
    }
    await sleep(DEFAULT_DELAY_MS);
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const outPath = out ? out : path.join(OUTPUT_DIR, `${platform}.json`);
  await fs.writeFile(outPath, JSON.stringify(outRecords, null, 2), "utf8");
  console.log(`[libretro] Wrote ${outRecords.length} records → ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
