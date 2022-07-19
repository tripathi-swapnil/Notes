class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        user = set()
        for i, v in enumerate(nums):
            if v in user:
                return True
            else:
                user.add(v)
        return False
        