function minimumTotal(triangle: number[][]): number {
    for(let i = 1; i < triangle.length; i++) {
        const itemList = triangle[i];
        for(let j = 0; j < itemList.length; j++) {
            triangle[i][j] += Math.min(triangle[i-1][j] ?? Number.MAX_VALUE, triangle[i-1][j-1] ?? Number.MAX_VALUE);
        }
        
    }
    return Math.min(...triangle[triangle.length - 1]);
};
  
  

