/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let count = 0;
    for(let i =0; i < nums.length; i++) {
        if(nums[i] === 0) {
            count++;
            continue;
        }
        let temp = nums[i - count];
        nums[i - count] = nums[i];
        nums[i] = temp;
    }
};