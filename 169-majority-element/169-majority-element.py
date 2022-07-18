class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        max = nums[0]
        maxcount = 0
        
        for i in range(len(nums)):
            if max == nums[i]:
                maxcount += 1
                continue
            maxcount -= 1
            if maxcount == 0:
                maxcount = 1
                max = nums[i]
        return max
        