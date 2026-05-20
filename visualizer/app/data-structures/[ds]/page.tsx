"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";
import { useAnimationPlayer } from "@/components/player/useAnimationPlayer";
import { AnimationPlayer } from "@/components/player/AnimationPlayer";

import { StackVisualizer } from "@/components/visualizers/StackVisualizer";
import { QueueVisualizer } from "@/components/visualizers/QueueVisualizer";
import { LinkedListVisualizer } from "@/components/visualizers/LinkedListVisualizer";
import { DynamicArrayVisualizer } from "@/components/visualizers/DynamicArrayVisualizer";
import { DequeVisualizer } from "@/components/visualizers/DequeVisualizer";
import { HashTableVisualizer } from "@/components/visualizers/HashTableVisualizer";
import { BSTVisualizer } from "@/components/visualizers/BSTVisualizer";
import { AVLVisualizer } from "@/components/visualizers/AVLVisualizer";
import { HeapVisualizer } from "@/components/visualizers/HeapVisualizer";
import { TrieVisualizer } from "@/components/visualizers/TrieVisualizer";
import { UnionFindVisualizer } from "@/components/visualizers/UnionFindVisualizer";
import { SegmentTreeVisualizer } from "@/components/visualizers/SegmentTreeVisualizer";

import { generateStackSteps } from "@/lib/algorithms/dataStructures/stack";
import { generateQueueSteps } from "@/lib/algorithms/dataStructures/queue";
import { generateLinkedListSteps } from "@/lib/algorithms/dataStructures/linkedList";
import { generateDynamicArraySteps } from "@/lib/algorithms/dataStructures/dynamicArray";
import { generateDequeSteps } from "@/lib/algorithms/dataStructures/deque";
import { generateHashTableSteps } from "@/lib/algorithms/dataStructures/hashTable";
import { generateBSTSteps } from "@/lib/algorithms/dataStructures/bst";
import { generateAVLSteps } from "@/lib/algorithms/dataStructures/avlTree";
import { generateHeapSteps } from "@/lib/algorithms/dataStructures/heap";
import { generateTrieSteps } from "@/lib/algorithms/dataStructures/trie";
import { generateUnionFindSteps } from "@/lib/algorithms/dataStructures/unionFind";
import { generateSegmentTreeSteps } from "@/lib/algorithms/dataStructures/segmentTree";

import {
  StackStep, QueueStep, LinkedListStep, DynamicArrayStep, DequeStep,
  HashTableStep, BSTStep, AVLStep, HeapStep, TrieStep, UnionFindStep, SegmentTreeStep,
} from "@/lib/types";

type AnyStep =
  | StackStep | QueueStep | LinkedListStep | DynamicArrayStep | DequeStep
  | HashTableStep | BSTStep | AVLStep | HeapStep | TrieStep | UnionFindStep | SegmentTreeStep;

const DS_CONFIG: Record<string, { label: string; generate: () => AnyStep[] }> = {
  stack:          { label: "Stack",          generate: generateStackSteps as () => AnyStep[] },
  queue:          { label: "Queue",          generate: generateQueueSteps as () => AnyStep[] },
  "linked-list":  { label: "Linked List",    generate: generateLinkedListSteps as () => AnyStep[] },
  "dynamic-array":{ label: "Dynamic Array",  generate: generateDynamicArraySteps as () => AnyStep[] },
  deque:          { label: "Deque",          generate: generateDequeSteps as () => AnyStep[] },
  "hash-table":   { label: "Hash Table",     generate: generateHashTableSteps as () => AnyStep[] },
  bst:            { label: "Binary Search Tree", generate: generateBSTSteps as () => AnyStep[] },
  "avl-tree":     { label: "AVL Tree",       generate: generateAVLSteps as () => AnyStep[] },
  heap:           { label: "Heap",           generate: generateHeapSteps as () => AnyStep[] },
  trie:           { label: "Trie",           generate: generateTrieSteps as () => AnyStep[] },
  "union-find":   { label: "Union-Find",     generate: generateUnionFindSteps as () => AnyStep[] },
  "segment-tree": { label: "Segment Tree",   generate: generateSegmentTreeSteps as () => AnyStep[] },
};

export default function DataStructurePage() {
  const { ds } = useParams<{ ds: string }>();
  const config = DS_CONFIG[ds];
  const steps = useMemo(() => config?.generate() ?? [], [ds]);
  const player = useAnimationPlayer(steps);
  const step = player.currentStep;

  if (!config) return <div className="p-8 text-slate-500">Data structure not found.</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-4 p-4 border-b border-slate-200">
        <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">← Back</Link>
        <h1 className="text-xl font-semibold">{config.label}</h1>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        {ds === "stack"           && <StackVisualizer step={step as StackStep} />}
        {ds === "queue"           && <QueueVisualizer step={step as QueueStep} />}
        {ds === "linked-list"     && <LinkedListVisualizer step={step as LinkedListStep} />}
        {ds === "dynamic-array"   && <DynamicArrayVisualizer step={step as DynamicArrayStep} />}
        {ds === "deque"           && <DequeVisualizer step={step as DequeStep} />}
        {ds === "hash-table"      && <HashTableVisualizer step={step as HashTableStep} />}
        {ds === "bst"             && <BSTVisualizer step={step as BSTStep} />}
        {ds === "avl-tree"        && <AVLVisualizer step={step as AVLStep} />}
        {ds === "heap"            && <HeapVisualizer step={step as HeapStep} />}
        {ds === "trie"            && <TrieVisualizer step={step as TrieStep} />}
        {ds === "union-find"      && <UnionFindVisualizer step={step as UnionFindStep} />}
        {ds === "segment-tree"    && <SegmentTreeVisualizer step={step as SegmentTreeStep} />}
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
