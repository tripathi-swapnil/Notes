class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        sum = 0
        maxsum = -math.inf
        
        for i in range(len(nums)):
            sum += nums[i]
            if sum > maxsum:
                maxsum = sum
            if sum < 0:
                sum = 0
        
        return maxsum
    
    def maxSubArray1(self, nums: List[int]) -> int:
        dp = [0]*len(nums)
        dp[0] = nums[0]
        
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], nums[i]+dp[i-1])
        
        return max(dp)
        