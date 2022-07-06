# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k == 0 or head is None or head.next is None:
            return head
        lenNode = 0
        current = head
        while current:
            lenNode += 1
            current = current.next
            
        lenRotate = k%lenNode if lenNode < k else k
        
        while lenRotate > 0:
            current = head
            root = head
            while current and current.next != None and current.next.next != None:
                current = current.next
                
            temp = current.next
            current.next = None
            temp.next = head
            head = temp
            lenRotate -= 1
 
        
        return head
            
        