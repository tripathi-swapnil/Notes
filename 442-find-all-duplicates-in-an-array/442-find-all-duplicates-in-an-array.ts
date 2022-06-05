function findDuplicates(nums: number[]): number[] {
    const set1 = new Set();
    const set2 = [];
    for(let num of nums) {
        if(set1.has(num)) {
            set2.push(num)
        }
        set1.add(num);
    }
    return set2;

};