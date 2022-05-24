function twoSum(nums: number[], target: number): number[] {
  
  function find(start: number, end: number, t: number): number | false {
    if (start > end) return false;
    
    const mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === t) return mid;
    
    if (nums[mid] > t) {
      return find(start, mid - 1, t);
    } else {
      return find(mid+1, end, t);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const index = find(i+1, nums.length - 1, target - nums[i]);
    if (index !== false) {
      return [i+1, index+1]; 
    }
  }
  
  return [];
};