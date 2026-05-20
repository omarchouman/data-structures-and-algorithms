"use client";
import { FloydWarshallStep } from "@/lib/types";

interface Props {
  step: FloydWarshallStep;
}

export function MatrixVisualizer({ step }: Props) {
  const { dist, nodes, k, i, j } = step;

  const cellStyle = (ri: number, ci: number): string => {
    if (ri === i && ci === j) return "bg-orange-400 text-white font-bold";
    if (ri === i || ci === j) return "bg-yellow-100 text-slate-800";
    if (ri === k || ci === k) return "bg-blue-50 text-slate-600";
    return "bg-white text-slate-700";
  };

  const fmt = (v: number) => v === Infinity ? "∞" : String(v);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-slate-500">
        Via <span className="font-semibold text-blue-600">{nodes[k]}</span>: checking [{nodes[i]}][{nodes[j]}]
      </p>
      <div className="overflow-auto">
        <table className="border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-10 h-10 border border-slate-200 bg-slate-50" />
              {nodes.map((n) => (
                <th key={n} className="w-10 h-10 border border-slate-200 bg-slate-50 text-center font-semibold text-slate-600">{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dist.map((row, ri) => (
              <tr key={ri}>
                <td className="w-10 h-10 border border-slate-200 bg-slate-50 text-center font-semibold text-slate-600">{nodes[ri]}</td>
                {row.map((val, ci) => (
                  <td key={ci} className={`w-10 h-10 border border-slate-200 text-center transition-colors duration-100 ${cellStyle(ri, ci)}`}>
                    {fmt(val)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
