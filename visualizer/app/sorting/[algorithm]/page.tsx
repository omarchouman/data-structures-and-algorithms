"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";
import { SortingVisualizer } from "@/components/visualizers/SortingVisualizer";
import { generateBubbleSortSteps } from "@/lib/algorithms/sorting/bubbleSort";
import { generateInsertionSortSteps } from "@/lib/algorithms/sorting/insertionSort";
import { generateMergeSortSteps } from "@/lib/algorithms/sorting/mergeSort";
import { generateQuickSortSteps } from "@/lib/algorithms/sorting/quickSort";
import { SortStep } from "@/lib/types";

const DEFAULT_ARRAY = [38, 27, 43, 3, 9, 82, 10, 64, 15, 51, 7, 29, 71, 44, 18, 56, 33, 22, 67, 5];

const ALGORITHMS: Record<string, { label: string; generate: (arr: number[]) => SortStep[] }> = {
  "bubble-sort":    { label: "Bubble Sort",    generate: generateBubbleSortSteps },
  "insertion-sort": { label: "Insertion Sort", generate: generateInsertionSortSteps },
  "merge-sort":     { label: "Merge Sort",     generate: generateMergeSortSteps },
  "quick-sort":     { label: "Quick Sort",     generate: generateQuickSortSteps },
};

export default function SortingPage() {
  const { algorithm } = useParams<{ algorithm: string }>();
  const config = ALGORITHMS[algorithm];
  const steps = useMemo(() => config?.generate(DEFAULT_ARRAY) ?? [], [algorithm]);
  const player = useAnimationPlayer(steps);

  if (!config) return <div className="p-8 text-slate-500">Algorithm not found.</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-4 p-4 border-b border-slate-200">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">← Back</Link>
        <h1 className="text-xl font-semibold">{config.label}</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <SortingVisualizer step={player.currentStep} />
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
