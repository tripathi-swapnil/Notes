function sortedSquares(nums: number[]): number[] {
    // const negetiveArray = [];
    // const poitiveArray = [];
    
    
    return nums.map(a => a*a).sort((a,b) => a-b);
    
};