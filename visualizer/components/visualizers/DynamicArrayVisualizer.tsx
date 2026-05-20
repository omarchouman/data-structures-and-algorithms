"use client";
import { DynamicArrayStep } from "@/lib/types";

interface Props { step: DynamicArrayStep; }

export function DynamicArrayVisualizer({ step }: Props) {
  const { items, capacity, size, action, highlight } = step;

  const getCellColor = (i: number, val: string | null) => {
    if (val === null) return "bg-slate-100 border-dashed border-slate-300 text-slate-400";
    if (i === highlight) {
      if (action === "append") return "bg-green-400 border-green-500 text-white";
      if (action === "resize") return "bg-blue-400 border-blue-500 text-white";
    }
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex gap-6 text-sm text-slate-500">
        <span>Size: <span className="font-semibold text-slate-700">{size}</span></span>
        <span>Capacity: <span className="font-semibold text-slate-700">{capacity}</span></span>
        {action === "resize" && (
          <span className="text-blue-500 font-semibold">Resizing!</span>
        )}
      </div>
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {items.map((val, i) => (
          <div
            key={i}
            className={`w-12 h-12 flex items-center justify-center border-2 rounded font-semibold text-sm transition-all duration-200 ${getCellColor(i, val)}`}
          >
            {val ?? ""}
          </div>
        ))}
      </div>
      <div className="flex gap-1 justify-center" style={{ width: items.length * 52 }}>
        {items.map((_, i) => (
          <div key={i} className="w-12 text-center text-xs text-slate-400">{i}</div>
        ))}
      </div>
      <p className="text-sm text-slate-500 h-5 capitalize">
        {action !== "idle" && <span className="font-medium">{action}</span>}
      </p>
    </div>
  );
}
