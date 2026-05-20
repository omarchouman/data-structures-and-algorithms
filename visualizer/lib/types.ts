export type SortStep = {
  array: number[];
  comparing: [number, number] | null;
  swapped: [number, number] | null;
  sorted: number[];
};

export type GraphStep = {
  visited: string[];
  frontier: string[];
  current: string;
};

export type StackStep = {
  items: string[];
  action: "push" | "pop" | "idle";
  highlight: number | null;
};

export type QueueStep = {
  items: string[];
  action: "enqueue" | "dequeue" | "idle";
  highlight: number | null;
};

export type SearchStep = {
  array: number[];
  target: number;
  current: number | null;
  low: number | null;
  high: number | null;
  mid: number | null;
  found: number | null;
  eliminated: number[];
};

export type WeightedGraphStep = {
  visited: string[];
  current: string | null;
  distances: Record<string, number>;
  mstEdges: [string, string][];
  relaxedEdge: [string, string] | null;
  consideredEdge: [string, string] | null;
};

export type FloydWarshallStep = {
  dist: number[][];
  nodes: string[];
  k: number;
  i: number;
  j: number;
  updated: boolean;
};

export type FibStep = {
  table: (number | null)[];
  current: number;
  label: string;
};

export type KnapsackStep = {
  table: number[][];
  currentItem: number;
  currentWeight: number;
  items: { weight: number; value: number; name: string }[];
};

export type LCSStep = {
  s1: string;
  s2: string;
  table: number[][];
  i: number;
  j: number;
};

export type LISStep = {
  array: number[];
  dp: number[];
  current: number;
  comparing: number | null;
};

export type CoinChangeStep = {
  coins: number[];
  table: (number | null)[];
  current: number;
  usingCoin: number | null;
};

export type LinkedListStep = {
  nodes: { id: number; value: string }[];
  action: "prepend" | "append" | "delete" | "search" | "idle";
  highlight: number | null;
};

export type DynamicArrayStep = {
  items: (string | null)[];
  capacity: number;
  size: number;
  action: "append" | "resize" | "idle";
  highlight: number | null;
};

export type DequeStep = {
  items: string[];
  action: "pushFront" | "pushRear" | "popFront" | "popRear" | "idle";
  frontHighlight: boolean;
  rearHighlight: boolean;
};

export type HashTableStep = {
  buckets: string[][];
  action: "put" | "get" | "delete" | "idle";
  activeBucket: number | null;
  activeItem: number | null;
  activeKey: string | null;
};

export type TreeNode = {
  id: number;
  value: number;
  left: number | null;
  right: number | null;
  x: number;
  y: number;
};

export type BSTStep = {
  nodes: TreeNode[];
  action: "insert" | "search" | "idle";
  highlight: number | null;
  path: number[];
};

export type AVLTreeNode = {
  id: number;
  value: number;
  left: number | null;
  right: number | null;
  height: number;
  x: number;
  y: number;
};

export type AVLStep = {
  nodes: AVLTreeNode[];
  action: "insert" | "rotate" | "idle";
  highlight: number | null;
  label: string;
};

export type HeapStep = {
  array: number[];
  action: "insert" | "extract" | "heapify" | "idle";
  highlight: number | null;
  comparing: [number, number] | null;
  sorted: number[];
};

export type TrieNodeData = {
  id: number;
  char: string;
  isEnd: boolean;
  children: number[];
  x: number;
  y: number;
};

export type TrieStep = {
  nodes: TrieNodeData[];
  action: "insert" | "search" | "idle";
  path: number[];
  label: string;
};

export type UnionFindStep = {
  parent: number[];
  rank: number[];
  action: "union" | "find" | "idle";
  highlight: number[];
  label: string;
};

export type SegmentTreeStep = {
  array: number[];
  tree: number[];
  action: "build" | "query" | "update" | "idle";
  highlight: number[];
  queryRange: [number, number] | null;
  label: string;
};

export type KMPStep = {
  text: string;
  pattern: string;
  textIndex: number;
  patternIndex: number;
  matches: number[];
  lps: number[];
  phase: "build-lps" | "search";
};

export type RabinKarpStep = {
  text: string;
  pattern: string;
  windowStart: number;
  matches: number[];
  isHashMatch: boolean;
  isVerified: boolean;
};
