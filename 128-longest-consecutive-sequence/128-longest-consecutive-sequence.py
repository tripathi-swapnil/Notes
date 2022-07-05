class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_dict = dict(zip(nums, [1]*len(nums)))

        lmax = 0
        for num in num_dict:
          if num - 1 in num_dict:
            continue

          current = 1
          while num + 1 in num_dict:
            num += 1
            current += 1

          lmax = max(lmax, current)

        return lmax
#         if len(nums) == 0:
#             return 0
        
#         min_item = min(nums);
        
#         offset = -1 * min_item if min_item < 0 else 0
#         dicts = {};
        
#         for i in nums:
#             dicts[i+offset] = i
            
#         max_count, count = 0, 1
        
#         for key, val in dicts.items():
#             if dicts.get(key-1, 'na') is not 'na' and val - dicts[key-1] is 1:
#                 count += 1
#             else:
#                 count = 1
#             max_count = max(count, max_count)
#             print(max_count)
            
#         return max_count
#         function longestConsecutive(nums: number[]): number {
#   if (nums.length === 0) return 0;
  
#   const min = Math.min(...nums);
#   const offset = min < 0 ? -1 * min : 0;

#   const hash: Record<number, number> = {};
#   for (const num of nums) {
#     hash[num + offset] = num;
#   }

#   let maxCount = 0, count = 1;
#   Object.values(hash).forEach((value, num, hashList) => {
#     if (hashList[num-1] !== undefined && value - hashList[num-1] === 1) count++;
#     else count = 1;
    
#     maxCount = Math.max(maxCount, count);
#   });
  
#   return maxCount;
# };
        