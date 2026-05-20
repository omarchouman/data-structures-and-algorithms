import { KnapsackStep } from "@/lib/types";

const ITEMS = [
  { name: "Laptop", weight: 3, value: 4 },
  { name: "Phone",  weight: 1, value: 3 },
  { name: "Book",   weight: 2, value: 1 },
  { name: "Camera", weight: 4, value: 5 },
];
const CAPACITY = 6;

export function generateKnapsackSteps(): KnapsackStep[] {
  const steps: KnapsackStep[] = [];
  const n = ITEMS.length;
  const table: number[][] = Array.from({ length: n + 1 }, () => Array(CAPACITY + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = ITEMS[i - 1];
    for (let w = 0; w <= CAPACITY; w++) {
      steps.push({ table: table.map(r => [...r]), currentItem: i, currentWeight: w, items: ITEMS });
      if (weight <= w) {
        table[i][w] = Math.max(table[i - 1][w], table[i - 1][w - weight] + value);
      } else {
        table[i][w] = table[i - 1][w];
      }
      steps.push({ table: table.map(r => [...r]), currentItem: i, currentWeight: w, items: ITEMS });
    }
  }
  return steps;
}
