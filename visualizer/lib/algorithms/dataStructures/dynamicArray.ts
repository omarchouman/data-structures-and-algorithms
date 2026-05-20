import { DynamicArrayStep } from "@/lib/types";

const VALUES = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

export function generateDynamicArraySteps(): DynamicArrayStep[] {
  const steps: DynamicArrayStep[] = [];
  let capacity = 2;
  let items: (string | null)[] = Array(capacity).fill(null);
  let size = 0;

  steps.push({ items: [...items], capacity, size, action: "idle", highlight: null });

  for (const val of VALUES) {
    if (size === capacity) {
      // Resize: double capacity
      const old = items;
      capacity *= 2;
      items = Array(capacity).fill(null);
      for (let i = 0; i < old.length; i++) items[i] = old[i];
      steps.push({ items: [...items], capacity, size, action: "resize", highlight: null });
    }
    items[size] = val;
    steps.push({ items: [...items], capacity, size, action: "append", highlight: size });
    size++;
    steps.push({ items: [...items], capacity, size, action: "idle", highlight: null });
  }
  return steps;
}
