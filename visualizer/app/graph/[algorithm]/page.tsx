"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { GraphVisualizer } from "@/components/visualizers/GraphVisualizer";
import { WeightedGraphVisualizer } from "@/components/visualizers/WeightedGraphVisualizer";
import { MatrixVisualizer } from "@/components/visualizers/MatrixVisualizer";
import { generateBFSSteps, SAMPLE_GRAPH } from "@/lib/algorithms/graph/bfs";
import { generateDFSSteps } from "@/lib/algorithms/graph/dfs";
import { generateDijkstraSteps } from "@/lib/algorithms/graph/dijkstra";
import { generateBellmanFordSteps } from "@/lib/algorithms/graph/bellmanFord";
import { generatePrimsSteps } from "@/lib/algorithms/graph/primsMST";
import { generateKruskalsSteps } from "@/lib/algorithms/graph/kruskalsMST";
import { generateFloydWarshallSteps } from "@/lib/algorithms/graph/floydWarshall";
import { GraphStep, WeightedGraphStep, FloydWarshallStep } from "@/lib/types";

type AnyStep = GraphStep | WeightedGraphStep | FloydWarshallStep;

const ALGORITHMS: Record<string, { label: string; kind: string; generate: () => AnyStep[] }> = {
  bfs:             { label: "Breadth-First Search",  kind: "unweighted", generate: () => generateBFSSteps(SAMPLE_GRAPH, "A") },
  dfs:             { label: "Depth-First Search",    kind: "unweighted", generate: () => generateDFSSteps(SAMPLE_GRAPH, "A") },
  dijkstra:        { label: "Dijkstra's Shortest Path", kind: "weighted-dist", generate: () => generateDijkstraSteps("A") },
  "bellman-ford":  { label: "Bellman-Ford",          kind: "weighted-dist", generate: () => generateBellmanFordSteps("A") },
  "prims-mst":     { label: "Prim's MST",            kind: "weighted-mst",  generate: () => generatePrimsSteps("A") },
  "kruskals-mst":  { label: "Kruskal's MST",         kind: "weighted-mst",  generate: () => generateKruskalsSteps() },
  "floyd-warshall":{ label: "Floyd-Warshall",        kind: "matrix",        generate: () => generateFloydWarshallSteps() },
};

export default function GraphPage() {
  const { algorithm } = useParams<{ algorithm: string }>();
  const config = ALGORITHMS[algorithm];
  const steps = useMemo(() => config?.generate() ?? [], [algorithm]);
  const player = useAnimationPlayer(steps);

  if (!config) return <div className="p-8 text-slate-500">Algorithm not found.</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-4 p-4 border-b border-slate-200">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">← Back</Link>
        <h1 className="text-xl font-semibold">{config.label}</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        {config.kind === "unweighted" && <GraphVisualizer step={player.currentStep as GraphStep} />}
        {config.kind === "weighted-dist" && <WeightedGraphVisualizer step={player.currentStep as WeightedGraphStep} showDistances />}
        {config.kind === "weighted-mst" && <WeightedGraphVisualizer step={player.currentStep as WeightedGraphStep} showMST />}
        {config.kind === "matrix" && <MatrixVisualizer step={player.currentStep as FloydWarshallStep} />}
      </main>
      <AnimationPlayer
        index={player.index}
        total={player.total}
        playing={player.playing}
        speedMs={player.speedMs}
        onPlay={player.play}
        onPause={player.pause}
        onReset={player.reset}
        onSpeedChange={player.setSpeedMs}
      />
    </div>
  );
}
