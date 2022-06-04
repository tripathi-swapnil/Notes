function summaryRanges(nums: number[]): string[] {
    let initialItem = null;
    let arr = [];
    for(let i = 0; i < nums.length; i++){
        //console.log(nums[i], i, initialItem)
        
        if(nums[i+1] - nums[i] > 1 || i == nums.length-1) {
            if(initialItem !== nums[i] && initialItem != null) {
                arr.push(`${initialItem}->${nums[i]}`);
            } else {
                // if(i == nums.length-1) {
                    arr.push(`${nums[i]}`)
                // } else {
                //      arr.push(`${initialItem}`);
                // }
               
            }
            initialItem = null;
            
        } else {
            if(initialItem == null) {
                initialItem =  nums[i]
            }
        }
       // console.log('--', initialItem, arr)
    }
    return arr;

};