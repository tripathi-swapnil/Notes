class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = []
        for i in range(len(nums)-2):
            if i and nums[i] == nums[i-1]:
                continue
            left = i+1
            right = len(nums) - 1
            
            while left < right:
                if nums[i] + nums[left] + nums[right] == 0:
                    output.append([nums[i], nums[left], nums[right]])
                    
                    while left < right and nums[left] == nums[left+1]:
                        left += 1
                    
                    while left < right and nums[right] == nums[right-1]:
                        right -= 1
                    
                    left += 1
                    right -= 1
                    
                elif nums[i] + nums[left] + nums[right] > 0:
                    right -= 1
                
                else:
                    left += 1
        return output
        
        
        
    def threeSum1(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        output = set()
        for i, v in enumerate(nums):
            val = self.twoSum(nums, -v, i)
            output.update(val)
        return output
        
        
    def twoSum(self, nums: List[int], target: int, index: int) -> List[int]:
        result = set()
        hash = {}

        for i in range(index+1, len(nums)):
            v = nums[i]
            diff = target - v
            if v in hash:
                arr = [-target, diff, v]
                result.add(tuple(arr))
            hash[diff] = i
        return result
        