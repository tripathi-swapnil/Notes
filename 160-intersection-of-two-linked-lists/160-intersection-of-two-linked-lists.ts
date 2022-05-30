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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let currentA = headA;
    let currentB = headB;
    const list = new Set();
    
    while(currentA || currentB ) {
        
        if(currentB && list.has(currentB)) {
           return currentB;
        } 
        if(currentB){
            list.add(currentB);
        }
        
        if(currentA && list.has(currentA)) {
           return currentA;
        }
        if(currentA) {
            list.add(currentA);
        }
        //console.log(list);
        currentA = currentA?.next;
        currentB = currentB?.next
    }
        //console.log(list);
    return null;
    
};
    
    
    // 10 2 
    // 1 3 4 5 6 7 8 9 2