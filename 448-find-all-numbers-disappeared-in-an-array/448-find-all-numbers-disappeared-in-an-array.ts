function findDisappearedNumbers(nums1: number[]): number[] {
    const arr = [];
    const nums = new Set(nums1);
    for(let i = 1; i <= nums1.length; i++) {
        if(!nums.has(i)) arr.push(i);
    }
    return arr;
};