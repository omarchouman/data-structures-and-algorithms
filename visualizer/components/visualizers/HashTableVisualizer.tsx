"use client";
import { HashTableStep } from "@/lib/types";

interface Props { step: HashTableStep; }

export function HashTableVisualizer({ step }: Props) {
  const { buckets, action, activeBucket, activeItem, activeKey } = step;

  const getBucketColor = (i: number) => {
    if (i !== activeBucket) return "";
    if (action === "put") return "border-green-500";
    if (action === "delete") return "border-red-500";
    if (action === "get") return "border-yellow-500";
    return "";
  };

  const getItemColor = (bucketIdx: number, itemIdx: number) => {
    if (bucketIdx !== activeBucket || itemIdx !== activeItem) return "bg-slate-200 text-slate-700";
    if (action === "put") return "bg-green-400 text-white";
    if (action === "delete") return "bg-red-400 text-white";
    if (action === "get") return "bg-yellow-400 text-slate-900";
    return "bg-slate-200 text-slate-700";
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      {activeKey && (
        <p className="text-sm text-slate-500">
          Key: <span className="font-semibold text-slate-700">&quot;{activeKey}&quot;</span>
          {activeBucket !== null && <span> → bucket {activeBucket}</span>}
        </p>
      )}
      <div className="w-full flex flex-col gap-1">
        {buckets.map((bucket, i) => (
          <div key={i} className={`flex items-center gap-2 border-l-4 pl-2 transition-all duration-200 ${getBucketColor(i)} border-slate-300`}>
            <span className="text-xs text-slate-400 w-5 text-right shrink-0">{i}</span>
            <div className="flex gap-1 flex-wrap">
              {bucket.length === 0
                ? <span className="text-xs text-slate-300">∅</span>
                : bucket.map((item, j) => (
                  <span
                    key={j}
                    className={`text-xs px-2 py-1 rounded font-mono transition-all duration-200 ${getItemColor(i, j)}`}
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-500 h-5 capitalize">
        {action !== "idle" && <span className="font-medium">{action}</span>}
      </p>
    </div>
  );
}
