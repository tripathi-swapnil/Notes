# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        if not preorder:
            return None
            
        indexroot = self.getIndex(inorder, preorder[0])
        
        leftnode = self.buildTree(preorder[1:indexroot + 1], inorder[0:indexroot])
        rightnode = self.buildTree(preorder[indexroot+1:], inorder[indexroot+1:])
        
        return TreeNode(preorder[0], leftnode, rightnode)
    
    def getIndex(self, inorder, node):
        for i, v in enumerate(inorder):
            if v == node:
                return i
        return 0