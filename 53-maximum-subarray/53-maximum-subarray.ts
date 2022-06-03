

function maxSubArray(nums: number[]): number {
    let sum = 0;
    let maxSum = -Infinity;
    for(let i = 0; i< nums.length; i++) {
        sum += nums[i];
        if(sum > maxSum) {
            maxSum = sum
         };
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
}
