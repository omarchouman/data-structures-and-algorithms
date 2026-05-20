import { SortStep } from "@/lib/types";

export function generateInsertionSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i;
    const sortedSoFar = Array.from({ length: i }, (_, k) => k);
    while (j > 0) {
      steps.push({ array: [...arr], comparing: [j - 1, j], swapped: null, sorted: sortedSoFar });
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        steps.push({ array: [...arr], comparing: null, swapped: [j - 1, j], sorted: sortedSoFar });
        j--;
      } else {
        break;
      }
    }
  }

  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
