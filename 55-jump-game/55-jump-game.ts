function canJump(nums: number[]): boolean {
    let mapJumpIndex = 0;
    
    for(var i = 0; i <= mapJumpIndex; i++) {
        
        mapJumpIndex = Math.max(mapJumpIndex, nums[i]+i);
        if(mapJumpIndex >= nums.length - 1) return true;
    }
    return false;
}; 


// [
//     0 : 2, 2 (0 + 2)
//     1 : 3, 4   (1+ 3)
// ]


// [2, 3, 0, 0, 4, 5,6]
//  2  4  2  3  8, 
     
     
// [ 3, 2, 1, 0, 4]
//   3  3. 3, 3,   
 


//        i
//      i
//   i
//   0, 1, 2, 3  4
//  [2, 3, 1, 1, 4]




 


