function minOperations(nums: number[], x: number): number {
    let len = nums.length -1;
    let sum = nums.reduce((a,b) => a+b, 0);
    sum = sum -x;
    if(sum < 0) return -1;
    
    if(!sum) return nums.length;
    let le = -Infinity;
    //console.log(sum);
    for(let start = 0, continueSum = 0, i = 0; i < nums.length; i++) {
        continueSum += nums[i];
        while(continueSum > sum) { continueSum -= nums[start++]; }
        if(continueSum === sum) le = Math.max(le, i- start+1);
    }
    return le === -Infinity ? -1 : nums.length-le;

};