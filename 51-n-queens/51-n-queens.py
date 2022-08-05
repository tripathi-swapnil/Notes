class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        board = [['.']*n for _ in range(n)]
        result = []
        col = [False]*n
        ld, rd = [False]*(2*n - 1), [False]*(2*n - 1)
        def solve(r):
            if r == n:
                result.append([''.join(row) for row in board])
                return
            for i in range(n):
                if ld[r+i] or col[i] or rd[r-i+n-1]:
                    continue
                
                ld[r+i] = col[i] = rd[r-i+n-1] = True
                board[r][i] = 'Q'

                solve(r+1)

                ld[r+i] = col[i] = rd[r-i+n-1] = False
                board[r][i] = '.'
                
        solve(0)
        return result
            
        
        
        
        
        
        

        
#         function solveNQueens(n: number): string[][] {
#     const board = Array.from({length: n}, () => Array.from({length: n}, () => '.'));
#     const result = [], ld = [], rd = [], col = [];
    
#     function boardSolve(row) {
#         if(row === n) {
#            result.push(board.map(a => a.join('')));
#             return;
#         }
        
#         for(let i = 0; i < n; i++) {
#             if(ld[row+i] || col[i] || rd[row-i+n-1]) continue;
            
#             ld[row+i] = col[i] = rd[row-i+n-1] = true;
#             board[row][i] = 'Q';
            
#             boardSolve(row+1);
            
#             ld[row+i] = col[i] = rd[row-i+n-1] = false;
#             board[row][i] = '.';
            
#         }
#     }
#     boardSolve(0);
#     return result;

# };
        