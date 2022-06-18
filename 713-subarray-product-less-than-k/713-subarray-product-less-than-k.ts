function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if(!k) return 0;
    let count = 0;
    let prev = 1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < k){
            count++;
            prev = nums[i]
            //console.log(nums[i], count, prev, '----1');
        } else {
            continue;
        }
        
        for(let j = i+1; j < nums.length; j++) {
            //if(nums[j] >= k) continue; 
            if(prev * nums[j] < k) {
                prev *= nums[j];
                count++;
            } else {
                j = nums.length - 1;
            }
            // console.log(nums[i], count, prev);
        }
    }
    return count;

};