#User function Template for python3


class Solution:
    
    #Function to detect cycle in a directed graph.
    def isCyclic(self, V, adj):
        # code here
        visited, path = set(), []
        
        def dfs(i):
            visited.add(i)
            path.append(i)
            for node in adj[i]:
                if node not in visited:
                    if dfs(node):
                        return True
                elif node in path:
                    return True
                elif node in visited and node in path:
                    return False
            
            path.pop()
            return False
            
        
        for i in range(V):
            if i not in visited and dfs(i):
                return True
        
        return False
            
            
        


#{ 
 # Driver Code Starts
#Initial Template for Python 3

import sys
sys.setrecursionlimit(10**6)
        
if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        V,E = list(map(int, input().strip().split()))
        adj = [[] for i in range(V)]
        for i in range(E):
            a,b = map(int,input().strip().split())
            adj[a].append(b)
        ob = Solution()
        
        if ob.isCyclic(V, adj):
            print(1)
        else:
            print(0)
# } Driver Code Ends