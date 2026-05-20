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
