"use client";
import { BSTStep, TreeNode } from "@/lib/types";

interface Props { step: BSTStep; }

function getNodeColor(id: number, highlight: number | null, path: number[], action: BSTStep["action"]) {
  if (id === highlight) {
    if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
    if (action === "search") return { fill: "#facc15", stroke: "#ca8a04", text: "#1e293b" };
  }
  if (path.includes(id)) return { fill: "#93c5fd", stroke: "#3b82f6", text: "#1e293b" };
  return { fill: "#e2e8f0", stroke: "#94a3b8", text: "#475569" };
}

export function BSTVisualizer({ step }: Props) {
  const { nodes, highlight, path, action } = step;
  if (nodes.length === 0) {
    return <p className="text-slate-400 text-sm">Empty tree</p>;
  }

  const nodeMap = new Map<number, TreeNode>(nodes.map(n => [n.id, n]));

  return (
    <svg width="500" height="340" className="overflow-visible">
      {nodes.map(node => {
        const drawEdge = (childId: number | null) => {
          if (childId === null) return null;
          const child = nodeMap.get(childId);
          if (!child) return null;
          return (
            <line
              key={`${node.id}-${childId}`}
              x1={node.x} y1={node.y}
              x2={child.x} y2={child.y}
              stroke="#cbd5e1" strokeWidth={2}
            />
          );
        };
        return [drawEdge(node.left), drawEdge(node.right)];
      })}
      {nodes.map(node => {
        const { fill, stroke, text } = getNodeColor(node.id, highlight, path, action);
        return (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={20} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
            <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill={text}>
              {node.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
