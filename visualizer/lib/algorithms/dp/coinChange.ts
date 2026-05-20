import { CoinChangeStep } from "@/lib/types";

export function generateCoinChangeSteps(coins = [1, 5, 10, 25], amount = 36): CoinChangeStep[] {
  const steps: CoinChangeStep[] = [];
  const table: (number | null)[] = Array(amount + 1).fill(null);
  table[0] = 0;
  steps.push({ coins, table: [...table], current: 0, usingCoin: null });

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i && table[i - coin] !== null) {
        steps.push({ coins, table: [...table], current: i, usingCoin: coin });
        const candidate = table[i - coin]! + 1;
        if (table[i] === null || candidate < table[i]!) {
          table[i] = candidate;
          steps.push({ coins, table: [...table], current: i, usingCoin: coin });
        }
      }
    }
  }
  return steps;
}
