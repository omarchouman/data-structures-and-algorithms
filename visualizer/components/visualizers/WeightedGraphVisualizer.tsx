"use client";
import { WeightedGraphStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES } from "@/lib/algorithms/graph/weightedGraph";

const NODE_POS: Record<string, { x: number; y: number }> = {
  A: { x: 80,  y: 80  },
  B: { x: 240, y: 80  },
  C: { x: 80,  y: 210 },
  D: { x: 240, y: 210 },
  E: { x: 390, y: 80  },
  F: { x: 390, y: 210 },
};

const INF_LABEL = "∞";

interface Props {
  step: WeightedGraphStep;
  showDistances?: boolean;
  showMST?: boolean;
}

export function WeightedGraphVisualizer({ step, showDistances = false, showMST = false }: Props) {
  const { visited, current, distances, mstEdges, relaxedEdge, consideredEdge } = step;

  const isMSTEdge = (a: string, b: string) =>
    mstEdges.some(([u, v]) => (u === a && v === b) || (u === b && v === a));

  const isConsidered = (a: string, b: string) =>
    (consideredEdge && consideredEdge[0] === a && consideredEdge[1] === b) ||
    (consideredEdge && consideredEdge[0] === b && consideredEdge[1] === a);

  const isRelaxed = (a: string, b: string) =>
    (relaxedEdge && relaxedEdge[0] === a && relaxedEdge[1] === b) ||
    (relaxedEdge && relaxedEdge[0] === b && relaxedEdge[1] === a);

  const edgeColor = (a: string, b: string) => {
    if (isRelaxed(a, b)) return "#22c55e";
    if (isConsidered(a, b)) return "#eab308";
    if (showMST && isMSTEdge(a, b)) return "#3b82f6";
    return "#cbd5e1";
  };

  const edgeWidth = (a: string, b: string) => {
    if (isRelaxed(a, b) || isConsidered(a, b) || (showMST && isMSTEdge(a, b))) return 3;
    return 1.5;
  };

  const nodeFill = (id: string) => {
    if (id === current) return "#f97316";
    if (visited.includes(id)) return "#22c55e";
    return "#94a3b8";
  };

  return (
    <svg viewBox="0 0 490 290" className="w-full max-w-lg">
      {WEIGHTED_EDGES.map(([a, b, w]) => {
        const pa = NODE_POS[a], pb = NODE_POS[b];
        const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2;
        return (
          <g key={`${a}-${b}`}>
            <line x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={edgeColor(a, b)} strokeWidth={edgeWidth(a, b)} />
            <text x={mx} y={my - 6} textAnchor="middle" fontSize={11} fill="#64748b">{w}</text>
          </g>
        );
      })}
      {WEIGHTED_NODES.map((id) => {
        const { x, y } = NODE_POS[id];
        const d = distances[id];
        const label = d === undefined || d === Infinity ? INF_LABEL : d;
        return (
          <g key={id}>
            <circle cx={x} cy={y} r={24} fill={nodeFill(id)} />
            <text x={x} y={y - 4} textAnchor="middle" dominantBaseline="central" fill="white" fontSize={14} fontWeight="bold">{id}</text>
            {showDistances && (
              <text x={x} y={y + 14} textAnchor="middle" fill="white" fontSize={10}>{label}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
