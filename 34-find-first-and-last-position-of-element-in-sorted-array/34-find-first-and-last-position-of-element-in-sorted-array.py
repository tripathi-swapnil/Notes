class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l = len(nums) - 1

        def bsf(low: int, high: int):
            if low > high:
                return -1

            mid = (low + high) // 2
            if nums[mid] == target and (mid == 0 or nums[mid-1] != target):
                return mid

            if nums[mid] >= target:
                return bsf(low, mid-1)
            else:
                return bsf(mid+1, high)

        def bsb(low: int, high: int):
            if low > high:
                return -1

            mid = (low + high) // 2
            if nums[mid] == target and (mid == l or nums[mid+1] != target):
                return mid

            if nums[mid] > target:
                return bsb(low, mid-1)
            else:
                return bsb(mid+1, high)

        return [bsf(0, l), bsb(0, l)]