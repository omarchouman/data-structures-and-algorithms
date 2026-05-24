"use client";
import { SearchStep } from "@/lib/types";

interface Props {
  step: SearchStep;
}

export function SearchVisualizer({ step }: Props) {
  const { array, target, current, low, high, mid, found, eliminated } = step;
  const eliminatedSet = new Set(eliminated);

  const getStyle = (i: number): string => {
    if (found === i) return "bg-green-500 border-green-600 text-white scale-110";
    if (found === -1 && eliminatedSet.has(i)) return "bg-slate-100 border-slate-200 text-slate-300";
    if (current === i) return "bg-yellow-400 border-yellow-500 text-slate-900";
    if (mid === i) return "bg-orange-400 border-orange-500 text-white";
    if (eliminatedSet.has(i)) return "bg-slate-100 border-slate-200 text-slate-300";
    if (low !== null && high !== null && i >= low && i <= high) return "bg-blue-100 border-blue-400 text-slate-900";
    return "bg-slate-200 border-slate-300 text-slate-700";
  };

  const getLabel = (i: number): string | null => {
    if (low === i && high === i) return "lo/hi";
    if (low === i) return "lo";
    if (high === i) return "hi";
    if (mid === i) return "mid";
    return null;
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-slate-500 text-sm">Target: <span className="font-bold text-slate-800">{target}</span></p>
      <div className="flex flex-wrap justify-center gap-1">
        {array.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-xs text-slate-400 h-4">{getLabel(i)}</span>
            <div className={`w-10 h-10 flex items-center justify-center border-2 rounded font-semibold text-sm transition-all duration-150 ${getStyle(i)}`}>
              {val}
            </div>
            <span className="text-xs text-slate-300">{i}</span>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 h-5">
        {found === null && current !== null && `Checking index ${current}`}
        {found !== null && found >= 0 && <span className="text-green-600 font-medium">Found {target} at index {found}</span>}
        {found === -1 && <span className="text-red-500 font-medium">{target} not found</span>}
      </p>
    </div>
  );
}
