function maximumUniqueSubarray(nums: number[]): number {
    let map = new Map();
    let maxSum = -Infinity;
    let sumArr = [];
    let sum = 0;
    let prevMatched = -1;
    let refI = 0;
    
    for(let i = 0; i < nums.length; i++) {
         sumArr[i] = (sumArr[i - 1] ?? 0) + nums[i];
        
        if(map.has(nums[i])) {
            
            prevMatched = map.get(nums[i]);
            if(prevMatched >= refI) {
               refI = prevMatched + 1;
               sum = sumArr[i] - sumArr[prevMatched];
            } else {
               // console.log('else', sum, nums[i])
                sum += nums[i];
            }
            
           // console.log(sumArr, sumArr[i], sumArr[prevMatched], nums[i], sum)
        } else {
            
            sum += nums[i];
            //console.log(sum)
        }
        map.set(nums[i], i);
        maxSum = Math.max(sum, maxSum);
    }
   // console.log(map, sum);
    return maxSum;

};
    
   // [4,2,4,5,6]
         