"use client";
import { FibStep } from "@/lib/types";

interface Props { step: FibStep; }

export function FibVisualizer({ step }: Props) {
  const { table, current, label } = step;

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm text-slate-500 h-6 font-medium">{label}</p>
      <div className="flex flex-wrap justify-center gap-1">
        {table.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-12 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-150
              ${i === current ? "bg-orange-400 border-orange-500 text-white scale-110"
              : val !== null ? "bg-green-400 border-green-500 text-white"
              : "bg-slate-100 border-slate-200 text-slate-400"}`}>
              {val !== null ? val : "?"}
            </div>
            <span className="text-xs text-slate-400">F({i})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
