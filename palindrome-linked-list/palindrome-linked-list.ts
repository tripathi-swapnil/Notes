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

function isPalindrome(head: ListNode | null): boolean {
    let node = head;
    let flag = true;
    
    function gotoEnd(node1) {
        node1.next && gotoEnd(node1.next);
        if(node1.val !== node.val) {
           flag = false;
         }
        node = node.next;
    }
    gotoEnd(head);
    return flag;

};