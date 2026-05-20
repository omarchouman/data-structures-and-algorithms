import { SearchStep } from "@/lib/types";
import { SEARCH_ARRAY, SEARCH_TARGET } from "./linearSearch";

export function generateBinarySearchSteps(arr: number[], target: number): SearchStep[] {
  const steps: SearchStep[] = [];
  let lo = 0, hi = arr.length - 1;
  const eliminated: number[] = [];

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    steps.push({ array: arr, target, current: null, low: lo, high: hi, mid, found: null, eliminated: [...eliminated] });

    if (arr[mid] === target) {
      steps.push({ array: arr, target, current: null, low: lo, high: hi, mid: null, found: mid, eliminated: [...eliminated] });
      return steps;
    } else if (arr[mid] < target) {
      for (let i = lo; i <= mid; i++) eliminated.push(i);
      lo = mid + 1;
    } else {
      for (let i = mid; i <= hi; i++) eliminated.push(i);
      hi = mid - 1;
    }
  }

  steps.push({ array: arr, target, current: null, low: null, high: null, mid: null, found: -1, eliminated: arr.map((_, i) => i) });
  return steps;
}

export { SEARCH_ARRAY, SEARCH_TARGET };
