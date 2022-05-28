function missingNumber(nums: number[]): number {
    // const listAvailNums = Array.from({length: nums.length+1}, ((i, j) => j));
    for(let i = 0; i <= nums.length; i++) {
        if(!nums.includes(i)) {
           return i;
        }
    }
    return -1;
    
//     console.log(listAvailNums);
    
//     const l = listAvailNums.filter(a => !nums.includes(a));
//     return l.length ? l[0] : -1;
    

};