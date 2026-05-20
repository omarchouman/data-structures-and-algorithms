import { KMPStep } from "@/lib/types";

export const KMP_TEXT = "AABAACAADAABAABA";
export const KMP_PATTERN = "AABA";

export function generateKMPSteps(text = KMP_TEXT, pattern = KMP_PATTERN): KMPStep[] {
  const steps: KMPStep[] = [];
  const m = pattern.length;
  const lps = Array(m).fill(0);

  // Build LPS phase
  let len = 0, i = 1;
  steps.push({ text, pattern, textIndex: 0, patternIndex: 0, matches: [], lps: [...lps], phase: "build-lps" });
  while (i < m) {
    if (pattern[i] === pattern[len]) {
      lps[i++] = ++len;
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      lps[i++] = 0;
    }
    steps.push({ text, pattern, textIndex: 0, patternIndex: i, matches: [], lps: [...lps], phase: "build-lps" });
  }

  // Search phase
  const matches: number[] = [];
  let ti = 0, pi = 0;
  while (ti < text.length) {
    steps.push({ text, pattern, textIndex: ti, patternIndex: pi, matches: [...matches], lps: [...lps], phase: "search" });
    if (text[ti] === pattern[pi]) { ti++; pi++; }
    if (pi === m) {
      matches.push(ti - pi);
      steps.push({ text, pattern, textIndex: ti, patternIndex: pi, matches: [...matches], lps: [...lps], phase: "search" });
      pi = lps[pi - 1];
    } else if (ti < text.length && text[ti] !== pattern[pi]) {
      pi > 0 ? (pi = lps[pi - 1]) : ti++;
    }
  }
  return steps;
}
