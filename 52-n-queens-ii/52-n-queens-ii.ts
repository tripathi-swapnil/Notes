function totalNQueens(n: number): number {
    
    const col = [], ld = [], rd = [];
    let result = 0;
    
    function getCount(row) {
        if(row === n) {
           result++;
           return;
         }
        
        for(let i = 0; i < n; i++) {
            if(col[i] || ld[row+i] || rd[row-i+n-1]) continue;
            
            col[i] = ld[row+i] = rd[row-i+n-1] = true;
            getCount(row+1);
            
            col[i] = ld[row+i] = rd[row-i+n-1] = false;
            
        }
    }
    getCount(0);
    return result;

};