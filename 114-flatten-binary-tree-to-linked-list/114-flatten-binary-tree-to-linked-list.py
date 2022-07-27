# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        if not root:
            return None
        
        rightnode = root.right
        if root.left is not None:
            self.flatten(root.left)
            root.right = root.left
            root.left = None
            
            current = root
            while current.right is not None:
                current = current.right

            current.right = rightnode;
        
        self.flatten(root.right)
        
        
        
        
        