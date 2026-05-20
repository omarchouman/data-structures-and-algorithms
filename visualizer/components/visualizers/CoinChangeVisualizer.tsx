"use client";
import { CoinChangeStep } from "@/lib/types";

interface Props { step: CoinChangeStep; }

export function CoinChangeVisualizer({ step }: Props) {
  const { coins, table, current, usingCoin } = step;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="text-sm text-slate-600">
        Coins: [{coins.join(", ")}] &nbsp;·&nbsp;
        {usingCoin !== null && <span>Trying coin <span className="font-semibold text-orange-500">{usingCoin}</span></span>}
      </div>
      <div className="flex flex-wrap justify-center gap-1 max-w-2xl">
        {table.map((val, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className={`w-10 h-10 flex items-center justify-center border-2 rounded font-semibold text-sm transition-all duration-100
              ${i === current ? "bg-orange-400 border-orange-500 text-white scale-110"
              : val !== null ? "bg-green-400 border-green-500 text-white"
              : "bg-slate-100 border-slate-200 text-slate-400"}`}>
              {val !== null ? val : "∞"}
            </div>
            <span className="text-xs text-slate-400">{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
