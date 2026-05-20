"use client";
import { SegmentTreeStep } from "@/lib/types";

interface Props { step: SegmentTreeStep; }

function nodeDepth(i: number) { return Math.floor(Math.log2(i)); }
function nodeX(i: number, totalDepth: number) {
  const depth = nodeDepth(i);
  const posInLevel = i - Math.pow(2, depth);
  const levelWidth = Math.pow(2, depth);
  return (500 / (levelWidth + 1)) * (posInLevel + 1);
}
function nodeY(i: number) { return 30 + nodeDepth(i) * 60; }

export function SegmentTreeVisualizer({ step }: Props) {
  const { array, tree, highlight, queryRange, action, label } = step;
  const n = array.length;

  // Only show filled nodes (index 1..2n-1 for a 1-indexed tree)
  const maxNode = tree.reduce((max, val, i) => val !== 0 ? i : max, 0);
  const visibleNodes: number[] = [];
  for (let i = 1; i <= maxNode; i++) {
    if (tree[i] !== undefined) visibleNodes.push(i);
  }

  const getColor = (i: number) => {
    if (highlight.includes(i)) {
      if (action === "query") return { fill: "#facc15", stroke: "#ca8a04", text: "#1e293b" };
      if (action === "update") return { fill: "#f97316", stroke: "#ea580c", text: "#fff" };
      if (action === "build") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
    }
    return { fill: "#e2e8f0", stroke: "#94a3b8", text: "#475569" };
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Input array */}
      <div className="flex gap-1">
        {array.map((val, i) => {
          const inQuery = queryRange && i >= queryRange[0] && i <= queryRange[1];
          return (
            <div key={i} className={`w-10 h-10 flex items-center justify-center border-2 rounded font-semibold text-sm ${inQuery ? "bg-yellow-200 border-yellow-400 text-yellow-800" : "bg-slate-100 border-slate-300 text-slate-600"}`}>
              {val}
            </div>
          );
        })}
      </div>
      {queryRange && (
        <p className="text-xs text-yellow-600 font-semibold">Query range: [{queryRange[0]}..{queryRange[1]}]</p>
      )}

      {/* Tree */}
      <svg width="500" height={30 + nodeDepth(maxNode) * 60 + 50} className="overflow-visible">
        {visibleNodes.map(i => {
          const left = 2 * i, right = 2 * i + 1;
          return [
            tree[left] !== undefined && visibleNodes.includes(left) ? (
              <line key={`l${i}`} x1={nodeX(i, 0)} y1={nodeY(i)} x2={nodeX(left, 0)} y2={nodeY(left)} stroke="#cbd5e1" strokeWidth={2} />
            ) : null,
            tree[right] !== undefined && visibleNodes.includes(right) ? (
              <line key={`r${i}`} x1={nodeX(i, 0)} y1={nodeY(i)} x2={nodeX(right, 0)} y2={nodeY(right)} stroke="#cbd5e1" strokeWidth={2} />
            ) : null,
          ];
        })}
        {visibleNodes.map(i => {
          const { fill, stroke, text } = getColor(i);
          return (
            <g key={i}>
              <circle cx={nodeX(i, 0)} cy={nodeY(i)} r={20} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
              <text x={nodeX(i, 0)} y={nodeY(i)} textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={600} fill={text}>
                {tree[i]}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="text-sm text-slate-500 h-5 text-center">{label}</p>
    </div>
  );
}
