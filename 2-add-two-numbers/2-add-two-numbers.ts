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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let c1 = l1;
    let c2 = l2;
    let nodeFinal: ListNode;
    let currentNode = nodeFinal;
    let carryForward = 0;
    
    while(c1!= null || c2!=null || carryForward != 0) {
        let sum = (c1?.val || 0 )+ (c2?.val || 0) + carryForward;
        //console.log({sum}, c1?.val, c2?.val);
        let newSum = sum > 9 ? sum%10 : sum;
        if(sum > 9) {
            carryForward = 1;
        } else {
            // if()
            carryForward = 0;
        }
        const nodeRef = getNode(newSum);
        
        if(!nodeFinal) {
           nodeFinal = nodeRef;
           currentNode = nodeRef;
        } else {
           currentNode.next = nodeRef; 
           currentNode = currentNode.next;
        
        }
        //console.log(nodeFinal);
        
        c1 = c1?.next ?? null;
        c2 = c2?.next ?? null;
        
    }
        return nodeFinal;
};
    function getNode(v) {
        return new ListNode(v, null);
    }