function solveNQueens(n: number): string[][] {
    const board = Array.from({length: n}, () => Array.from({length: n}, () => '.'));
    const result = [], ld = [], rd = [], col = [];
    
    function boardSolve(row) {
        if(row === n) {
           result.push(board.map(a => a.join('')));
            return;
        }
        
        for(let i = 0; i < n; i++) {
            if(ld[row+i] || col[i] || rd[row-i+n-1]) continue;
            
            ld[row+i] = col[i] = rd[row-i+n-1] = true;
            board[row][i] = 'Q';
            
            boardSolve(row+1);
            
            ld[row+i] = col[i] = rd[row-i+n-1] = false;
            board[row][i] = '.';
            
        }
    }
    boardSolve(0);
    return result;

};