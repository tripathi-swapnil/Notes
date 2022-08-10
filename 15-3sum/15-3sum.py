class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:

        res = set()

        #1. Split nums into three lists: negative numbers, positive numbers, and zeros
        n, p, z = [], [], []
        for num in nums:
            if num > 0:
                p.append(num)
            elif num < 0: 
                n.append(num)
            else:
                z.append(num)

        #2. Create a separate set for negatives and positives for O(1) look-up times
        N, P = set(n), set(p)

        #3. If there is at least 1 zero in the list, add all cases where -num exists in N and num exists in P
        #   i.e. (-3, 0, 3) = 0
        if z:
            for num in P:
                if -1*num in N:
                    res.add((-1*num, 0, num))

        #3. If there are at least 3 zeros in the list then also include (0, 0, 0) = 0
        if len(z) >= 3:
            res.add((0,0,0))

        #4. For all pairs of negative numbers (-3, -1), check to see if their complement (4)
        #   exists in the positive number set
        for i in range(len(n)):
            for j in range(i+1,len(n)):
                target = -1*(n[i]+n[j])
                if target in P:
                    res.add(tuple(sorted([n[i],n[j],target])))

        #5. For all pairs of positive numbers (1, 1), check to see if their complement (-2)
        #   exists in the negative number set
        for i in range(len(p)):
            for j in range(i+1,len(p)):
                target = -1*(p[i]+p[j])
                if target in N:
                    res.add(tuple(sorted([p[i],p[j],target])))

        return res
    def threeSum2(self, nums: List[int]) -> List[List[int]]:
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
        
        
        
#     def threeSum1(self, nums: List[int]) -> List[List[int]]:
#         nums.sort()
#         output = set()
#         for i, v in enumerate(nums):
#             val = self.twoSum(nums, -v, i)
#             output.update(val)
#         return output
        
        
#     def twoSum(self, nums: List[int], target: int, index: int) -> List[int]:
#         result = set()
#         hash = {}

#         for i in range(index+1, len(nums)):
#             v = nums[i]
#             diff = target - v
#             if v in hash:
#                 arr = [-target, diff, v]
#                 result.add(tuple(arr))
#             hash[diff] = i
#         return result
        