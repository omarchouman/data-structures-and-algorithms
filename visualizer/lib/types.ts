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
