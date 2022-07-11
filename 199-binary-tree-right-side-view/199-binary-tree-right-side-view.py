# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def __init__(self):
        self.dict = {}
        
    def levelOrder(self, node, l):
        if not node:
            return
        
        self.dict[l] = node.val
        self.levelOrder(node.left, l+1)
        self.levelOrder(node.right, l+1)
        
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        self.levelOrder(root, 0)
        return self.dict.values()
    