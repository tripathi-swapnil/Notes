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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let nodeList = [];
    let current = head;
    while(current) {
        nodeList.push(current);
        current = current.next;
    }
    // console.log(nodeList, nodeList.length);
    
    const prevIndex = nodeList.length - 1- n;
    
    if (nodeList.length < n) return null;
    if (nodeList.length === n) return nodeList[1] || null;
    
    
    nodeList[prevIndex].next = nodeList[prevIndex+2] || null;
    return nodeList[0];
    
    
};