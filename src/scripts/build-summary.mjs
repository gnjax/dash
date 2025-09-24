// scripts/build-summary.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import url from 'node:url';

const repoRoot = process.cwd();
const OUT_FILE = (process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : 'docs/codebase-summary.md');

const WATCH = process.argv.includes('--watch');

// allow-list of file extensions we’ll include in the summary
const TEXT_EXTS = new Set([
  // code
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.css', '.scss', '.sass',
  '.html', '.htm',
  '.json', '.md', '.mdx',
  '.yml', '.yaml', '.toml', '.ini', '.conf',
  '.sql', '.prisma',
  '.sh', '.bash', '.zsh',
  '.py', '.rb', '.go', '.rs', '.kt', '.java',
  '.m', '.mm', '.swift',
  '.txt',
  // project config
  '.env.example', '.gitignore', '.gitattributes', '.editorconfig',
  '.tsconfig', '.eslintrc', '.prettierrc', '.npmrc',
]);

// soft size cap (skip huge text files)
const MAX_FILE_BYTES = 512 * 1024; // 512 KB

function languageFromExt(p) {
  const ext = path.extname(p).toLowerCase();
  switch (ext) {
    case '.ts': return 'ts';
    case '.tsx': return 'tsx';
    case '.js': case '.mjs': case '.cjs': return 'js';
    case '.jsx': return 'jsx';
    case '.css': return 'css';
    case '.scss': case '.sass': return 'scss';
    case '.html': case '.htm': return 'html';
    case '.json': return 'json';
    case '.yml': case '.yaml': return 'yaml';
    case '.toml': return 'toml';
    case '.sql': return 'sql';
    case '.prisma': return 'prisma';
    case '.md': case '.mdx': return 'md';
    case '.sh': case '.bash': case '.zsh': return 'bash';
    case '.py': return 'python';
    case '.rb': return 'ruby';
    case '.go': return 'go';
    case '.rs': return 'rust';
    case '.kt': return 'kotlin';
    case '.java': return 'java';
    case '.swift': return 'swift';
    default: return ''; // plain fence
  }
}

function getGitFiles() {
  // includes tracked + staged + untracked (but not ignored) files
  const out = execSync('git ls-files --cached --others --exclude-standard -z', { cwd: repoRoot });
  return out.toString('utf8').split('\0').filter(Boolean);
}

function getRepoMeta() {
  let commit = '';
  let when = '';
  let origin = '';
  try { commit = execSync('git rev-parse HEAD', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  try { when = execSync('git show -s --format=%ci HEAD', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  try { origin = execSync('git config --get remote.origin.url', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  return { commit, when, origin };
}

function isTextFile(p) {
  const ext = path.extname(p).toLowerCase();
  if (!TEXT_EXTS.has(ext)) return false;
  try {
    const st = fs.statSync(path.join(repoRoot, p));
    if (st.size > MAX_FILE_BYTES) return false;
    return true;
  } catch {
    return false;
  }
}

function buildOnce() {
  const files = getGitFiles().filter(isTextFile);

  const { commit, when, origin } = getRepoMeta();
  const header =
`# Codebase Summary

> Generated: ${new Date().toISOString()}
> Commit: ${commit || 'n/a'}
> Date: ${when || 'n/a'}
> Remote: ${origin || 'n/a'}

This file concatenates important text/code files in the repo so a single raw URL can be shared.

---

`;

  let out = header;

  for (const rel of files.sort()) {
    const abs = path.join(repoRoot, rel);
    let content = '';
    try {
      content = fs.readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    const lang = languageFromExt(rel);
    out += `\n---\n\n## ${rel}\n\n\`\`\`${lang}\n${content.replace(/\`\`\`/g, '```')}\n\`\`\`\n`;
  }

  const outAbs = path.join(repoRoot, OUT_FILE);
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });
  fs.writeFileSync(outAbs, out, 'utf8');

  const relOut = path.relative(repoRoot, outAbs);
  console.log(`[summary] Wrote ${relOut} (${files.length} files)`);
}

async function main() {
  if (!WATCH) {
    buildOnce();
    return;
  }

  // Watch mode (uses chokidar if available; else falls back to periodic rebuild)
  try {
    const chokidar = (await import('chokidar')).default;
    const watcher = chokidar.watch(['**/*'], {
      ignored: [
        '**/.git/**',
        '**/node_modules/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/.turbo/**',
        '**/.vercel/**',
        '**/.idea/**',
        '**/.vscode/**',
        OUT_FILE,
      ],
      ignoreInitial: true,
    });

    let timer = null;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(buildOnce, 200);
    };

    buildOnce();
    watcher.on('add', schedule).on('change', schedule).on('unlink', schedule);
    console.log('[summary] Watching for changes… (Ctrl+C to stop)');
  } catch (e) {
    console.warn('[summary] chokidar not installed. Run: npm i -D chokidar');
    // fallback: rebuild once
    buildOnce();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
