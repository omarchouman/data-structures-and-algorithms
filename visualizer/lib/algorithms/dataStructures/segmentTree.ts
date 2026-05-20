import { SegmentTreeStep } from "@/lib/types";

const ARRAY = [1, 3, 5, 7, 9, 11];

function buildTree(arr: number[]): number[] {
  const n = arr.length;
  const tree = Array(4 * n).fill(0);
  function build(node: number, start: number, end: number) {
    if (start === end) { tree[node] = arr[start]; return; }
    const mid = Math.floor((start + end) / 2);
    build(2 * node, start, mid);
    build(2 * node + 1, mid + 1, end);
    tree[node] = tree[2 * node] + tree[2 * node + 1];
  }
  build(1, 0, n - 1);
  return tree;
}

export function generateSegmentTreeSteps(): SegmentTreeStep[] {
  const steps: SegmentTreeStep[] = [];
  const n = ARRAY.length;
  const tree = buildTree(ARRAY);

  steps.push({ array: [...ARRAY], tree: [...tree], action: "build", highlight: [1], queryRange: null, label: "Segment tree built for sum queries" });

  // Query [1, 4]
  const qL = 1, qR = 4;
  function query(node: number, start: number, end: number, l: number, r: number, highlights: number[]): number {
    highlights.push(node);
    steps.push({ array: [...ARRAY], tree: [...tree], action: "query", highlight: [...highlights], queryRange: [l, r], label: `Query sum[${l}..${r}]: checking node ${node} [${start}..${end}]` });
    if (r < start || end < l) return 0;
    if (l <= start && end <= r) return tree[node];
    const mid = Math.floor((start + end) / 2);
    return query(2 * node, start, mid, l, r, [...highlights]) + query(2 * node + 1, mid + 1, end, l, r, [...highlights]);
  }

  const result = query(1, 0, n - 1, qL, qR, []);
  steps.push({ array: [...ARRAY], tree: [...tree], action: "query", highlight: [], queryRange: [qL, qR], label: `sum[${qL}..${qR}] = ${result}` });

  // Update index 2 to value 10
  const updateIdx = 2, newVal = 10;
  const arr2 = [...ARRAY]; arr2[updateIdx] = newVal;
  function update(node: number, start: number, end: number, idx: number, val: number, highlights: number[]) {
    highlights.push(node);
    steps.push({ array: [...arr2], tree: [...tree], action: "update", highlight: [...highlights], queryRange: null, label: `Update arr[${idx}]=${val}: updating node ${node} [${start}..${end}]` });
    if (start === end) { tree[node] = val; return; }
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) update(2 * node, start, mid, idx, val, [...highlights]);
    else update(2 * node + 1, mid + 1, end, idx, val, [...highlights]);
    tree[node] = tree[2 * node] + tree[2 * node + 1];
  }

  update(1, 0, n - 1, updateIdx, newVal, []);
  steps.push({ array: [...arr2], tree: [...tree], action: "idle", highlight: [], queryRange: null, label: `arr[${updateIdx}] updated to ${newVal}` });

  return steps;
}
