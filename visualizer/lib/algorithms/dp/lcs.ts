import { LCSStep } from "@/lib/types";

export function generateLCSSteps(s1 = "ABCBDAB", s2 = "BDCAB"): LCSStep[] {
  const steps: LCSStep[] = [];
  const m = s1.length, n = s2.length;
  const table: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      steps.push({ s1, s2, table: table.map(r => [...r]), i, j });
      if (s1[i - 1] === s2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1]);
      }
      steps.push({ s1, s2, table: table.map(r => [...r]), i, j });
    }
  }
  return steps;
}
