function arrayChange(nums: number[], operations: number[][]): number[] {
    const map = new Map();
    for(let i in nums){
        map.set(nums[i], i)
    }
    for(const [f, r] of operations){
        const i = map.get(f)
        map.set(r, i)
        nums[i] = r
    }
    return nums

};