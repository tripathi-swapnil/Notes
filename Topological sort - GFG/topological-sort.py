from collections import deque 
class Solution:
    
    #Function to return list containing vertices in Topological order.
    def topoSort(self, V, adj):
        # Code here
        indegree, q, topo = {}, deque(), deque()
        
        for i in adj:
            for node in i:
                indegree[node] = indegree.get(node, 0) + 1
                
        
        for node in range(V):
            if node not in indegree:
                q.append(node)
        
        while q:
            node = q.pop()
            topo.append(node)
            
            for i in adj[node]:
                indegree[i] -= 1
                if indegree.get(i) == 0:
                    q.append(i)
        
        return topo
        
        
        
        
        
        # vis, stk = set(), deque()
        
        # def dfs(i):
        #     vis.add(i)
        #     for node in adj[i]:
        #         if node not in vis:
        #             dfs(node)
            
        #     stk.appendleft(i)
                
            
        
        # for i in reversed(range(V)):
        #     if i not in vis:
        #         dfs(i)
                
        # print(stk)
        
        # return stk
                


#{ 
 # Driver Code Starts
# Driver Program

import sys
sys.setrecursionlimit(10**6)
        
def check(graph, N, res):
    if N!=len(res):
        return False
    map=[0]*N
    for i in range(N):
        map[res[i]]=i
    for i in range(N):
        for v in graph[i]:
            if map[i] > map[v]:
                return False
    return True

if __name__=='__main__':
    t = int(input())
    for i in range(t):
        e,N = list(map(int, input().strip().split()))
        adj = [[] for i in range(N)]
        
        for i in range(e):
            u,v=map(int,input().split())
            adj[u].append(v)
            
        ob = Solution()
        
        res = ob.topoSort(N, adj)
        
        if check(adj, N, res):
            print(1)
        else:
            print(0)
# Contributed By: Harshit Sidhwa

# } Driver Code Ends