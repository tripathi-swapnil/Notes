# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        list = set()
        head1, head2 = headA, headB
        
        while head1 or head2:
            if head1 in list:
                return head1
            if head1 is not None:
                list.add(head1)
                
            if head2 in list:
                return head2
            if head2 is not None:
                list.add(head2)
            
            head1 = head1.next if head1 else None
            head2 = head2.next if head2 else None
        return None
        