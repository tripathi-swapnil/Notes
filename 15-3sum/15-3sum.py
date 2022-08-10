class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = set()
        for i, v in enumerate(nums):
            val = self.twoSum(nums, -v, i)
            output.update(val)
        return output
        
        
    def twoSum(self, nums: List[int], target: int, index: int) -> List[int]:
        result = set()
        hash = {}

        for i,v in enumerate(nums):
            if i <= index:
                continue
            diff = target - v
            if v in hash:
                arr = [diff, v, -target]
                arr.sort()
                result.add(tuple(arr))
            hash[diff] = i
        return result
        