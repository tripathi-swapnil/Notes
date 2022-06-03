function containsDuplicate(nums: number[]): boolean {
    const numsMap: Object = {};
    for(var currentIndex = 0; currentIndex < nums.length; currentIndex++) {
        const currentValue = nums[currentIndex];
        if(numsMap[currentValue]) {
           return true;
        }
        numsMap[currentValue] = 1;
    }
    return false;
};