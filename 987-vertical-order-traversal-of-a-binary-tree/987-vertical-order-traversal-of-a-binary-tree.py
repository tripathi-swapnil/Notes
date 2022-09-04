# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def helper(self, placement,level, root, dic, limits):
        if(not root):
            return
        dic[placement].append((level, root.val))
        limits[0] = min(limits[0], placement)
        limits[1] = max(limits[1], placement)
        
        self.helper(placement-1, level+1, root.left, dic, limits)
        self.helper(placement+1, level+1, root.right, dic, limits)
		
    def verticalTraversal(self, root: Optional[TreeNode]) -> List[List[int]]:
        dic = defaultdict(list)
        limits = [float('inf'), float('-inf')]
        
        self.helper(0,0, root, dic, limits)
        result = []
        
        for i in range(limits[0], limits[1]+1):
            temp = []
            for j in sorted(dic[i]):
                temp.append(j[1])
            result.append(temp)
        return result