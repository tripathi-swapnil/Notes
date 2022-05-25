function search(nums: number[], target: number): number {
    return isMatchingItem(nums, 0, nums.length -1 , target);
    

};

function isMatchingItem(nums, start, end, target) {
    // console.log(start, end, nums);
    //if(start === end && nums[start] == target) return target;
    if (start > end) return -1;
    
    const getMid = Math.floor(end+start/2);
    if(target == nums[getMid]) {
        return getMid;
    }
    
    // console.log({getMid});
    if(target < nums[getMid]) {
        return isMatchingItem(nums,start, getMid -1, target);
    }
    
    if(target > nums[getMid]) {
        return isMatchingItem(nums, getMid+1, end, target);
    }
    return 0;
    
    
}