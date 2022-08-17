# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(float('-inf'))
        
        current = head
        while current:
            c = dummy
            while c and current.val > c.val:
                prev = c
                c = c.next
            prev.next = current
            current = current.next
            prev.next.next = c
            
        return dummy.next
        