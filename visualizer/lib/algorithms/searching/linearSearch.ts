import { SearchStep } from "@/lib/types";

export const SEARCH_ARRAY = [3, 7, 10, 15, 22, 27, 33, 38, 43, 51, 56, 64, 67, 71, 82];
export const SEARCH_TARGET = 33;

export function generateLinearSearchSteps(arr: number[], target: number): SearchStep[] {
  const steps: SearchStep[] = [];

  for (let i = 0; i < arr.length; i++) {
    steps.push({ array: arr, target, current: i, low: null, high: null, mid: null, found: null, eliminated: Array.from({ length: i }, (_, k) => k) });
    if (arr[i] === target) {
      steps.push({ array: arr, target, current: null, low: null, high: null, mid: null, found: i, eliminated: [] });
      return steps;
    }
  }

  steps.push({ array: arr, target, current: null, low: null, high: null, mid: null, found: -1, eliminated: arr.map((_, i) => i) });
  return steps;
}
