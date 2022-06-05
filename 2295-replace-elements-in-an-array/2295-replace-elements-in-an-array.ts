function arrayChange(nums: number[], operations: number[][]): number[] {
    // const nums = new Set(nums1);
    for(let [v, r] of operations){
        nums[nums.indexOf(v)] = r;
    };
    return nums

};