"use client";
import { BSTStep } from "@/lib/types";
import { DEFAULT_NODE_COLOR } from "@/lib/treeColors";
import { TreeSVG } from "./TreeSVG";

interface Props { step: BSTStep; }

function getNodeColor(id: number, highlight: number | null, path: number[], action: BSTStep["action"]) {
  if (id === highlight) {
    if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
    if (action === "search") return { fill: "#facc15", stroke: "#ca8a04", text: "#1e293b" };
  }
  if (path.includes(id)) return { fill: "#93c5fd", stroke: "#3b82f6", text: "#1e293b" };
  return DEFAULT_NODE_COLOR;
}

export function BSTVisualizer({ step }: Props) {
  const { nodes, highlight, path, action } = step;
  if (nodes.length === 0) return <p className="text-slate-400 text-sm">Empty tree</p>;
  return (
    <TreeSVG
      nodes={nodes}
      getColor={(id) => getNodeColor(id, highlight, path, action)}
      nodeText={(n) => n.value}
    />
  );
}
