"use client";
import { SortStep } from "@/lib/types";

interface Props {
  step: SortStep;
}

export function SortingVisualizer({ step }: Props) {
  const { array, comparing, swapped, sorted } = step;
  const max = Math.max(...array);

  const getColor = (i: number): string => {
    if (sorted.includes(i)) return "bg-green-500";
    if (swapped && (swapped[0] === i || swapped[1] === i)) return "bg-red-500";
    if (comparing && (comparing[0] === i || comparing[1] === i)) return "bg-yellow-400";
    return "bg-slate-400";
  };

  return (
    <div className="flex items-end justify-center gap-0.5 w-full h-64 px-4">
      {array.map((value, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t transition-all duration-75 ${getColor(i)}`}
          style={{ height: `${(value / max) * 100}%` }}
          title={String(value)}
        />
      ))}
    </div>
  );
}
