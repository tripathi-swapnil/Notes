# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        def bst(num, start, end):
            if end < start:
                return None
            
            mid = start + (end- start)//2
            
            node = TreeNode(num[mid])
            node.left = bst(num, start, mid-1)
            node.right = bst(num, mid+1, end)
            return node
            
        return bst(nums, 0, len(nums)-1)
        
        