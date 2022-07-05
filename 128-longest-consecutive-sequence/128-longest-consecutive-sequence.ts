function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  const min = Math.min(...nums);
  const offset = min < 0 ? -1 * min : 0;

  const hash: Record<number, number> = {};
  for (const num of nums) {
    hash[num + offset] = num;
  }

  let maxCount = 0, count = 1;
  Object.values(hash).forEach((value, num, hashList) => {
    if (hashList[num-1] !== undefined && value - hashList[num-1] === 1) count++;
    else count = 1;
    
    maxCount = Math.max(maxCount, count);
  });
  
  return maxCount;
};