import { RabinKarpStep } from "@/lib/types";

const BASE = 256, MOD = 101;

export function generateRabinKarpSteps(text = "ABCABCABC", pattern = "ABC"): RabinKarpStep[] {
  const steps: RabinKarpStep[] = [];
  const n = text.length, m = pattern.length;
  const matches: number[] = [];

  let h = 1;
  for (let i = 0; i < m - 1; i++) h = (h * BASE) % MOD;

  let patHash = 0, winHash = 0;
  for (let i = 0; i < m; i++) {
    patHash = (BASE * patHash + text.charCodeAt(i)) % MOD;
    winHash = (BASE * winHash + text.charCodeAt(i)) % MOD;
  }

  for (let i = 0; i <= n - m; i++) {
    const isHashMatch = patHash === winHash;
    const isVerified = isHashMatch && text.slice(i, i + m) === pattern;
    steps.push({ text, pattern, windowStart: i, matches: [...matches], isHashMatch, isVerified });
    if (isVerified) matches.push(i);

    if (i < n - m) {
      winHash = (BASE * (winHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % MOD;
      if (winHash < 0) winHash += MOD;
    }
  }
  return steps;
}
