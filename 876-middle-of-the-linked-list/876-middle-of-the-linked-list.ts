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

function middleNode(head: ListNode | null): ListNode | null {
    if(!head) return null;
    let current = head.next;
    let items = [head];
    while(current) {
        items.push(current);
        current = current.next;
    }
    const len = items.length;
    if(len%2 === 0) return items[(len/2)];
    return items[Math.floor(len/2)];

};