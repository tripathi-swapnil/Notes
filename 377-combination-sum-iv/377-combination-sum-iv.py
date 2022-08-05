class Solution:
    def combinationSum4(self, nums: List[int], target: int) -> int:
        @cache
        def dp(t):
            count = 0
            for n in nums:
                if n > t:
                    continue
                
                if t -n == 0:
                    count += 1
                else:
                    count += dp(t-n)
            return count
        
        return dp(target)
        