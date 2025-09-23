// src/components/SingleTagPicker.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type TagFlat = { id: string; name: string; description?: string | null };

// Normalized node shape for the tree
type TagNode = {
  tagId: string;               // ALWAYS the tag id
  name: string;
  description?: string | null;
  placementKey: string;        // unique per placement/path (for React keys)
  placementId?: string;        // TagPlacement.id if available
  children?: TagNode[];
};

export default function SingleTagPicker({
  value,
  onChange,
  allTags,
  disabled,
}: {
  value: string | null | undefined;
  onChange: (sel: { tagId: string | null; placementId: string | null }) => void;
  allTags?: TagFlat[]; // optional; will self-fetch if absent
  disabled?: boolean;
}) {
  const [q, setQ] = useState('');
  const [tree, setTree] = useState<TagNode[] | null>(null);
  const [loadingTree, setLoadingTree] = useState(false);
  const [showTree, setShowTree] = useState(false);                   // 👈 restored modal state
  const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // tree expand state

  // Local flat tags if parent didn't provide any
  const [localTags, setLocalTags] = useState<TagFlat[] | null>(null);
  const [loadingTags, setLoadingTags] = useState(false);

  // Remember exact branch chosen
  const [selectedPath, setSelectedPath] = useState<{ tagId: string; labels: string[] } | null>(null);

  // Suggestions dropdown
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Branch chooser for ambiguous picks (multiple placements)
  const [branchChoices, setBranchChoices] = useState<{
    tagId: string;
    options: { placementId: string | null; labels: string[] }[];
  } | null>(null);

  // Effective flat tags
  const effectiveTags: TagFlat[] = useMemo(() => {
    if (Array.isArray(allTags) && allTags.length) return allTags;
    return Array.isArray(localTags) ? localTags : [];
  }, [allTags, localTags]);

  // Fetch flat tags if not provided
  useEffect(() => {
    if (Array.isArray(allTags) && allTags.length) return;
    if (localTags !== null) return;
    (async () => {
      try {
        setLoadingTags(true);
        const r = await fetch('/api/tags?format=flat', { cache: 'no-store' });
        const j = await r.json();
        setLocalTags(Array.isArray(j.tags) ? j.tags : []);
      } catch {
        setLocalTags([]);
      } finally {
        setLoadingTags(false);
      }
    })();
  }, [allTags, localTags]);

  // Close suggestions on outside click
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!inputWrapRef.current) return;
      if (!inputWrapRef.current.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // If parent clears value, clear path memory
  useEffect(() => {
    if (!value) setSelectedPath(null);
  }, [value]);

  // Ensure we have the tree (optionally open modal immediately)
  async function ensureTree(openModal = false): Promise<TagNode[] | null> {
    if (tree) {
      if (openModal) setShowTree(true);
      return tree;
    }
    try {
      setLoadingTree(true);
      const res = await fetch('/api/tags?format=tree', { cache: 'no-store' });
      const j = await res.json();
      const raw = (j.tree || j.tags || []) as any[];
      const norm = normalizeTree(raw, 'root');
      setTree(norm);
      if (openModal) setShowTree(true);          // 👈 open modal after load
      return norm;
    } catch {
      return null;
    } finally {
      setLoadingTree(false);
    }
  }

  // Load tree silently when we already have a selected value (for path fallback)
  useEffect(() => {
    if (!value || tree || loadingTree) return;
    void ensureTree(false);
  }, [value, tree, loadingTree]);

  // Fallback path if selection came from outside OR no stored path for this tag
  const fallbackPath = useMemo(() => {
    if (!value || !tree) return null;
    if (selectedPath && selectedPath.tagId === value) return null;
    return findPathLabelsByTagId(tree, value);
  }, [value, tree, selectedPath]);

  const selectedObj = value ? effectiveTags.find(t => t.id === value) : undefined;
  const selectedName = useMemo(() => {
    if (selectedPath && selectedPath.tagId === value) {
      const labels = selectedPath.labels;
      return labels[labels.length - 1];
    }
    if (selectedObj) return selectedObj.name;
    if (fallbackPath?.length) return fallbackPath[fallbackPath.length - 1];
    return value ?? undefined;
  }, [selectedPath, value, selectedObj, fallbackPath]);

  // Suggestions list
  const suggestions = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [] as TagFlat[];
    return effectiveTags.filter(t => t.name.toLowerCase().includes(s)).slice(0, 20);
  }, [q, effectiveTags]);

  // Pick from suggestions
  async function pickFromSuggestions(tagId: string) {
    const t = await ensureTree(false);
    if (!t) {
      onChange({ tagId, placementId: null });
      setSelectedPath(null);
      setShowSuggestions(false);
      return;
    }
    const placements = collectPlacementsByTagId(t, tagId);
    if (placements.length <= 1) {
      const only = placements[0] ?? { placementId: null, labels: [selectedObj?.name ?? tagId] };
      onChange({ tagId, placementId: only.placementId });
      setSelectedPath({ tagId, labels: only.labels });
      setShowSuggestions(false);
    } else {
      setBranchChoices({ tagId, options: placements });
      setShowSuggestions(false);
    }
  }

  return (
    <div className="w-full">
      {/* Selected pill */}
      <div className="mb-2">
        {value ? (
          <span className="px-2 py-1 rounded bg-white/10 text-xs">
            {selectedName ?? value}
            {!disabled && (
              <button
                className="ml-2 opacity-70 hover:opacity-100"
                onClick={() => { onChange({ tagId: null, placementId: null }); setSelectedPath(null); }}
              >
                ×
              </button>
            )}
          </span>
        ) : (
          <span className="text-xs text-gray-400">No tag selected</span>
        )}
      </div>

      {/* Input + suggestions + browse */}
      <div className="flex gap-2">
        <div className="relative flex-1" ref={inputWrapRef}>
          <input
            className="field w-full"
            placeholder={loadingTags ? 'Loading tags…' : 'Type to search tags…'}
            value={q}
            onChange={e => { setQ(e.target.value); setShowSuggestions(true); }}
            onFocus={() => suggestions.length && setShowSuggestions(true)}
            disabled={disabled || loadingTags}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && suggestions.length > 0) {
                e.preventDefault();
                void pickFromSuggestions(suggestions[0].id);
              }
              if (e.key === 'Escape') setShowSuggestions(false);
            }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-white/10 bg-[#0b0f16] shadow-xl overflow-hidden">
              {suggestions.map((t) => (
                <button
                  key={t.id}
                  className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center justify-between"
                  onClick={() => void pickFromSuggestions(t.id)}
                  disabled={disabled}
                  title={t.description || ''}
                >
                  <span className="text-sm">{t.name}</span>
                  <span className="text-xs text-gray-400">select</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="btn btn-outline"
          onClick={() => void ensureTree(true)}         // 👈 open modal
          disabled={disabled || loadingTree}
          title="Browse full hierarchy"
        >
          {loadingTree ? 'Loading…' : 'Browse tree…'}
        </button>
      </div>

      {/* Selected tag full path */}
      <div className="mt-2 text-xs text-gray-300 min-h-[1.5rem]">
        {value ? (
          selectedPath && selectedPath.tagId === value ? (
            <span>Path: {selectedPath.labels.join(' › ')}</span>
          ) : tree ? (
            fallbackPath?.length ? (
              <span>Path: {fallbackPath.join(' › ')}</span>
            ) : (
              <span className="text-gray-500">This tag may exist in multiple branches. Use the tree to pick an exact branch.</span>
            )
          ) : (
            <span className="text-gray-500">Path will appear once the tree is loaded.</span>
          )
        ) : (
          <span className="text-gray-500">Pick a tag to see its full path.</span>
        )}
      </div>

      {/* Tree modal (restored) */}
      {showTree && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setShowTree(false)}>
          <div className="card w-full max-w-3xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Pick a tag</div>
              <button className="btn btn-outline text-xs" onClick={() => setShowTree(false)}>Close</button>
            </div>
            <div className="max-h-[65vh] overflow-auto">
              {tree ? (
                <Tree
                  nodes={tree}
                  expanded={expanded}
                  onToggle={(k) => setExpanded(e => ({ ...e, [k]: !e[k] }))}
                  onPick={(tagId, pathLabels, placementId) => {
                    setSelectedPath({ tagId, labels: pathLabels });
                    onChange({ tagId, placementId: placementId ?? null });
                    setShowTree(false);
                  }}
                  parentKey="root"
                  parentPathLabels={[]} // start empty
                  query={q} // reuse the input text to filter inside modal
                />
              ) : (
                <div className="text-sm text-gray-400">Loading…</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Branch chooser (if a tag has multiple placements) */}
      {branchChoices && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setBranchChoices(null)}>
          <div className="card w-full max-w-xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Choose branch</div>
              <button className="btn btn-outline text-xs" onClick={() => setBranchChoices(null)}>Close</button>
            </div>
            <div className="space-y-2 max-h-[60vh] overflow-auto">
              {branchChoices.options.map((opt, i) => (
                <button
                  key={`${opt.placementId ?? 'none'}#${i}`}
                  className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-md border border-white/10"
                  onClick={() => {
                    onChange({ tagId: branchChoices.tagId, placementId: opt.placementId });
                    setSelectedPath({ tagId: branchChoices.tagId, labels: opt.labels });
                    setBranchChoices(null);
                  }}
                >
                  {opt.labels.join(' › ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */

function normalizeTree(rawNodes: any[], parentKey: string): TagNode[] {
  return (rawNodes || []).map((node, idx) => {
    const tagId: string =
      node.tagId ??
      node.tag?.id ??
      node.tag_id ??
      node.tagID ??
      node.id; // fallback

    const name: string =
      node.name ??
      node.tag?.name ??
      node.title ??
      node.label ??
      '(untitled)';

    const description: string | null | undefined =
      node.description ?? node.tag?.description ?? null;

    const placementId: string | undefined = node.placementId ?? node.id;
    const placementKey: string = String(placementId ?? `${tagId}-${idx}`);

    const children = normalizeTree(node.children || [], `${parentKey}/${placementKey}`);

    return { tagId, name, description, placementKey, placementId, children };
  });
}

// Find first path to tagId (labels only) — fallback only
function findPathLabelsByTagId(nodes: TagNode[], tagId: string): string[] | null {
  for (const n of nodes) {
    if (n.tagId === tagId) return [n.name];
    if (n.children?.length) {
      const down = findPathLabelsByTagId(n.children, tagId);
      if (down) return [n.name, ...down];
    }
  }
  return null;
}

// Collect all placements (paths) for a tag id
function collectPlacementsByTagId(
  nodes: TagNode[],
  tagId: string,
  parentPath: string[] = []
): { placementId: string | null; labels: string[] }[] {
  const out: { placementId: string | null; labels: string[] }[] = [];
  for (const n of nodes) {
    const path = [...parentPath, n.name];
    if (n.tagId === tagId) {
      out.push({ placementId: n.placementId ?? null, labels: path });
    }
    if (n.children?.length) {
      out.push(...collectPlacementsByTagId(n.children, tagId, path));
    }
  }
  return out;
}

/* ---------- Tree (recursive) ---------- */

function Tree({
  nodes,
  expanded,
  onToggle,
  onPick,
  parentKey,
  parentPathLabels,
  query,
}: {
  nodes: TagNode[];
  expanded: Record<string, boolean>;
  onToggle: (nodeKey: string) => void;
  onPick: (tagId: string, pathLabels: string[], placementId?: string) => void;
  parentKey: string;
  parentPathLabels: string[];
  query: string; // filter inside modal
}) {
  const filteredNodes = useMemo(() => {
    const s = query.trim().toLowerCase();
    if (!s) return nodes;
    const match = (n: TagNode): boolean =>
      n.name.toLowerCase().includes(s) || (n.children?.some(match) ?? false);
    return nodes.filter(match);
  }, [nodes, query]);

  return (
    <ul className="space-y-1">
      {filteredNodes.map((n, idx) => {
        const nodeKey = `${parentKey}/${n.placementKey}#${idx}`; // unique key per placement path
        const hasKids = !!(n.children && n.children.length);
        const open = !!expanded[nodeKey];
        const pathLabels = [...parentPathLabels, n.name];

        return (
          <li key={nodeKey}>
            <div className="flex items-center gap-2">
              {hasKids ? (
                <button
                  className="h-6 w-6 grid place-items-center rounded-md border border-white/10"
                  onClick={() => onToggle(nodeKey)}
                  title={open ? 'Collapse' : 'Expand'}
                >
                  {open ? '▾' : '▸'}
                </button>
              ) : (
                <span className="h-6 w-6 grid place-items-center text-gray-500">•</span>
              )}
              <button
                className="btn btn-outline text-xs"
                onClick={() => onPick(n.tagId, pathLabels, n.placementId)}
                title={n.description || ''}
              >
                {n.name}
              </button>
            </div>

            {hasKids && open && (
              <div className="ml-6 mt-1">
                <Tree
                  nodes={n.children!}
                  expanded={expanded}
                  onToggle={onToggle}
                  onPick={onPick}
                  parentKey={nodeKey}
                  parentPathLabels={pathLabels}
                  query={query}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
