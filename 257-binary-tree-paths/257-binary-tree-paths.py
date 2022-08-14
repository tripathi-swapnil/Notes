# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        answer = []
        def iterateNode(node, arr):
            if not node:
                return
            
            if not node.left and not node.right:
                answer.append(arr[::]+ [str(node.val)])
            
            else:
                iterateNode(node.left, arr + [str(node.val)] )
                iterateNode(node.right, arr + [str(node.val)] )
                
        iterateNode(root, [])
        return [ *map('->'.join, answer) ]
        