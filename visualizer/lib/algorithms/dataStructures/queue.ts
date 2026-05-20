import { QueueStep } from "@/lib/types";

const OPERATIONS: Array<{ type: "enqueue"; value: string } | { type: "dequeue" }> = [
  { type: "enqueue", value: "A" },
  { type: "enqueue", value: "B" },
  { type: "enqueue", value: "C" },
  { type: "dequeue" },
  { type: "enqueue", value: "D" },
  { type: "enqueue", value: "E" },
  { type: "dequeue" },
  { type: "dequeue" },
  { type: "enqueue", value: "F" },
  { type: "dequeue" },
];

export function generateQueueSteps(): QueueStep[] {
  const steps: QueueStep[] = [];
  const queue: string[] = [];

  steps.push({ items: [], action: "idle", highlight: null });

  for (const op of OPERATIONS) {
    if (op.type === "enqueue") {
      queue.push(op.value);
      steps.push({ items: [...queue], action: "enqueue", highlight: queue.length - 1 });
    } else {
      if (queue.length === 0) continue;
      steps.push({ items: [...queue], action: "dequeue", highlight: 0 });
      queue.shift();
      steps.push({ items: [...queue], action: "idle", highlight: null });
    }
  }
  return steps;
}
