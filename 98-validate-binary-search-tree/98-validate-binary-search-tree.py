# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode], left = None, right = None) -> bool:
        if not root:
            return True
        
        if (left and root.val <= left.val) or (right and root.val >= right.val):
            return False
        
        return self.isValidBST(root.left, left, root) and self.isValidBST(root.right, root, right);
        