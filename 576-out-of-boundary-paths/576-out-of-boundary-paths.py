class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        MOD = 10**9 + 7
        
        def is_out_of_bound(row, col):
            return row < 0 or row >= m or col < 0 or col >= n
        
        @cache
        def dfs(r: int, c: int, current: int) -> int:
                    
            if is_out_of_bound(r, c):
                return 1
        
            if current == 0:
                return 0
            
            return dfs(r + 1, c, current - 1) + dfs(r - 1, c, current - 1) + dfs(r, c + 1, current - 1) + dfs(r, c - 1, current - 1)
        
        return dfs(startRow, startColumn, maxMove) % MOD
      