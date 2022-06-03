function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if(!k) return false;
    
    let setList = nums.slice(1, k+1);
    
    for(let i = 0; i < nums.length-1; i++) {
       // console.log(setList);
        if(setList.includes(nums[i])) {
           return true;
        }
        setList.shift();
        if(i+k+1 < nums.length) {
           setList.push(nums[i+k+1]);
        }
    }
    return false;
    
};