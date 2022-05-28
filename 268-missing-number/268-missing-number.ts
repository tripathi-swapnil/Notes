function missingNumber(nums: number[]): number {
    // const listAvailNums = Array.from({length: nums.length+1}, ((i, j) => j));
    const newSet = new Set<number>();
    for(let i = 0; i <= nums.length - 1; i++) {
        newSet.add(nums[i]);
    }
    // console.log(newSet);
    for(let i = 0; i <= nums.length; i++) {
       // console.log(newSet.has(i), i);
        if(!newSet.has(i) ) {
           return i;
        }
    }
    return -1;
    
//     console.log(listAvailNums);
    
//     const l = listAvailNums.filter(a => !nums.includes(a));
//     return l.length ? l[0] : -1;
    

};