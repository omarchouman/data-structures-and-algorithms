"use client";
import { TrieStep, TrieNodeData } from "@/lib/types";
import { DEFAULT_NODE_COLOR, EDGE_STROKE } from "@/lib/treeColors";

interface Props { step: TrieStep; }

export function TrieVisualizer({ step }: Props) {
  const { nodes, path, action, label } = step;
  if (nodes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-400 text-sm">Empty Trie</p>
        <p className="text-sm text-slate-500 h-5">{label}</p>
      </div>
    );
  }

  const nodeMap = new Map<number, TrieNodeData>(nodes.map(n => [n.id, n]));

  const getCircleColor = (id: number) => {
    if (path.includes(id)) {
      if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
      if (action === "search") return { fill: "#facc15", stroke: "#ca8a04", text: "#1e293b" };
    }
    const node = nodeMap.get(id)!;
    if (node.isEnd) return { fill: "#a78bfa", stroke: "#7c3aed", text: "#fff" };
    return DEFAULT_NODE_COLOR;
  };

  const maxY = Math.max(...nodes.map(n => n.y), 30);

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="500" height={maxY + 40} className="overflow-visible">
        {nodes.map(node =>
          node.children.map(childId => {
            const child = nodeMap.get(childId);
            if (!child) return null;
            return (
              <line
                key={`${node.id}-${childId}`}
                x1={node.x} y1={node.y}
                x2={child.x} y2={child.y}
                stroke={EDGE_STROKE} strokeWidth={2}
              />
            );
          })
        )}
        {nodes.map(node => {
          const { fill, stroke, text } = getCircleColor(node.id);
          return (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={18} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
              <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill={text}>
                {node.char || "·"}
              </text>
              {node.isEnd && (
                <circle cx={node.x + 13} cy={node.y - 13} r={5} fill="#7c3aed" />
              )}
            </g>
          );
        })}
      </svg>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full inline-block bg-violet-400"></span> word end</span>
      </div>
      <p className="text-sm text-slate-500 h-5 text-center">{label}</p>
    </div>
  );
}
