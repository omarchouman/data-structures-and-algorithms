"use client";
import { QueueStep } from "@/lib/types";

interface Props {
  step: QueueStep;
}

export function QueueVisualizer({ step }: Props) {
  const { items, action, highlight } = step;

  const getColor = (i: number): string => {
    if (i !== highlight) return "bg-slate-200 border-slate-300 text-slate-700";
    return action === "enqueue"
      ? "bg-green-400 border-green-500 text-white"
      : "bg-red-400 border-red-500 text-white";
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-1 min-h-12">
        {items.length === 0
          ? <p className="text-slate-400 text-sm">Queue is empty</p>
          : items.map((item, i) => (
              <div
                key={i}
                className={`w-12 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-200 ${getColor(i)}`}
              >
                {item}
              </div>
            ))
        }
      </div>
      <p className="text-xs text-slate-400">← front &nbsp;&nbsp;&nbsp; rear →</p>
      <p className="text-sm text-slate-500 h-5">
        {action !== "idle" && <span className="capitalize font-medium">{action}</span>}
      </p>
    </div>
  );
}
