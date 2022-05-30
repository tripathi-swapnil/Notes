/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
    if(head === null) return null;
    
    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    
    while(true) {
         if (!odd || !even || !even.next) {
             odd.next = evenHead;
             break;
         }
        odd.next = even.next;
        odd = odd.next;
        if(!odd.next) {
           even.next = null;
           odd.next = evenHead;
           break;
         }
        even.next = odd.next;
        even = odd.next;
          
    }
    return head;
    
};




    
    
// ODD =  1     3     5 
// EVEN =    2     4
    