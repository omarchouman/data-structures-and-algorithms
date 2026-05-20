import { SortStep } from "@/lib/types";

export function generateSelectionSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const n = arr.length;
  const sorted: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      steps.push({ array: [...arr], comparing: [minIdx, j], swapped: null, sorted: [...sorted] });
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({ array: [...arr], comparing: null, swapped: [i, minIdx], sorted: [...sorted] });
    }
    sorted.push(i);
  }
  sorted.push(n - 1);
  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
