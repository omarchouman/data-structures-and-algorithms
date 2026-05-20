import { BSTStep, TreeNode } from "@/lib/types";

function layout(nodes: TreeNode[], id: number | null, depth: number, xMin: number, xMax: number) {
  if (id === null) return;
  const node = nodes.find(n => n.id === id)!;
  node.x = (xMin + xMax) / 2;
  node.y = 40 + depth * 70;
  layout(nodes, node.left, depth + 1, xMin, (xMin + xMax) / 2);
  layout(nodes, node.right, depth + 1, (xMin + xMax) / 2, xMax);
}

export function generateBSTSteps(): BSTStep[] {
  const steps: BSTStep[] = [];
  const values = [5, 3, 7, 1, 4, 6, 8, 2];
  const nodes: TreeNode[] = [];
  let nextId = 0;
  let root: number | null = null;

  function insert(val: number): number[] {
    const path: number[] = [];
    const newNode: TreeNode = { id: nextId++, value: val, left: null, right: null, x: 0, y: 0 };
    nodes.push(newNode);

    if (root === null) { root = newNode.id; layout(nodes, root, 0, 0, 500); return [newNode.id]; }

    let cur: number | null = root;
    while (cur !== null) {
      path.push(cur);
      const n = nodes.find(n => n.id === cur)!;
      if (val < n.value) {
        if (n.left === null) { n.left = newNode.id; break; }
        else cur = n.left;
      } else {
        if (n.right === null) { n.right = newNode.id; break; }
        else cur = n.right;
      }
    }
    path.push(newNode.id);
    layout(nodes, root, 0, 0, 500);
    return path;
  }

  steps.push({ nodes: [], action: "idle", highlight: null, path: [] });

  for (const val of values) {
    const path = insert(val);
    for (let i = 0; i < path.length; i++) {
      steps.push({ nodes: nodes.map(n => ({ ...n })), action: "insert", highlight: path[i], path: path.slice(0, i + 1) });
    }
    steps.push({ nodes: nodes.map(n => ({ ...n })), action: "idle", highlight: null, path: [] });
  }

  // Search demo
  const target = 4;
  let cur: number | null = root;
  const searchPath: number[] = [];
  while (cur !== null) {
    searchPath.push(cur);
    const n = nodes.find(n => n.id === cur)!;
    steps.push({ nodes: nodes.map(n => ({ ...n })), action: "search", highlight: cur, path: [...searchPath] });
    if (n.value === target) break;
    cur = target < n.value ? n.left : n.right;
  }

  return steps;
}
