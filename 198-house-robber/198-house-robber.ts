function rob(nums: number[]): number {
    let num = [];
    num[0] = nums[0];
    num[1] = Math.max(nums[0], nums[1]);
    
    for(var i = 2; i < nums.length ; i++ ) {
        num[i] = Math.max(nums[i]+num[i-2], num[i-1]);
    }
    return num[nums.length-1];

};

