/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    if(!root) return null;
    root.next = null;
  let q = [];
  let arr = [];
  
  
    q.push(root);
  while(q.length) {
      let qLength = q.length;
      let stk = [];
      while(qLength > 0) {
            qLength--;
            let n = q.shift();
          if(n) {
              stk.push(n);
          }
            
             if(n && n.left) {
                 q.push(n.left);
             }
            if(n && n.right) {
                q.push(n.right);
             }
      }
      for(let c = 0; c < stk.length; c++) {
          // console.log(c, c+1, stk[c].val, stk[c+1]?.val || null);
          stk[c].next = stk[c+1] || null;
      }
      //arr.push(stk);
        
  }
   // console.log(arr);
    return root;
};