# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeZeroSumSublists(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        hash = { 0: dummy }
        
        prefix = 0
        current = head
        
        while current:
            prefix += current.val 
            hash[prefix] = current
            current = current.next
        
        prefix = 0
        current = dummy
        
        while current:
            prefix += current.val
            current.next = hash[prefix].next
            current = current.next
        
        return dummy.next
        