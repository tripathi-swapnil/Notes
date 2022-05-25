function search(nums: number[], target: number): number {
    function isMatchingItem(start, end) {
        if (start > end) return -1;

        const getMid = Math.floor(end+start/2);
        if(target == nums[getMid]) {
            return getMid;
        }
        if(target < nums[getMid]) {
            return isMatchingItem(start, getMid -1);
        }

        if(target > nums[getMid]) {
            return isMatchingItem(getMid+1, end);
        }
        return 0; 
    }
    return isMatchingItem(0, nums.length -1);
    

};

