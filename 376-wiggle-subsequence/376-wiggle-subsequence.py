class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        wiggle_list = [];

        for i in range(len(nums) - 1):
          diff = nums[i+1] - nums[i]

          if (len(wiggle_list) == 0 and diff != 0) or (diff < 0 and wiggle_list[-1] > 0) or (diff > 0 and wiggle_list[-1] < 0):
            wiggle_list.append(diff)

        return len(wiggle_list) + 1