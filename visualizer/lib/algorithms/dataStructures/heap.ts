import { HeapStep } from "@/lib/types";

const INSERT_VALUES = [3, 1, 6, 5, 2, 4];

export function generateHeapSteps(): HeapStep[] {
  const steps: HeapStep[] = [];
  const arr: number[] = [];
  const sorted: number[] = [];

  steps.push({ array: [], action: "idle", highlight: null, comparing: null, sorted: [] });

  // Insert phase — build min-heap
  for (const val of INSERT_VALUES) {
    arr.push(val);
    let i = arr.length - 1;
    steps.push({ array: [...arr], action: "insert", highlight: i, comparing: null, sorted: [] });

    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      steps.push({ array: [...arr], action: "heapify", highlight: i, comparing: [i, parent], sorted: [] });
      if (arr[i] < arr[parent]) {
        [arr[i], arr[parent]] = [arr[parent], arr[i]];
        steps.push({ array: [...arr], action: "heapify", highlight: parent, comparing: [i, parent], sorted: [] });
        i = parent;
      } else break;
    }
    steps.push({ array: [...arr], action: "idle", highlight: null, comparing: null, sorted: [] });
  }

  // Extract phase
  while (arr.length > 1) {
    steps.push({ array: [...arr], action: "extract", highlight: 0, comparing: null, sorted: [...sorted] });
    sorted.unshift(arr[0]);
    arr[0] = arr.pop()!;
    let i = 0;
    steps.push({ array: [...arr], action: "heapify", highlight: 0, comparing: null, sorted: [...sorted] });

    while (true) {
      const l = 2 * i + 1, r = 2 * i + 2;
      let smallest = i;
      if (l < arr.length && arr[l] < arr[smallest]) smallest = l;
      if (r < arr.length && arr[r] < arr[smallest]) smallest = r;
      if (smallest === i) break;
      steps.push({ array: [...arr], action: "heapify", highlight: i, comparing: [i, smallest], sorted: [...sorted] });
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      i = smallest;
    }
  }
  sorted.unshift(arr[0]);
  steps.push({ array: [], action: "idle", highlight: null, comparing: null, sorted: [...sorted] });
  return steps;
}
