class Solution:
    def candy(self, ratings: List[int]) -> int:
        dp = [1]*len(ratings)
        for i in range(len(ratings) - 1):
            if ratings[i] < ratings[i+1]:
                dp[i+1] = dp[i]+1
                
                
        for i in range(len(ratings) - 1,0, -1):
            if ratings[i-1] > ratings[i]:
                dp[i-1] = max(dp[i-1], dp[i]+1)
                
        return sum(dp)
        