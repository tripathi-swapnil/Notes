class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        subsets = []
        
        def solve(start, current):
            subsets.append(current[:])
            for i in range(start, len(nums)):
                current.append(nums[i])
                if i + 1 <= len(nums):
                    solve(i+1, current)
                current.pop()

        solve(0, [])
        return subsets