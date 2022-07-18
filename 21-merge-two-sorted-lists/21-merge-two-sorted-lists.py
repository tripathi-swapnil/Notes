# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        
        if list1.val < list2.val:
            list1.next = self.mergeTwoLists(list1.next, list2)
            return list1
        else:
            list2.next = self.mergeTwoLists(list1, list2.next)
            return list2
        
            
#         current = list1
#         current2 = list2
#         newnode = ListNode()
#         headnew = newnode
        
#         while current.next or current.next:
#             print(headnew)
#             if current.val > current2.val:
#                 headnew.next = current2
#                 headnew = headnew.next
#                 headnew.next = current
                
#             else:
#                 headnew.next = current
#                 headnew = headnew.next
#                 headnew.next = current2
            
#             current = current.next
#             current2 = current2.next
#             headnew = headnew.next
            
#         return newnode.next
            
            
        