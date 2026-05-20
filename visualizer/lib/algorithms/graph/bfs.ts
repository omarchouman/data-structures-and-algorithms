import { GraphStep } from "@/lib/types";

export const SAMPLE_GRAPH: Record<string, string[]> = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "E"],
  D: ["B"],
  E: ["B", "C", "F"],
  F: ["E"],
};

export function generateBFSSteps(
  graph: Record<string, string[]>,
  start: string
): GraphStep[] {
  const steps: GraphStep[] = [];
  const visited: string[] = [];
  const queue: string[] = [start];

  steps.push({ visited: [], frontier: [start], current: start });

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (visited.includes(current)) continue;
    visited.push(current);
    steps.push({ visited: [...visited], frontier: [...queue], current });

    for (const neighbor of graph[current]) {
      if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
        queue.push(neighbor);
        steps.push({ visited: [...visited], frontier: [...queue], current });
      }
    }
  }
  return steps;
}
