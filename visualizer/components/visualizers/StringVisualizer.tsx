"use client";
import { KMPStep, RabinKarpStep } from "@/lib/types";

function KMPViz({ step }: { step: KMPStep }) {
  const { text, pattern, textIndex, patternIndex, matches, lps, phase } = step;
  const matchSet = new Set(matches.flatMap((m) => Array.from({ length: pattern.length }, (_, k) => m + k)));

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
        {phase === "build-lps" ? "Building failure function (LPS)" : "Searching"}
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-400 mb-1">Text</span>
          <div className="flex gap-0.5 flex-wrap">
            {text.split("").map((c, i) => (
              <div key={i} className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold
                ${matchSet.has(i) ? "bg-green-400 border-green-500 text-white"
                : phase === "search" && i === textIndex ? "bg-orange-400 border-orange-500 text-white"
                : "bg-slate-100 border-slate-200 text-slate-700"}`}>{c}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-400 mb-1">Pattern</span>
          <div className="flex gap-0.5">
            {pattern.split("").map((c, i) => (
              <div key={i} className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold
                ${phase === "search" && i < patternIndex ? "bg-blue-300 border-blue-400 text-white"
                : "bg-slate-100 border-slate-200 text-slate-700"}`}>{c}</div>
            ))}
          </div>
        </div>
        {phase === "build-lps" && (
          <div className="flex flex-col gap-1">
            <span className="text-xs text-slate-400 mb-1">LPS</span>
            <div className="flex gap-0.5">
              {lps.map((v, i) => (
                <div key={i} className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold
                  ${i < patternIndex ? "bg-purple-300 border-purple-400 text-white" : "bg-slate-100 border-slate-200 text-slate-400"}`}>{v}</div>
              ))}
            </div>
          </div>
        )}
      </div>
      {matches.length > 0 && (
        <p className="text-sm text-green-600 font-medium">Matches at: [{matches.join(", ")}]</p>
      )}
    </div>
  );
}

function RabinKarpViz({ step }: { step: RabinKarpStep }) {
  const { text, pattern, windowStart, matches, isHashMatch, isVerified } = step;
  const m = pattern.length;
  const matchSet = new Set(matches.flatMap((s) => Array.from({ length: m }, (_, k) => s + k)));

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-400 mb-1">Text</span>
          <div className="flex gap-0.5 flex-wrap">
            {text.split("").map((c, i) => {
              const inWindow = i >= windowStart && i < windowStart + m;
              return (
                <div key={i} className={`w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold
                  ${matchSet.has(i) ? "bg-green-400 border-green-500 text-white"
                  : inWindow && isVerified ? "bg-green-300 border-green-400 text-white"
                  : inWindow && isHashMatch ? "bg-yellow-300 border-yellow-400 text-slate-900"
                  : inWindow ? "bg-orange-200 border-orange-300 text-slate-900"
                  : "bg-slate-100 border-slate-200 text-slate-700"}`}>{c}</div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-slate-400 mb-1">Pattern</span>
          <div className="flex gap-0.5">
            {pattern.split("").map((c, i) => (
              <div key={i} className="w-8 h-8 flex items-center justify-center border rounded text-sm font-semibold bg-slate-200 border-slate-300 text-slate-700">{c}</div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-500 h-5">
        {isVerified && <span className="text-green-600 font-medium">Match at index {windowStart}</span>}
        {isHashMatch && !isVerified && <span className="text-yellow-600">Hash match — verifying...</span>}
      </p>
      {matches.length > 0 && (
        <p className="text-sm text-green-600 font-medium">Matches at: [{matches.join(", ")}]</p>
      )}
    </div>
  );
}

interface Props {
  step: KMPStep | RabinKarpStep;
  kind: "kmp" | "rabin-karp";
}

export function StringVisualizer({ step, kind }: Props) {
  if (kind === "kmp") return <KMPViz step={step as KMPStep} />;
  return <RabinKarpViz step={step as RabinKarpStep} />;
}
