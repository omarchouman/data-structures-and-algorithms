import { LinkedListStep } from "@/lib/types";

type Op = { type: "prepend" | "append" | "delete" | "search"; value?: string };

const OPS: Op[] = [
  { type: "append",  value: "A" },
  { type: "append",  value: "B" },
  { type: "append",  value: "C" },
  { type: "prepend", value: "Z" },
  { type: "search",  value: "B" },
  { type: "delete",  value: "B" },
  { type: "append",  value: "D" },
];

export function generateLinkedListSteps(): LinkedListStep[] {
  const steps: LinkedListStep[] = [];
  const nodes: { id: number; value: string }[] = [];
  let nextId = 0;

  steps.push({ nodes: [], action: "idle", highlight: null });

  for (const op of OPS) {
    if (op.type === "append" && op.value) {
      const node = { id: nextId++, value: op.value };
      nodes.push(node);
      steps.push({ nodes: [...nodes], action: "append", highlight: node.id });
    } else if (op.type === "prepend" && op.value) {
      const node = { id: nextId++, value: op.value };
      nodes.unshift(node);
      steps.push({ nodes: [...nodes], action: "prepend", highlight: node.id });
    } else if (op.type === "search" && op.value) {
      for (const n of nodes) {
        steps.push({ nodes: [...nodes], action: "search", highlight: n.id });
        if (n.value === op.value) break;
      }
    } else if (op.type === "delete" && op.value) {
      const idx = nodes.findIndex(n => n.value === op.value);
      if (idx !== -1) {
        steps.push({ nodes: [...nodes], action: "delete", highlight: nodes[idx].id });
        nodes.splice(idx, 1);
        steps.push({ nodes: [...nodes], action: "idle", highlight: null });
      }
    }
  }
  return steps;
}
