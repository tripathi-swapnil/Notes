class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        numset = set(nums)
        output = []
        
        for i in range(1, len(nums)+1):
            if not i in numset:
                output.append(i)
        return output
        
        