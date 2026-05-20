import { SortStep } from "@/lib/types";

export function generateQuickSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const sorted: number[] = [];

  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      steps.push({ array: [...arr], comparing: [j, high], swapped: null, sorted: [...sorted] });
      if (arr[j] <= pivot) {
        i++;
        if (i !== j) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          steps.push({ array: [...arr], comparing: null, swapped: [i, j], sorted: [...sorted] });
        }
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push({ array: [...arr], comparing: null, swapped: [i + 1, high], sorted: [...sorted] });
    return i + 1;
  }

  function quickSort(low: number, high: number) {
    if (low >= high) return;
    const pi = partition(low, high);
    sorted.push(pi);
    quickSort(low, pi - 1);
    quickSort(pi + 1, high);
  }

  quickSort(0, arr.length - 1);
  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
