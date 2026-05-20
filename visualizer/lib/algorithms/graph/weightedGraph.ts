export const WEIGHTED_NODES = ["A", "B", "C", "D", "E", "F"];

export const WEIGHTED_EDGES: [string, string, number][] = [
  ["A", "B", 4], ["A", "C", 2],
  ["B", "C", 1], ["B", "D", 5],
  ["C", "D", 8], ["C", "E", 10],
  ["D", "E", 2], ["D", "F", 6],
  ["E", "F", 3],
];

export const INF = Infinity;

export function buildAdjacency(nodes: string[], edges: [string, string, number][]) {
  const adj: Record<string, [string, number][]> = {};
  for (const n of nodes) adj[n] = [];
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  }
  return adj;
}
