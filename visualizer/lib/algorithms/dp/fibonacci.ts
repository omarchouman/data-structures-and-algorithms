import { FibStep } from "@/lib/types";

export function generateFibonacciSteps(n: number = 10): FibStep[] {
  const steps: FibStep[] = [];
  const table: (number | null)[] = Array(n + 1).fill(null);

  table[0] = 0;
  steps.push({ table: [...table], current: 0, label: "Base case: F(0) = 0" });
  table[1] = 1;
  steps.push({ table: [...table], current: 1, label: "Base case: F(1) = 1" });

  for (let i = 2; i <= n; i++) {
    steps.push({ table: [...table], current: i, label: `F(${i}) = F(${i - 1}) + F(${i - 2}) = ${table[i - 1]} + ${table[i - 2]}` });
    table[i] = table[i - 1]! + table[i - 2]!;
    steps.push({ table: [...table], current: i, label: `F(${i}) = ${table[i]}` });
  }
  return steps;
}
