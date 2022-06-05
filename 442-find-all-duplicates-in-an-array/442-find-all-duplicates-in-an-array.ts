function findDuplicates(nums: number[]): number[] {
    let dups = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            dups.push(Math.abs(nums[i]));
        }
        nums[index] *= -1;
        //console.log(nums);
    }
    return dups;
    // const set1 = new Set();
    // const set2 = [];
    // for(let num of nums) {
    //     if(set1.has(num)) {
    //         set2.push(num)
    //     }
    //     set1.add(num);
    // }
    // return set2;

};