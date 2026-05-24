"use client";
import { ReactNode } from "react";
import { EDGE_STROKE } from "@/lib/treeColors";

interface BinaryNode {
  id: number;
  x: number;
  y: number;
  left: number | null;
  right: number | null;
}

interface Props<N extends BinaryNode> {
  nodes: N[];
  height?: number;
  getColor: (id: number) => { fill: string; stroke: string; text: string };
  nodeText: (node: N) => ReactNode;
  nodeExtra?: (node: N) => ReactNode;
}

export function TreeSVG<N extends BinaryNode>({
  nodes,
  height = 340,
  getColor,
  nodeText,
  nodeExtra,
}: Props<N>) {
  const nodeMap = new Map<number, N>(nodes.map(n => [n.id, n]));

  const drawEdge = (parentId: number, childId: number | null) => {
    if (childId === null) return null;
    const parent = nodeMap.get(parentId)!;
    const child = nodeMap.get(childId);
    if (!child) return null;
    return (
      <line
        key={`${parentId}-${childId}`}
        x1={parent.x} y1={parent.y}
        x2={child.x} y2={child.y}
        stroke={EDGE_STROKE} strokeWidth={2}
      />
    );
  };

  return (
    <svg width="500" height={height} className="overflow-visible">
      {nodes.map(n => [drawEdge(n.id, n.left), drawEdge(n.id, n.right)])}
      {nodes.map(node => {
        const { fill, stroke, text } = getColor(node.id);
        return (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={20} fill={fill} stroke={stroke} strokeWidth={2} className="transition-all duration-200" />
            <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={600} fill={text}>
              {nodeText(node)}
            </text>
            {nodeExtra?.(node)}
          </g>
        );
      })}
    </svg>
  );
}
