"use client";
import { HeapStep } from "@/lib/types";

interface Props { step: HeapStep; }

function treeX(i: number, total: number): number {
  const depth = Math.floor(Math.log2(i + 1));
  const posInLevel = i - (Math.pow(2, depth) - 1);
  const levelWidth = Math.pow(2, depth);
  return (500 / (levelWidth + 1)) * (posInLevel + 1);
}

function treeY(i: number): number {
  return 30 + Math.floor(Math.log2(i + 1)) * 60;
}

export function HeapVisualizer({ step }: Props) {
  const { array, highlight, comparing, sorted, action } = step;

  const getArrayColor = (i: number) => {
    if (comparing && comparing.includes(i as 0 | 1)) return "bg-yellow-400 border-yellow-500 text-slate-900";
    if (i === highlight) {
      if (action === "insert") return "bg-green-400 border-green-500 text-white";
      if (action === "extract") return "bg-red-400 border-red-500 text-white";
      if (action === "heapify") return "bg-blue-400 border-blue-500 text-white";
    }
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  const getCircleColor = (i: number) => {
    if (comparing && comparing.includes(i as 0 | 1)) return { fill: "#facc15", stroke: "#ca8a04", text: "#1e293b" };
    if (i === highlight) {
      if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
      if (action === "extract") return { fill: "#f87171", stroke: "#dc2626", text: "#fff" };
      if (action === "heapify") return { fill: "#60a5fa", stroke: "#2563eb", text: "#fff" };
    }
    return { fill: "#e2e8f0", stroke: "#94a3b8", text: "#475569" };
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Tree view */}
      {array.length > 0 && (
        <svg width="500" height={30 + Math.floor(Math.log2(array.length)) * 60 + 40} className="overflow-visible">
          {array.map((_, i) => {
            const parent = Math.floor((i - 1) / 2);
            if (i === 0) return null;
            return (
              <line
                key={`e${i}`}
                x1={treeX(parent, array.length)} y1={treeY(parent)}
                x2={treeX(i, array.length)} y2={treeY(i)}
                stroke="#cbd5e1" strokeWidth={2}
              />
            );
          })}
          {array.map((val, i) => {
            const { fill, stroke, text } = getCircleColor(i);
            return (
              <g key={i}>
                <circle cx={treeX(i, array.length)} cy={treeY(i)} r={20} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
                <text x={treeX(i, array.length)} y={treeY(i)} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill={text}>
                  {val}
                </text>
              </g>
            );
          })}
        </svg>
      )}

      {/* Array view */}
      <div className="flex gap-1">
        {array.map((val, i) => (
          <div key={i} className={`w-10 h-10 flex items-center justify-center border-2 rounded font-semibold text-sm transition-all duration-200 ${getArrayColor(i)}`}>
            {val}
          </div>
        ))}
      </div>

      {/* Sorted output */}
      {sorted.length > 0 && (
        <div className="flex gap-1 items-center">
          <span className="text-xs text-slate-400 mr-1">Extracted:</span>
          {sorted.map((val, i) => (
            <div key={i} className="w-10 h-10 flex items-center justify-center border-2 rounded font-semibold text-sm bg-purple-200 border-purple-300 text-purple-800">
              {val}
            </div>
          ))}
        </div>
      )}

      <p className="text-sm text-slate-500 h-5 capitalize">
        {action !== "idle" && <span className="font-medium">{action}</span>}
      </p>
    </div>
  );
}
