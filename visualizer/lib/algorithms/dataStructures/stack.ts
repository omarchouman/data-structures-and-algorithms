import { StackStep } from "@/lib/types";

const OPERATIONS: Array<{ type: "push"; value: string } | { type: "pop" }> = [
  { type: "push", value: "A" },
  { type: "push", value: "B" },
  { type: "push", value: "C" },
  { type: "push", value: "D" },
  { type: "pop" },
  { type: "push", value: "E" },
  { type: "pop" },
  { type: "pop" },
  { type: "push", value: "F" },
  { type: "pop" },
];

export function generateStackSteps(): StackStep[] {
  const steps: StackStep[] = [];
  const stack: string[] = [];

  steps.push({ items: [], action: "idle", highlight: null });

  for (const op of OPERATIONS) {
    if (op.type === "push") {
      stack.push(op.value);
      steps.push({ items: [...stack], action: "push", highlight: stack.length - 1 });
    } else {
      if (stack.length === 0) continue;
      steps.push({ items: [...stack], action: "pop", highlight: stack.length - 1 });
      stack.pop();
      steps.push({ items: [...stack], action: "idle", highlight: null });
    }
  }
  return steps;
}
