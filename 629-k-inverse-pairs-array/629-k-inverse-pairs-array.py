class Solution:
    def kInversePairs(self, n: int, k: int) -> int:
        MOD = 10 ** 9 + 7

        dp = [0] * (k + 1)
        dp[0] = 1

        for i in range(n):
            current = []
            s = 0
            for j in range(k + 1):
                s += dp[j]
                if j >= i + 1:
                    s -= dp[j - i - 1]
                s %= MOD
                current.append(s)
            dp = current

        return dp[-1]