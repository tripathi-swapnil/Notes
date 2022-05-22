function topKFrequent(nums: number[], k: number): number[] {
    const obj = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(obj.has(nums[i])) {
            obj.set(nums[i], obj.get(nums[i]) + 1);
        } else {
            obj.set(nums[i], 1);
        }
    }
    
    const item = [...obj].sort((item, item1) => {
        if (item[1] == item1[1])
            return item1[0] - item[0];
        else
            return item1[1] - item[1];
    });
    
    return Array.from({length: k}).map((i, j):any => {
                                       return item[j][0];
    });
    

};