"use client";
import { LISStep } from "@/lib/types";

interface Props { step: LISStep; }

export function LISVisualizer({ step }: Props) {
  const { array, dp, current, comparing } = step;

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">Array</p>
        <div className="flex gap-1">
          {array.map((val, i) => (
            <div key={i} className={`w-12 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-150
              ${i === current ? "bg-orange-400 border-orange-500 text-white"
              : i === comparing ? "bg-yellow-400 border-yellow-500 text-slate-900"
              : "bg-slate-200 border-slate-300 text-slate-700"}`}>
              {val}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">LIS lengths (dp)</p>
        <div className="flex gap-1">
          {dp.map((val, i) => (
            <div key={i} className={`w-12 h-12 flex items-center justify-center border-2 rounded font-semibold transition-all duration-150
              ${i === current ? "bg-orange-400 border-orange-500 text-white"
              : i < current || current === -1 ? "bg-green-400 border-green-500 text-white"
              : "bg-slate-100 border-slate-200 text-slate-400"}`}>
              {val}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
