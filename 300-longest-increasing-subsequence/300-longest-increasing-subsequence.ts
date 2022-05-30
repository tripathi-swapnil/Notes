function lengthOfLIS(nums: number[]): number {
    
    
    let max = 1;
    let dp = Array(nums.length).fill(1);
    for(let i = 1; i < nums.length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
                max = Math.max(max, dp[i]);
            }
        }
    }
    // console.log(dp, max);
    return max;
    
};

// [10,9,2,5,3,7,101,18]
// [7,7,7,7,7,7,7]
// [0,1,0,3,2,3]
