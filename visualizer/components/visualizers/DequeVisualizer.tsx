"use client";
import { DequeStep } from "@/lib/types";

interface Props { step: DequeStep; }

export function DequeVisualizer({ step }: Props) {
  const { items, action, frontHighlight, rearHighlight } = step;

  const getCellColor = (i: number) => {
    const isFront = i === 0 && frontHighlight;
    const isRear = i === items.length - 1 && rearHighlight;
    if (isFront || isRear) {
      if (action === "pushFront" || action === "pushRear") return "bg-green-400 border-green-500 text-white";
      if (action === "popFront" || action === "popRear") return "bg-red-400 border-red-500 text-white";
    }
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">
        {items.length === 0 ? "Empty deque" : `${items.length} item${items.length > 1 ? "s" : ""}`}
      </p>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-blue-500 font-semibold uppercase">Front</span>
          <span className="text-slate-400 text-lg">↓</span>
        </div>
        <div className="flex items-center gap-1">
          {items.length === 0
            ? <p className="text-slate-400 text-sm px-4">empty</p>
            : items.map((val, i) => (
              <div
                key={i}
                className={`w-14 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-200 ${getCellColor(i)}`}
              >
                {val}
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-purple-500 font-semibold uppercase">Rear</span>
          <span className="text-slate-400 text-lg">↓</span>
        </div>
      </div>
      <p className="text-sm text-slate-500 h-5 capitalize">
        {action !== "idle" && <span className="font-medium">{action}</span>}
      </p>
    </div>
  );
}
