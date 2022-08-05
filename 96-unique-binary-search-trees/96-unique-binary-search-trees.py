class Solution:
    def numTrees(self, n: int) -> int:
        @cache
        def prod(v, j):
            return v*j
        dp = [0]*(n+1)
        dp[0] = 1
        dp[1] = 1
        for i in range(2, n+1):
            for j in range(i):
                dp[i] += prod(dp[j], dp[i-j-1])
        return dp[n]
    
    