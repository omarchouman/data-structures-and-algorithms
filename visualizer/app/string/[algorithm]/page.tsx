"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { StringVisualizer } from "@/components/visualizers/StringVisualizer";
import { generateKMPSteps } from "@/lib/algorithms/string/kmp";
import { generateRabinKarpSteps } from "@/lib/algorithms/string/rabinKarp";
import { KMPStep, RabinKarpStep } from "@/lib/types";

type AnyStringStep = KMPStep | RabinKarpStep;

const ALGORITHMS: Record<string, { label: string; kind: "kmp" | "rabin-karp"; generate: () => AnyStringStep[] }> = {
  kmp:          { label: "KMP Pattern Matching", kind: "kmp",         generate: generateKMPSteps },
  "rabin-karp": { label: "Rabin-Karp",           kind: "rabin-karp",  generate: generateRabinKarpSteps },
};

export default function StringPage() {
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
        <StringVisualizer step={player.currentStep} kind={config.kind} />
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
