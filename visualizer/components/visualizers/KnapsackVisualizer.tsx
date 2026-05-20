"use client";
import { KnapsackStep } from "@/lib/types";

interface Props { step: KnapsackStep; }

export function KnapsackVisualizer({ step }: Props) {
  const { table, currentItem, currentWeight, items } = step;

  return (
    <div className="flex flex-col items-center gap-4 overflow-auto">
      <p className="text-sm text-slate-500">
        Item <span className="font-semibold">{items[currentItem - 1]?.name ?? "—"}</span>, capacity {currentWeight}
      </p>
      <table className="border-collapse text-xs">
        <thead>
          <tr>
            <th className="border border-slate-200 bg-slate-50 px-2 py-1 text-slate-600">Item \ W</th>
            {Array.from({ length: table[0].length }, (_, w) => (
              <th key={w} className={`border border-slate-200 px-2 py-1 text-center ${w === currentWeight ? "bg-yellow-100 font-bold" : "bg-slate-50 text-slate-500"}`}>{w}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.map((row, i) => (
            <tr key={i}>
              <td className={`border border-slate-200 px-2 py-1 text-center font-semibold ${i === currentItem ? "bg-yellow-100" : "bg-slate-50 text-slate-500"}`}>
                {i === 0 ? "—" : items[i - 1].name}
              </td>
              {row.map((val, w) => (
                <td key={w} className={`border border-slate-200 px-2 py-1 text-center transition-colors duration-100
                  ${i === currentItem && w === currentWeight ? "bg-orange-400 text-white font-bold"
                  : i === currentItem ? "bg-yellow-50"
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
