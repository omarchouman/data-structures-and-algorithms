import { SortStep } from "@/lib/types";

export function generateHeapSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const n = arr.length;
  const sorted: number[] = [];

  function heapify(size: number, i: number) {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    if (l < size) {
      steps.push({ array: [...arr], comparing: [largest, l], swapped: null, sorted: [...sorted] });
      if (arr[l] > arr[largest]) largest = l;
    }
    if (r < size) {
      steps.push({ array: [...arr], comparing: [largest, r], swapped: null, sorted: [...sorted] });
      if (arr[r] > arr[largest]) largest = r;
    }
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      steps.push({ array: [...arr], comparing: null, swapped: [i, largest], sorted: [...sorted] });
      heapify(size, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    sorted.unshift(i);
    steps.push({ array: [...arr], comparing: null, swapped: [0, i], sorted: [...sorted] });
    heapify(i, 0);
  }

  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
