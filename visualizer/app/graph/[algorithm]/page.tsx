"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { GraphVisualizer } from "@/components/visualizers/GraphVisualizer";
import { generateBFSSteps, SAMPLE_GRAPH } from "@/lib/algorithms/graph/bfs";
import { generateDFSSteps } from "@/lib/algorithms/graph/dfs";
import { GraphStep } from "@/lib/types";

const ALGORITHMS: Record<string, { label: string; generate: () => GraphStep[] }> = {
  bfs: { label: "Breadth-First Search", generate: () => generateBFSSteps(SAMPLE_GRAPH, "A") },
  dfs: { label: "Depth-First Search",   generate: () => generateDFSSteps(SAMPLE_GRAPH, "A") },
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
        <GraphVisualizer step={player.currentStep} />
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
