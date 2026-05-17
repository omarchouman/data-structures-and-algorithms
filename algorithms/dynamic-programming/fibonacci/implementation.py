import sys
sys.setrecursionlimit(10000)

# O(2^n) — included for contrast only
def fib_naive(n):
    if n <= 1:
        return n
    return fib_naive(n - 1) + fib_naive(n - 2)


# O(n) time, O(n) space — top-down with memoisation
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]


# O(n) time, O(n) space — bottom-up tabulation
def fib_tab(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2]
    return dp[n]


# O(n) time, O(1) space — space-optimised
def fib(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


if __name__ == "__main__":
    for i in [0, 1, 5, 10, 20]:
        print(f"fib({i:2}) = {fib(i)}")
    # fib(20) = 6765

    print("\nNaive vs optimised (n=10):", fib_naive(10), "==", fib(10))
