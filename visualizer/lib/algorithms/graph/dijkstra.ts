import { WeightedGraphStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES, INF, buildAdjacency } from "./weightedGraph";

export function generateDijkstraSteps(start: string): WeightedGraphStep[] {
  const steps: WeightedGraphStep[] = [];
  const adj = buildAdjacency(WEIGHTED_NODES, WEIGHTED_EDGES);
  const dist: Record<string, number> = {};
  const visited: string[] = [];

  for (const n of WEIGHTED_NODES) dist[n] = INF;
  dist[start] = 0;

  const unvisited = new Set(WEIGHTED_NODES);

  while (unvisited.size > 0) {
    const current = [...unvisited].reduce((a, b) => dist[a] < dist[b] ? a : b);
    if (dist[current] === INF) break;

    unvisited.delete(current);
    visited.push(current);
    steps.push({ visited: [...visited], current, distances: { ...dist }, mstEdges: [], relaxedEdge: null, consideredEdge: null });

    for (const [neighbor, weight] of adj[current]) {
      if (!unvisited.has(neighbor)) continue;
      steps.push({ visited: [...visited], current, distances: { ...dist }, mstEdges: [], relaxedEdge: null, consideredEdge: [current, neighbor] });
      if (dist[current] + weight < dist[neighbor]) {
        dist[neighbor] = dist[current] + weight;
        steps.push({ visited: [...visited], current, distances: { ...dist }, mstEdges: [], relaxedEdge: [current, neighbor], consideredEdge: null });
      }
    }
  }
  return steps;
}

export { WEIGHTED_NODES, WEIGHTED_EDGES };
