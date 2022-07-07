class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        max_count = 0;
        count = 0
        last_nums = -1;
        for num in nums:
            if(num <= last_nums and count) :
                count = 0;
                
            count += 1
            last_nums = num
            max_count = max(count, max_count)
        return max_count