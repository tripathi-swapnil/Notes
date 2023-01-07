#User function Template for python3


class Solution:
    
    #Function to detect cycle in a directed graph.
    def isCyclic(self, V, adj):
        # code here
        visited = set()
        
        def dfs(i, path):
            visited.add(i)
            path.add(i)
            for node in adj[i]:
                if node in path:
                    return True
                
                if node not in visited and dfs(node, path):
                    return True
            
            path.remove(i)
            return False
            
        
        for i in range(V):
            if i not in visited and dfs(i, set()):
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