import { spawn, ChildProcessWithoutNullStreams } from 'node:child_process';

type Source = 'buyee' | 'zenmarket' | 'fromjapan';

type ProcMap = Map<Source, ChildProcessWithoutNullStreams>;
declare global {
  // eslint-disable-next-line no-var
  var __refreshProcs__: ProcMap | undefined;
}
const procs: ProcMap = globalThis.__refreshProcs__ ?? new Map<Source, ChildProcessWithoutNullStreams>();
globalThis.__refreshProcs__ = procs;

const SCRIPT_BY_SOURCE: Record<Source, string> = {
  buyee:     'src/scripts/save-buyee-auth.ts',
  zenmarket: 'src/scripts/save-zenmarket-auth.ts',
  fromjapan: 'src/scripts/save-fromjapan-auth.ts',
};

function norm(src: string): Source {
  const s = src.toLowerCase() as Source;
  if (s !== 'buyee' && s !== 'zenmarket' && s !== 'fromjapan') throw new Error('invalid_source');
  return s;
}

export function getRunning(source: string) {
  return procs.get(norm(source));
}

export function startRefresh(source: string) {
  const s = norm(source);
  const prev = procs.get(s);
  if (prev && !prev.killed) {
    try { prev.kill('SIGTERM'); } catch {}
  }

  const script = SCRIPT_BY_SOURCE[s];
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

  const child = spawn(cmd, ['tsx', script], {
    cwd: process.cwd(),
    env: { ...process.env, FORCE_COLOR: '1' },
    stdio: ['pipe', 'pipe', 'pipe'],
    shell: true,
  });

  procs.set(s, child);

  // Optional: helpful logs in server console
  child.stdout.on('data', d => process.stdout.write(`[auth:${s}] ${d}`));
  child.stderr.on('data', d => process.stderr.write(`[auth:${s}:ERR] ${d}`));

  const cleanup = () => { if (procs.get(s) === child) procs.delete(s); };
  child.on('exit', cleanup);
  child.on('close', cleanup);

  return { pid: child.pid ?? 0 };
}

export async function confirmRefresh(source: string) {
  const s = norm(source);
  const p = procs.get(s);
  if (!p) return { ok: false, error: 'no_process' };
  try { p.stdin.write('\n'); } catch {}
  const code: number = await new Promise((resolve) => {
    const done = (c: number | null) => resolve(c ?? 0);
    p.once('exit', done);
    p.once('close', done);
  });
  return { ok: code === 0, code };
}

export function abortRefresh(source: string) {
  const s = norm(source);
  const p = procs.get(s);
  if (!p) return { ok: false };
  try { p.kill('SIGTERM'); } catch {}
  procs.delete(s);
  return { ok: true };
}
