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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // console.log(this.head);
    let dummy = new ListNode(-1, head);
    let current = dummy;
    while(current) {
          if(current.next && current.next.val === val) {
             current.next =  current?.next?.next;
          } else {
              current = current.next;
          }
    }
    return dummy.next;

};