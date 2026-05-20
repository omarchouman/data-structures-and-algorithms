import { WeightedGraphStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES, INF, buildAdjacency } from "./weightedGraph";

export function generatePrimsSteps(start: string): WeightedGraphStep[] {
  const steps: WeightedGraphStep[] = [];
  const adj = buildAdjacency(WEIGHTED_NODES, WEIGHTED_EDGES);
  const inMST = new Set<string>();
  const mstEdges: [string, string][] = [];
  const key: Record<string, number> = {};
  const parent: Record<string, string | null> = {};

  for (const n of WEIGHTED_NODES) { key[n] = INF; parent[n] = null; }
  key[start] = 0;

  const remaining = new Set(WEIGHTED_NODES);

  while (remaining.size > 0) {
    const u = [...remaining].reduce((a, b) => key[a] < key[b] ? a : b);
    if (key[u] === INF) break;

    remaining.delete(u);
    inMST.add(u);
    if (parent[u]) mstEdges.push([parent[u]!, u]);
    steps.push({ visited: [...inMST], current: u, distances: { ...key }, mstEdges: [...mstEdges], relaxedEdge: null, consideredEdge: null });

    for (const [v, w] of adj[u]) {
      if (!remaining.has(v)) continue;
      steps.push({ visited: [...inMST], current: u, distances: { ...key }, mstEdges: [...mstEdges], relaxedEdge: null, consideredEdge: [u, v] });
      if (w < key[v]) {
        key[v] = w;
        parent[v] = u;
        steps.push({ visited: [...inMST], current: u, distances: { ...key }, mstEdges: [...mstEdges], relaxedEdge: [u, v], consideredEdge: null });
      }
    }
  }
  return steps;
}
