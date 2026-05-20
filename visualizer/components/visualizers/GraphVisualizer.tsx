"use client";
import { GraphStep } from "@/lib/types";

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  A: { x: 100, y: 80 },
  B: { x: 260, y: 80 },
  C: { x: 100, y: 210 },
  D: { x: 390, y: 80 },
  E: { x: 260, y: 210 },
  F: { x: 390, y: 210 },
};

const EDGES: [string, string][] = [
  ["A", "B"], ["A", "C"], ["B", "D"], ["B", "E"], ["C", "E"], ["E", "F"],
];

interface Props {
  step: GraphStep;
}

export function GraphVisualizer({ step }: Props) {
  const { visited, frontier, current } = step;

  const getNodeFill = (id: string): string => {
    if (id === current) return "#f97316";
    if (visited.includes(id)) return "#22c55e";
    if (frontier.includes(id)) return "#eab308";
    return "#94a3b8";
  };

  return (
    <svg viewBox="0 0 490 290" className="w-full max-w-lg">
      {EDGES.map(([a, b]) => {
        const pa = NODE_POSITIONS[a];
        const pb = NODE_POSITIONS[b];
        return (
          <line
            key={`${a}-${b}`}
            x1={pa.x} y1={pa.y}
            x2={pb.x} y2={pb.y}
            stroke="#cbd5e1"
            strokeWidth={2}
          />
        );
      })}
      {Object.entries(NODE_POSITIONS).map(([id, { x, y }]) => (
        <g key={id}>
          <circle cx={x} cy={y} r={26} fill={getNodeFill(id)} />
          <text
            x={x} y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="white"
            fontSize={15}
            fontWeight="bold"
          >
            {id}
          </text>
        </g>
      ))}
    </svg>
  );
}
