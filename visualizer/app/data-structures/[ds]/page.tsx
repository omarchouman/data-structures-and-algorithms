"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { QueueVisualizer } from "@/components/visualizers/QueueVisualizer";
import { generateStackSteps } from "@/lib/algorithms/dataStructures/stack";
import { generateQueueSteps } from "@/lib/algorithms/dataStructures/queue";
import { StackStep, QueueStep } from "@/lib/types";

const DS_CONFIG = {
  stack: { label: "Stack", generate: generateStackSteps },
  queue: { label: "Queue", generate: generateQueueSteps },
} as const;

type DSKey = keyof typeof DS_CONFIG;

export default function DataStructurePage() {
  const { ds } = useParams<{ ds: string }>();
  const config = DS_CONFIG[ds as DSKey];
  const steps = useMemo(() => (config?.generate() ?? []) as (StackStep | QueueStep)[], [ds]);
  const player = useAnimationPlayer(steps);

  if (!config) return <div className="p-8 text-slate-500">Data structure not found.</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-4 p-4 border-b border-slate-200">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">← Back</Link>
        <h1 className="text-xl font-semibold">{config.label}</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        {ds === "stack" && <StackVisualizer step={player.currentStep as StackStep} />}
        {ds === "queue" && <QueueVisualizer step={player.currentStep as QueueStep} />}
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
