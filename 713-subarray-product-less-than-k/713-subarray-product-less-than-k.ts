function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if(k <= 1) return 0;
    let count = 0;
    let prev = 1;
    let left = 0;
    
    for(let i = 0; i < nums.length;) {
        prev *= nums[i];
        
        while(prev >= k) {
            prev /= nums[left]
            left++;
        }
        count += i -left +1; 
        i++;
    }
    
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] < k){
//             count++;
//             prev = nums[i]
//         } else {
//             continue;
//         }
        
//         for(let j = i+1; j < nums.length; j++) {
//             if(prev * nums[j] < k) {
//                 prev *= nums[j];
//                 count++;
//             } else {
//                 j = nums.length - 1;
//             }
//         }
//     }
    return count;

};