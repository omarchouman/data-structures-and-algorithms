import { LISStep } from "@/lib/types";

export function generateLISSteps(input = [10, 9, 2, 5, 3, 7, 101, 18]): LISStep[] {
  const steps: LISStep[] = [];
  const n = input.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      steps.push({ array: input, dp: [...dp], current: i, comparing: j });
      if (input[j] < input[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
        steps.push({ array: input, dp: [...dp], current: i, comparing: j });
      }
    }
  }
  steps.push({ array: input, dp: [...dp], current: -1, comparing: null });
  return steps;
}
