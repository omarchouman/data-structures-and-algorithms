"use client";
import { AVLStep } from "@/lib/types";
import { DEFAULT_NODE_COLOR } from "@/lib/treeColors";
import { TreeSVG } from "./TreeSVG";

interface Props { step: AVLStep; }

function getNodeColor(id: number, highlight: number | null, action: AVLStep["action"]) {
  if (id === highlight) {
    if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
    if (action === "rotate") return { fill: "#f97316", stroke: "#ea580c", text: "#fff" };
  }
  return DEFAULT_NODE_COLOR;
}

export function AVLVisualizer({ step }: Props) {
  const { nodes, highlight, action, label } = step;
  if (nodes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p className="text-slate-400 text-sm">Empty tree</p>
        <p className="text-sm text-slate-500 h-5">{label}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center gap-3">
      <TreeSVG
        nodes={nodes}
        getColor={(id) => getNodeColor(id, highlight, action)}
        nodeText={(n) => n.value}
        nodeExtra={(n) => (
          <text x={n.x} y={n.y - 28} textAnchor="middle" fontSize={9} fill="#94a3b8">
            h={n.height}
          </text>
        )}
      />
      <p className="text-sm text-slate-500 h-5 text-center">{label}</p>
    </div>
  );
}
