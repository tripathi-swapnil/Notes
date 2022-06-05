/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let i = 1; 
    for(let j = 0; j < nums.length;) {
        //console.log({j});
        if(nums[i] < nums[j]) {
            const a = nums[i]
            nums[i] = nums[j];
            nums[j]= a;
          //  console.log(nums, 'after eqach swap', j, i);
            
            // continue;
         }
        i++;
        if(i > nums.length-1) {
           j++;
            i = j+1;
         //   console.log(nums);
        }
        
        
    }
};

// [2,0,2,1,1,0]
// [0,2,2,1,1,0]
// [0,1,1,0,2,2]