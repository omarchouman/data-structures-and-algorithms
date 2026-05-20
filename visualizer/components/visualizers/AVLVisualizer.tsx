"use client";
import { AVLStep, AVLTreeNode } from "@/lib/types";

interface Props { step: AVLStep; }

function getNodeColor(id: number, highlight: number | null, action: AVLStep["action"]) {
  if (id === highlight) {
    if (action === "insert") return { fill: "#4ade80", stroke: "#16a34a", text: "#fff" };
    if (action === "rotate") return { fill: "#f97316", stroke: "#ea580c", text: "#fff" };
  }
  return { fill: "#e2e8f0", stroke: "#94a3b8", text: "#475569" };
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

  const nodeMap = new Map<number, AVLTreeNode>(nodes.map(n => [n.id, n]));

  return (
    <div className="flex flex-col items-center gap-3">
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
          const { fill, stroke, text } = getNodeColor(node.id, highlight, action);
          return (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={20} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
              <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill={text}>
                {node.value}
              </text>
              <text x={node.x} y={node.y - 28} textAnchor="middle" fontSize={9} fill="#94a3b8">
                h={node.height}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-sm text-slate-500 h-5 text-center">{label}</p>
    </div>
  );
}
