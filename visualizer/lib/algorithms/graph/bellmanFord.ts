import { WeightedGraphStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES, INF } from "./weightedGraph";

export function generateBellmanFordSteps(start: string): WeightedGraphStep[] {
  const steps: WeightedGraphStep[] = [];
  const dist: Record<string, number> = {};
  for (const n of WEIGHTED_NODES) dist[n] = INF;
  dist[start] = 0;

  const visited: string[] = [start];

  for (let i = 0; i < WEIGHTED_NODES.length - 1; i++) {
    for (const [u, v, w] of WEIGHTED_EDGES) {
      for (const [src, dst] of [[u, v], [v, u]]) {
        steps.push({ visited: [...visited], current: src, distances: { ...dist }, mstEdges: [], relaxedEdge: null, consideredEdge: [src, dst] });
        if (dist[src] !== INF && dist[src] + w < dist[dst]) {
          dist[dst] = dist[src] + w;
          if (!visited.includes(dst)) visited.push(dst);
          steps.push({ visited: [...visited], current: src, distances: { ...dist }, mstEdges: [], relaxedEdge: [src, dst], consideredEdge: null });
        }
      }
    }
  }
  return steps;
}
