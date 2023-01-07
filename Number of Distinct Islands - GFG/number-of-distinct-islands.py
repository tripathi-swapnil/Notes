#User function Template for python3

import sys
from typing import List
sys.setrecursionlimit(10**8)
class Solution:
    def countDistinctIslands(self, grid : List[List[int]]) -> int:
        # code here
        rows, cols = len(grid), len(grid[0])
        visited = set()
        
        def dfs(i, j, delta, pi, pj):
            visited.add((i,j))
            delta.add((i-pi, j-pj))
            corners = [(1,0), (0,1),(0,-1),(-1,0)]
            for r,c in corners:
                x, y = i + r, j+ c
                if 0 <= x < rows and 0 <= y < cols and (x,y) not in visited and  grid[x][y] == 1:
                    dfs(x, y, delta,pi, pj)
        
        delta_set = set()
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 1 and (i,j) not in visited:
                    delta = set()
                    dfs(i, j, delta, i, j)
                    delta_set.add(frozenset(delta))
        # print(delta_set)
        
        return len(delta_set)
        
        
            
            
            


#{ 
 # Driver Code Starts
#Initial Template for Python 3

if __name__=="__main__":
    for _ in range(int(input())):
        n,m=map(int,input().strip().split())
        grid=[]
        for i in range(n):
            grid.append([int(i) for i in input().strip().split()])
        obj=Solution()
        print(obj.countDistinctIslands(grid))
# } Driver Code Ends