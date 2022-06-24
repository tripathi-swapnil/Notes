function rob1(nums: number[]): number {
    let num = [];
    num[0] = nums[0];
    num[1] = Math.max(nums[0], nums[1]);
    
    for(var i = 2; i < nums.length ; i++ ) {
        num[i] = Math.max(nums[i]+num[i-2], num[i-1]);
    }
    return num[nums.length-1];

};


function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0];
    let prev2 = nums[0];
    let prev = findMax(nums[0], nums[1]);
    for(var i = 2; i < nums.length; i++) {
        let curr = findMax(prev2 + nums[i], prev);
        prev2 = prev;
        prev = curr;
    }
    return prev;
}
function findMax(a, b)
{
    var z, i, max;
 
    // Perform the subtraction
    z = a - b;
 
    // Right shift and Bitwise AND
    i = (z >> 31) & 1;
 
    // Find the maximum number
    max = a - (i * z);
 
    // Return the maximum value
    return max;
}

