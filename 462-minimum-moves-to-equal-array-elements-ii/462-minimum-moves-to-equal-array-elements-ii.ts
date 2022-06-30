function minMoves21(nums: number[]): number {
    const sum = nums.reduce((a,v) => a+v,0);
    let avg = Math.floor(sum/nums.length);
    console.log(sum, avg)
    let steps = 0;
    for(let i of nums) {
        if(i === avg) continue;
        
        steps += Math.abs(i-avg);
    }
    return steps;
};

function minMoves2(nums: number[]): number {
    nums = nums.sort((a,b) => a-b);
    //console.log(nums);
    let steps = 0;
    let j = nums.length-1;
    for(let i = 0; i < (nums.length/2); i++) {
        steps += nums[j] - nums[i];
        j--;
    }
    return steps;
};

