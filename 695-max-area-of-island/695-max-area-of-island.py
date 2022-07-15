class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        
        def needs_visit(i, j):
            return grid[i][j] == 1
        
        def is_valid(i, j):
            return 0 <= i < len(grid) and 0 <= j < len(grid[0])
        
        def dfs(r: int, c: int) -> int:
            if not is_valid(r, c) or not needs_visit(r, c):
                return 0
            
            grid[r][c] = 0
            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
        
        max_area = 0
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if needs_visit(i, j):
                    max_area = max(max_area, dfs(i, j))
                    
        return max_area