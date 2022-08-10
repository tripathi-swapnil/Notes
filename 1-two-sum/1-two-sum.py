class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        result = []
        hash = {}
        
        for i,v in enumerate(nums):
            diff = target - v
            if v in hash:
                return [hash.get(v), i]
            hash[diff] = i
        return result
        