"use client";
import { UnionFindStep } from "@/lib/types";

interface Props { step: UnionFindStep; }

export function UnionFindVisualizer({ step }: Props) {
  const { parent, rank, highlight, action, label } = step;
  const n = parent.length;

  const getColor = (i: number) => {
    if (highlight.includes(i)) {
      if (action === "union") return "bg-green-400 border-green-500 text-white";
      if (action === "find") return "bg-yellow-400 border-yellow-500 text-slate-900";
    }
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  // Group nodes by root
  const findRoot = (x: number): number => {
    while (parent[x] !== x) x = parent[x];
    return x;
  };

  const components = new Map<number, number[]>();
  for (let i = 0; i < n; i++) {
    const root = findRoot(i);
    if (!components.has(root)) components.set(root, []);
    components.get(root)!.push(i);
  }

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Nodes with parent arrows */}
      <div className="flex gap-3 items-end">
        {Array.from({ length: n }, (_, i) => {
          const isRoot = parent[i] === i;
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-12 h-12 flex items-center justify-center border-2 rounded-lg font-semibold text-sm transition-all duration-200 ${getColor(i)}`}>
                {i}
              </div>
              <div className="text-xs text-slate-400">
                {isRoot ? <span className="text-purple-500 font-semibold">root</span> : `→${parent[i]}`}
              </div>
              <div className="text-xs text-slate-400">r={rank[i]}</div>
            </div>
          );
        })}
      </div>

      {/* Component groups */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from(components.entries()).map(([root, members]) => (
          <div key={root} className="border border-slate-200 rounded-lg px-3 py-1 text-sm text-slate-600 bg-slate-50">
            {`{${members.join(", ")}}`}
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500 h-5 text-center">{label}</p>
    </div>
  );
}
