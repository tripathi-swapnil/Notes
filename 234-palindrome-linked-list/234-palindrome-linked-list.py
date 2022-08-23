# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        q = deque()
        
        while head:
            q.append(head.val)
            head = head.next
        
        while len(q) > 1:
            left = q.popleft()
            right = q.pop()
            if left != right:
                return False
        return True