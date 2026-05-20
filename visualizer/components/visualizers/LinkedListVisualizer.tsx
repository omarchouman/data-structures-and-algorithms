"use client";
import { LinkedListStep } from "@/lib/types";

interface Props { step: LinkedListStep; }

export function LinkedListVisualizer({ step }: Props) {
  const { nodes, action, highlight } = step;

  const getColor = (id: number) => {
    if (id !== highlight) return "bg-slate-200 border-slate-300 text-slate-700";
    if (action === "append" || action === "prepend") return "bg-green-400 border-green-500 text-white";
    if (action === "delete") return "bg-red-400 border-red-500 text-white";
    if (action === "search") return "bg-yellow-400 border-yellow-500 text-slate-900";
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
        {nodes.length === 0 ? "Empty list" : `${nodes.length} node${nodes.length > 1 ? "s" : ""}`}
      </p>
      <div className="flex items-center flex-wrap gap-0">
        {nodes.length === 0 && <p className="text-slate-400 text-sm">null</p>}
        {nodes.map((node, i) => (
          <div key={node.id} className="flex items-center">
            <div className={`w-14 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-200 ${getColor(node.id)}`}>
              {node.value}
            </div>
            {i < nodes.length - 1 ? (
              <span className="text-slate-400 text-lg px-1">→</span>
            ) : (
              <span className="text-slate-300 text-sm px-1">→ null</span>
            )}
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 h-5 capitalize">
        {action !== "idle" && <span className="font-medium">{action}</span>}
      </p>
    </div>
  );
}
