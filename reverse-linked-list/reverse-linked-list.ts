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

function reverseList(head: ListNode | null): ListNode | null {
//     if(!head) return null;
//     let nodeList = [];
//     let current = head;
    
//     while(current) {
//         nodeList.push(current);
//         current = current.next;
//     }
//     for(var i = nodeList.length - 1; i >=0; i--) {
//         nodeList[i].next = nodeList[i-1] || null;
//     }
//     return nodeList[nodeList.length-1];
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev

};