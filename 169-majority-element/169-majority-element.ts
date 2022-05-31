function majorityElement(nums: number[]): number {
    let max = nums[0];
    let maxCount = 1;
    for(let i = 0; i < nums.length; i++) {
        if(max === nums[i]) {
            maxCount++;
            continue;
        }
        maxCount--;
        if(maxCount === 0) {
           maxCount = 1;
            max = nums[i];
        }
    }
    return max;
};