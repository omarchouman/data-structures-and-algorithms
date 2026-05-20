import { SortStep } from "@/lib/types";

export function generateRadixSortSteps(input: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...input];
  const max = Math.max(...arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
      steps.push({ array: [...arr], comparing: [i, i], swapped: null, sorted: [] });
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      count[digit]--;
    }

    for (let i = 0; i < arr.length; i++) {
      arr[i] = output[i];
      steps.push({ array: [...arr], comparing: null, swapped: [i, i], sorted: [] });
    }
  }

  steps.push({ array: [...arr], comparing: null, swapped: null, sorted: arr.map((_, i) => i) });
  return steps;
}
