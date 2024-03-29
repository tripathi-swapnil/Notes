# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        c=0
        def dfs(root,m):
            if not root:
                return
            if m<=root.val:
                nonlocal c
                c+=1
                m=root.val
            dfs(root.left,m)
            dfs(root.right,m)
        dfs(root,root.val)
        return c