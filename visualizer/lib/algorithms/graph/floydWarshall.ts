import { FloydWarshallStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES, INF } from "./weightedGraph";

export function generateFloydWarshallSteps(): FloydWarshallStep[] {
  const steps: FloydWarshallStep[] = [];
  const n = WEIGHTED_NODES.length;
  const idx: Record<string, number> = {};
  WEIGHTED_NODES.forEach((node, i) => { idx[node] = i; });

  const dist: number[][] = Array.from({ length: n }, () => Array(n).fill(INF));
  for (let i = 0; i < n; i++) dist[i][i] = 0;
  for (const [u, v, w] of WEIGHTED_EDGES) {
    dist[idx[u]][idx[v]] = w;
    dist[idx[v]][idx[u]] = w;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const newDist = dist[i][k] + dist[k][j];
        const updated = newDist < dist[i][j];
        steps.push({ dist: dist.map(r => [...r]), nodes: WEIGHTED_NODES, k, i, j, updated });
        if (updated) dist[i][j] = newDist;
      }
    }
  }
  return steps;
}
