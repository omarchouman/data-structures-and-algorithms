import { AVLStep, AVLTreeNode } from "@/lib/types";

function height(nodes: AVLTreeNode[], id: number | null): number {
  if (id === null) return 0;
  return nodes.find(n => n.id === id)!.height;
}

function updateHeight(nodes: AVLTreeNode[], id: number) {
  const n = nodes.find(n => n.id === id)!;
  n.height = 1 + Math.max(height(nodes, n.left), height(nodes, n.right));
}

function bf(nodes: AVLTreeNode[], id: number) {
  const n = nodes.find(n => n.id === id)!;
  return height(nodes, n.left) - height(nodes, n.right);
}

function layout(nodes: AVLTreeNode[], id: number | null, depth: number, xMin: number, xMax: number) {
  if (id === null) return;
  const n = nodes.find(n => n.id === id)!;
  n.x = (xMin + xMax) / 2;
  n.y = 40 + depth * 70;
  layout(nodes, n.left, depth + 1, xMin, (xMin + xMax) / 2);
  layout(nodes, n.right, depth + 1, (xMin + xMax) / 2, xMax);
}

export function generateAVLSteps(): AVLStep[] {
  const steps: AVLStep[] = [];
  const nodes: AVLTreeNode[] = [];
  let nextId = 0;
  let root: number | null = null;

  function rotateRight(y: number): number {
    const yn = nodes.find(n => n.id === y)!;
    const x = yn.left!;
    const xn = nodes.find(n => n.id === x)!;
    yn.left = xn.right;
    xn.right = y;
    updateHeight(nodes, y);
    updateHeight(nodes, x);
    return x;
  }

  function rotateLeft(x: number): number {
    const xn = nodes.find(n => n.id === x)!;
    const y = xn.right!;
    const yn = nodes.find(n => n.id === y)!;
    xn.right = yn.left;
    yn.left = x;
    updateHeight(nodes, x);
    updateHeight(nodes, y);
    return y;
  }

  function insert(nodeId: number | null, val: number, steps: AVLStep[], push: (label: string, hl: number | null) => void): number {
    if (nodeId === null) {
      const n: AVLTreeNode = { id: nextId++, value: val, left: null, right: null, height: 1, x: 0, y: 0 };
      nodes.push(n);
      return n.id;
    }
    const n = nodes.find(n => n.id === nodeId)!;
    push(`Inserting ${val}, visiting ${n.value}`, nodeId);
    if (val < n.value) n.left = insert(n.left, val, steps, push);
    else n.right = insert(n.right, val, steps, push);

    updateHeight(nodes, nodeId);
    const b = bf(nodes, nodeId);

    const leftVal = n.left !== null ? nodes.find(nd => nd.id === n.left)?.value : null;
    const rightVal = n.right !== null ? nodes.find(nd => nd.id === n.right)?.value : null;

    if (b > 1 && leftVal !== null && val < leftVal!) {
      push(`Right rotation at ${n.value} (LL)`, nodeId);
      return rotateRight(nodeId);
    }
    if (b < -1 && rightVal !== null && val > rightVal!) {
      push(`Left rotation at ${n.value} (RR)`, nodeId);
      return rotateLeft(nodeId);
    }
    if (b > 1 && leftVal !== null && val > leftVal!) {
      push(`Left-Right rotation at ${n.value} (LR)`, nodeId);
      n.left = rotateLeft(n.left!);
      return rotateRight(nodeId);
    }
    if (b < -1 && rightVal !== null && val < rightVal!) {
      push(`Right-Left rotation at ${n.value} (RL)`, nodeId);
      n.right = rotateRight(n.right!);
      return rotateLeft(nodeId);
    }
    return nodeId;
  }

  const values = [10, 20, 30, 40, 50, 25];
  steps.push({ nodes: [], action: "idle", highlight: null, label: "Empty AVL Tree" });

  for (const val of values) {
    root = insert(root, val, steps, (label, hl) => {
      layout(nodes, root, 0, 0, 500);
      steps.push({ nodes: nodes.map(n => ({ ...n })), action: hl !== null ? "insert" : "rotate", highlight: hl, label });
    });
    layout(nodes, root, 0, 0, 500);
    steps.push({ nodes: nodes.map(n => ({ ...n })), action: "idle", highlight: null, label: `Inserted ${val}` });
  }

  return steps;
}
