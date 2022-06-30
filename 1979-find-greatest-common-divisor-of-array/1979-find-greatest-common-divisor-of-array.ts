function findGCD(nums: number[]): number {
    nums = nums.sort((a,b) => a-b);
    
    for(let i = nums[0]; i >= 2; i--) {
        if(nums[0]%i === 0 && nums[nums.length-1]%i ===0) {
            return i;
        }
    }
    return 1;
};