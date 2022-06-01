function runningSum(nums: number[]): number[] {
   // const dp = nums;
    for(let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1];
    }
    //console.log(nums);
    return nums;
};