import { DequeStep } from "@/lib/types";

type Op = { type: "pushFront" | "pushRear" | "popFront" | "popRear"; value?: string };

const OPS: Op[] = [
  { type: "pushRear",  value: "A" },
  { type: "pushRear",  value: "B" },
  { type: "pushFront", value: "Z" },
  { type: "pushRear",  value: "C" },
  { type: "popFront" },
  { type: "pushFront", value: "X" },
  { type: "popRear" },
  { type: "popFront" },
];

export function generateDequeSteps(): DequeStep[] {
  const steps: DequeStep[] = [];
  const dq: string[] = [];

  steps.push({ items: [], action: "idle", frontHighlight: false, rearHighlight: false });

  for (const op of OPS) {
    if (op.type === "pushRear" && op.value) {
      dq.push(op.value);
      steps.push({ items: [...dq], action: "pushRear", frontHighlight: false, rearHighlight: true });
    } else if (op.type === "pushFront" && op.value) {
      dq.unshift(op.value);
      steps.push({ items: [...dq], action: "pushFront", frontHighlight: true, rearHighlight: false });
    } else if (op.type === "popFront" && dq.length > 0) {
      steps.push({ items: [...dq], action: "popFront", frontHighlight: true, rearHighlight: false });
      dq.shift();
      steps.push({ items: [...dq], action: "idle", frontHighlight: false, rearHighlight: false });
    } else if (op.type === "popRear" && dq.length > 0) {
      steps.push({ items: [...dq], action: "popRear", frontHighlight: false, rearHighlight: true });
      dq.pop();
      steps.push({ items: [...dq], action: "idle", frontHighlight: false, rearHighlight: false });
    }
  }
  return steps;
}
