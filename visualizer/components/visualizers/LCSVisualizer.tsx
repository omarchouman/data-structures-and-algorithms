"use client";
import { LCSStep } from "@/lib/types";

interface Props { step: LCSStep; }

export function LCSVisualizer({ step }: Props) {
  const { s1, s2, table, i, j } = step;

  return (
    <div className="flex flex-col items-center gap-4 overflow-auto">
      <div className="text-sm text-slate-600">
        <span className="font-semibold">S1:</span> {s1} &nbsp; <span className="font-semibold">S2:</span> {s2}
      </div>
      <table className="border-collapse text-xs">
        <thead>
          <tr>
            <th className="border border-slate-200 bg-slate-50 px-2 py-1 w-8" />
            <th className="border border-slate-200 bg-slate-50 px-2 py-1 text-center text-slate-400">""</th>
            {s2.split("").map((c, idx) => (
              <th key={idx} className={`border border-slate-200 px-2 py-1 text-center ${idx + 1 === j ? "bg-yellow-100 font-bold" : "bg-slate-50 text-slate-600"}`}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, ri) => (
            <tr key={ri}>
              <td className={`border border-slate-200 px-2 py-1 text-center font-semibold ${ri === i ? "bg-yellow-100" : "bg-slate-50 text-slate-400"}`}>
                {ri === 0 ? '""' : s1[ri - 1]}
              </td>
              {row.map((val, ci) => (
                <td key={ci} className={`border border-slate-200 px-2 py-1 text-center w-8 transition-colors duration-100
                  ${ri === i && ci === j ? "bg-orange-400 text-white font-bold"
                  : ri === i ? "bg-yellow-50"
                  : "bg-white text-slate-700"}`}>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
