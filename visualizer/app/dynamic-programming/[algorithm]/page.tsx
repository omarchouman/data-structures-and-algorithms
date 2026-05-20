"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { FibVisualizer } from "@/components/visualizers/FibVisualizer";
import { KnapsackVisualizer } from "@/components/visualizers/KnapsackVisualizer";
import { LCSVisualizer } from "@/components/visualizers/LCSVisualizer";
import { LISVisualizer } from "@/components/visualizers/LISVisualizer";
import { CoinChangeVisualizer } from "@/components/visualizers/CoinChangeVisualizer";
import { generateFibonacciSteps } from "@/lib/algorithms/dp/fibonacci";
import { generateKnapsackSteps } from "@/lib/algorithms/dp/knapsack";
import { generateLCSSteps } from "@/lib/algorithms/dp/lcs";
import { generateLISSteps } from "@/lib/algorithms/dp/lis";
import { generateCoinChangeSteps } from "@/lib/algorithms/dp/coinChange";
import { FibStep, KnapsackStep, LCSStep, LISStep, CoinChangeStep } from "@/lib/types";

type AnyDPStep = FibStep | KnapsackStep | LCSStep | LISStep | CoinChangeStep;

const ALGORITHMS: Record<string, { label: string; kind: string; generate: () => AnyDPStep[] }> = {
  fibonacci:     { label: "Fibonacci",                  kind: "fib",        generate: generateFibonacciSteps },
  knapsack:      { label: "0/1 Knapsack",               kind: "knapsack",   generate: generateKnapsackSteps },
  lcs:           { label: "Longest Common Subsequence", kind: "lcs",        generate: generateLCSSteps },
  lis:           { label: "Longest Increasing Subsequence", kind: "lis",    generate: generateLISSteps },
  "coin-change": { label: "Coin Change",                kind: "coinchange", generate: generateCoinChangeSteps },
};

export default function DPPage() {
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
      <main className="flex-1 flex items-center justify-center p-8 overflow-auto">
        {config.kind === "fib"        && <FibVisualizer        step={player.currentStep as FibStep} />}
        {config.kind === "knapsack"   && <KnapsackVisualizer   step={player.currentStep as KnapsackStep} />}
        {config.kind === "lcs"        && <LCSVisualizer        step={player.currentStep as LCSStep} />}
        {config.kind === "lis"        && <LISVisualizer        step={player.currentStep as LISStep} />}
        {config.kind === "coinchange" && <CoinChangeVisualizer step={player.currentStep as CoinChangeStep} />}
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
