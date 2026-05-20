import { GraphStep } from "@/lib/types";
import { SAMPLE_GRAPH } from "./bfs";

export function generateDFSSteps(
  graph: Record<string, string[]>,
  start: string
): GraphStep[] {
  const steps: GraphStep[] = [];
  const visited: string[] = [];

  function dfs(node: string) {
    if (visited.includes(node)) return;
    visited.push(node);
    steps.push({ visited: [...visited], frontier: [], current: node });
    for (const neighbor of graph[node]) {
      if (!visited.includes(neighbor)) {
        steps.push({ visited: [...visited], frontier: [neighbor], current: node });
        dfs(neighbor);
      }
    }
  }

  dfs(start);
  return steps;
}

export { SAMPLE_GRAPH };
