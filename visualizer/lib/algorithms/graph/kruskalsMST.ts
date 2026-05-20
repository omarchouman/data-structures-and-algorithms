import { WeightedGraphStep } from "@/lib/types";
import { WEIGHTED_NODES, WEIGHTED_EDGES } from "./weightedGraph";

function makeUF(nodes: string[]) {
  const parent: Record<string, string> = {};
  const rank: Record<string, number> = {};
  for (const n of nodes) { parent[n] = n; rank[n] = 0; }

  function find(x: string): string {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }
  function union(x: string, y: string): boolean {
    const rx = find(x), ry = find(y);
    if (rx === ry) return false;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return true;
  }
  return { find, union };
}

export function generateKruskalsSteps(): WeightedGraphStep[] {
  const steps: WeightedGraphStep[] = [];
  const sorted = [...WEIGHTED_EDGES].sort((a, b) => a[2] - b[2]);
  const uf = makeUF(WEIGHTED_NODES);
  const mstEdges: [string, string][] = [];
  const visited = new Set<string>();

  for (const [u, v] of sorted) {
    steps.push({ visited: [...visited], current: null, distances: {}, mstEdges: [...mstEdges], relaxedEdge: null, consideredEdge: [u, v] });
    if (uf.union(u, v)) {
      mstEdges.push([u, v]);
      visited.add(u);
      visited.add(v);
      steps.push({ visited: [...visited], current: null, distances: {}, mstEdges: [...mstEdges], relaxedEdge: [u, v], consideredEdge: null });
    }
  }
  return steps;
}
