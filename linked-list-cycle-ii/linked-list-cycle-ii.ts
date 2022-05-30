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

function detectCycle(head: ListNode | null): ListNode | null {
    
    
    let current = head;
    let setList = new Set();
    while(current) {
        if(setList.has(current)) {
          return current;  
        }
        setList.add(current);
        current = current.next;
    }
    return null;
    
};