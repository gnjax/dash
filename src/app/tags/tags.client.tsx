'use client';

import { useEffect, useMemo, useState } from 'react';

type TagNode = {
  placementId: string;
  tagId: string;
  name: string;
  description: string | null;
  parentPlacementId: string | null;
  children: TagNode[];
};

type TreePayload = {
  tree: TagNode[];
  parentCounts: Record<string, number>; // number of placements per tagId
  tags: Array<{ id: string; name: string; description: string | null }>;
};

async function fetchTreePayload(): Promise<TreePayload> {
  const res = await fetch('/api/tags?format=tree', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load tags');
  return res.json();
}

async function apiCreate(payload: { name: string; description?: string; parentPlacementId?: string | null }) {
  const res = await fetch('/api/tags', { method: 'POST', body: JSON.stringify(payload) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Create failed');
  return data.placement as { id: string; tagId: string; parentPlacementId: string | null };
}
async function apiDeletePlacement(placementId: string) {
  const res = await fetch('/api/tags', { method: 'DELETE', body: JSON.stringify({ placementId }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Delete failed');
  return data as { ok: true; deletedPlacement: boolean; deletedTag: boolean };
}
async function apiPatchTag(payload: { tagId: string; name?: string; description?: string }) {
  const res = await fetch('/api/tags', { method: 'PATCH', body: JSON.stringify(payload) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Update failed');
  return data.tag as { id: string; name: string; description: string | null };
}

export default function TagsClient() {
  const [tree, setTree] = useState<TagNode[] | null>(null);
  const [parentCounts, setParentCounts] = useState<Record<string, number>>({});
  const [nameIndex, setNameIndex] = useState<Map<string, string>>(new Map()); // lower(name) -> tagId
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPlacementId, setSelectedPlacementId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!tree || !selectedPlacementId) return null;
    const stack = [...tree];
    while (stack.length) {
      const n = stack.pop()!;
      if (n.placementId === selectedPlacementId) return n;
      stack.push(...n.children);
    }
    return null;
  }, [tree, selectedPlacementId]);

  // helpers
  function idsInTree(nodes: TagNode[]): Set<string> {
    const s = new Set<string>();
    const st = [...nodes];
    while (st.length) {
      const n = st.pop()!;
      s.add(n.placementId);
      for (const c of n.children) st.push(c);
    }
    return s;
  }
  function findPath(nodes: TagNode[], targetPid: string): string[] | null {
    const stack: Array<{ node: TagNode; path: string[] }> = nodes.map(n => ({ node: n, path: [n.placementId] }));
    while (stack.length) {
      const { node, path } = stack.pop()!;
      if (node.placementId === targetPid) return path;
      for (const c of node.children) stack.push({ node: c, path: [...path, c.placementId] });
    }
    return null;
  }

  async function load(opts?: { preserveExpanded?: boolean; ensureExpandedPids?: string[]; selectPid?: string | null }) {
    setLoading(true);
    setErr(null);
    try {
      const payload = await fetchTreePayload();
      setTree(payload.tree);
      setParentCounts(payload.parentCounts || {});

      const idx = new Map<string, string>();
      for (const t of payload.tags || []) idx.set(t.name.toLowerCase(), t.id);
      setNameIndex(idx);

      const next: Record<string, boolean> = {};
      const existing = idsInTree(payload.tree);

      if (opts?.preserveExpanded) {
        for (const pid of Object.keys(expanded)) if (expanded[pid] && existing.has(pid)) next[pid] = true;
      } else {
        for (const r of payload.tree) next[r.placementId] = true; // expand roots initially
      }

      if (opts?.ensureExpandedPids) {
        for (const pid of opts.ensureExpandedPids) {
          const path = pid ? findPath(payload.tree, pid) : null;
          if (path) for (const anc of path.slice(0, -1)) next[anc] = true;
        }
      }

      setExpanded(next);

      if (opts?.selectPid !== undefined) {
        setSelectedPlacementId(opts.selectPid);
      } else if (selectedPlacementId && existing.has(selectedPlacementId)) {
        setSelectedPlacementId(selectedPlacementId);
      } else {
        setSelectedPlacementId(null);
      }
    } catch (e: any) {
      setErr(e.message || 'Load failed');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load({ preserveExpanded: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Top + : create root placement (new tag or existing by name warning)
  const addRoot = async () => {
    const raw = prompt('New root tag name:');
    const name = (raw || '').trim();
    if (!name) return;

    // If a tag already exists with this name, we still create a placement at root (link).
    try {
      const placement = await apiCreate({ name, parentPlacementId: null });
      await load({ preserveExpanded: true, ensureExpandedPids: [placement.id], selectPid: placement.id });
    } catch (e: any) {
      alert(e.message || 'Create failed');
    }
  };

  // + on a node: link existing by name or create new tag + placement — scoped to this branch
  const addChild = async (parent: TagNode) => {
    const raw = prompt(`Add under “${parent.name}”:\nEnter tag name (links if it already exists):`);
    const name = (raw || '').trim();
    if (!name) return;

    try {
      const placement = await apiCreate({ name, parentPlacementId: parent.placementId });
      await load({ preserveExpanded: true, ensureExpandedPids: [parent.placementId, placement.id], selectPid: placement.id });
    } catch (e: any) {
      alert(e.message || 'Add failed');
    }
  };

  // Delete placement. If it was the last placement of that tag and it's unused, server deletes the tag as well.
  const deleteNode = async (node: TagNode) => {
    const placementsForTag = parentCounts[node.tagId] ?? 0;
    const msg = placementsForTag > 1
      ? `Unlink “${node.name}” from this branch?`
      : `Delete “${node.name}” entirely? (It is not used elsewhere)`;
    if (!confirm(msg)) return;

    try {
      await apiDeletePlacement(node.placementId);
      const anchor = node.parentPlacementId ?? null;
      await load({ preserveExpanded: true, ensureExpandedPids: anchor ? [anchor] : [], selectPid: anchor });
    } catch (e: any) {
      alert(e.message || 'Delete failed');
    }
  };

  const saveDetails = async (payload: { name?: string; description?: string | null }) => {
    if (!selected) return;
    try {
      await apiPatchTag({ tagId: selected.tagId, ...payload });
      await load({ preserveExpanded: true, ensureExpandedPids: [selected.placementId], selectPid: selected.placementId });
    } catch (e: any) {
      alert(e.message || 'Save failed');
    }
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="card p-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-400 flex-1">
            Add with <span className="font-medium">+</span> (links by name or creates new), delete removes this placement. Actions appear on row hover.
          </div>
          <button onClick={addRoot} className="btn btn-outline" title="Create root tag">+</button>
        </div>
      </div>

      {err && <div className="card p-3 mb-5 text-red-300">{err}</div>}
      {loading && <div className="card p-6 mb-5 text-gray-300">Loading…</div>}

      {!loading && tree && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Tree */}
          <div className="lg:col-span-2 card p-3">
            {tree.length === 0 ? (
              <div className="p-6 text-center text-gray-400">No tags yet. Use the + button to create your first root tag.</div>
            ) : (
              <ul className="space-y-1">
                {tree.map(n => (
                  <TreeNode
                    key={n.placementId}
                    node={n}
                    parentCounts={parentCounts}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    selectedPlacementId={selectedPlacementId}
                    setSelectedPlacementId={setSelectedPlacementId}
                    onAddChild={addChild}
                    onDelete={deleteNode}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* Details */}
          <div className="card p-3">
            <h2 className="text-sm font-semibold mb-3">Details</h2>
            {!selected ? (
              <div className="text-gray-400">Select a tag to view/edit.</div>
            ) : (
              <DetailsForm
                key={selected.placementId}
                node={selected}
                onSave={saveDetails}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function TreeNode(props: {
  node: TagNode;
  parentCounts: Record<string, number>;
  expanded: Record<string, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  selectedPlacementId: string | null;
  setSelectedPlacementId: (pid: string) => void;
  onAddChild: (node: TagNode) => void;
  onDelete: (node: TagNode) => void;
}) {
  const { node, parentCounts, expanded, setExpanded, selectedPlacementId } = props;
  const isOpen = !!expanded[node.placementId];
  const hasChildren = node.children.length > 0;
  const isLinked = (parentCounts[node.tagId] ?? 0) > 1;

  return (
    <li>
      <div
        className={[
          'relative flex items-center gap-2 px-2 py-1 rounded-lg group/row',
          selectedPlacementId === node.placementId ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5',
        ].join(' ')}
      >
        <button
          onClick={() => hasChildren && setExpanded(e => ({ ...e, [node.placementId]: !isOpen }))}
          className={[
            'h-6 w-6 grid place-items-center rounded-md border',
            hasChildren ? 'opacity-100' : 'opacity-40',
          ].join(' ')}
          style={{ borderColor: 'var(--color-border)' }}
          title={hasChildren ? (isOpen ? 'Collapse' : 'Expand') : 'No children'}
        >
          {hasChildren ? (isOpen ? '–' : '+') : '•'}
        </button>

        <button onClick={() => props.setSelectedPlacementId(node.placementId)} className="flex-1 text-left">
          <div className="font-medium flex items-center gap-1">
            <span>{node.name}</span>
            {isLinked && <span title="Tag appears in multiple branches">🔗</span>}
          </div>
          {node.description && <div className="text-xs text-gray-400">{node.description}</div>}
        </button>

        {/* Row-only hover actions */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden gap-1 group-hover/row:flex">
          <button onClick={() => props.onAddChild(node)} className="btn btn-outline text-xs" title="Add child">+</button>
          <button onClick={() => props.onDelete(node)} className="btn btn-outline text-xs" title="Delete placement">🗑️</button>
        </div>
      </div>

      {hasChildren && isOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          {node.children.map(c => (
            <TreeNode
              key={c.placementId}
              node={c}
              parentCounts={parentCounts}
              expanded={expanded}
              setExpanded={setExpanded}
              selectedPlacementId={selectedPlacementId}
              setSelectedPlacementId={props.setSelectedPlacementId}
              onAddChild={props.onAddChild}
              onDelete={props.onDelete}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function DetailsForm(props: {
  node: TagNode;
  onSave: (payload: { name?: string; description?: string | null }) => Promise<void>;
}) {
  const [name, setName] = useState(props.node.name);
  const [description, setDescription] = useState(props.node.description ?? '');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    setName(props.node.name);
    setDescription(props.node.description ?? '');
  }, [props.node.tagId, props.node.name, props.node.description]);

  const save = async () => {
    setSaving(true);
    setMsg(null);
    try {
      await props.onSave({ name, description: description || null });
      setMsg('Saved.');
    } catch (e: any) {
      setMsg(e.message || 'Save failed');
    } finally {
      setSaving(false);
      setTimeout(() => setMsg(null), 1500);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs text-gray-400">Name</label>
        <input className="field mt-1 w-full" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-xs text-gray-400">Description</label>
        <textarea className="field mt-1 w-full min-h-[96px]" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={save} disabled={saving} className="btn btn-outline disabled:opacity-50">
          {saving ? 'Saving…' : 'Save changes'}
        </button>
        {msg && <span className="text-sm text-gray-400">{msg}</span>}
      </div>
      <div className="text-xs text-gray-500">
        Tag ID: <span className="font-mono">{props.node.tagId}</span> · Placement ID: <span className="font-mono">{props.node.placementId}</span>
      </div>
    </div>
  );
}
