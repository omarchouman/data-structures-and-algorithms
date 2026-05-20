import { UnionFindStep } from "@/lib/types";

const N = 8;
type Op = { type: "union"; a: number; b: number } | { type: "find"; node: number };

const OPS: Op[] = [
  { type: "union", a: 0, b: 1 },
  { type: "union", a: 2, b: 3 },
  { type: "union", a: 4, b: 5 },
  { type: "union", a: 1, b: 2 },
  { type: "find",  node: 3 },
  { type: "union", a: 6, b: 7 },
  { type: "union", a: 5, b: 6 },
  { type: "find",  node: 7 },
];

export function generateUnionFindSteps(): UnionFindStep[] {
  const steps: UnionFindStep[] = [];
  const parent = Array.from({ length: N }, (_, i) => i);
  const rank = Array(N).fill(0);

  steps.push({ parent: [...parent], rank: [...rank], action: "idle", highlight: [], label: "Initial: each node is its own set" });

  function find(x: number, path: number[]): number {
    path.push(x);
    if (parent[x] === x) return x;
    parent[x] = find(parent[x], path);
    return parent[x];
  }

  for (const op of OPS) {
    if (op.type === "union") {
      const pathA: number[] = [], pathB: number[] = [];
      const ra = find(op.a, pathA), rb = find(op.b, pathB);
      steps.push({ parent: [...parent], rank: [...rank], action: "union", highlight: [...pathA, ...pathB], label: `Union(${op.a}, ${op.b}): roots are ${ra} and ${rb}` });
      if (ra !== rb) {
        if (rank[ra] < rank[rb]) parent[ra] = rb;
        else if (rank[ra] > rank[rb]) parent[rb] = ra;
        else { parent[rb] = ra; rank[ra]++; }
        steps.push({ parent: [...parent], rank: [...rank], action: "union", highlight: [ra, rb], label: `Merged component of ${op.a} and ${op.b}` });
      }
    } else {
      const path: number[] = [];
      const root = find(op.node, path);
      steps.push({ parent: [...parent], rank: [...rank], action: "find", highlight: path, label: `Find(${op.node}): root = ${root} (path compression applied)` });
    }
  }
  return steps;
}
