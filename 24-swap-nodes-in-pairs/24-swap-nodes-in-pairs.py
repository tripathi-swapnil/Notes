# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        dummy = ListNode(0, head);
        parent, current = dummy, head
        
        while current:
            next = current.next
            if next:
                parent.next, current.next, next.next  = next, next.next, current
                
                parent = current
                current = parent.next
            else:
                break
        return dummy.next
            
        