import { SortStep } from "@/lib/types";

export function generateBubbleSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const n = arr.length;
  const sorted: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let swappedAny = false;
    for (let j = 0; j < n - i - 1; j++) {
      steps.push({ array: [...arr], comparing: [j, j + 1], swapped: null, sorted: [...sorted] });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ array: [...arr], comparing: null, swapped: [j, j + 1], sorted: [...sorted] });
        swappedAny = true;
      }
    }
    sorted.unshift(n - 1 - i);
    if (!swappedAny) break;
  }

  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
