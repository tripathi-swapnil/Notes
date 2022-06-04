/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    let arr = [];
    function levelOrder (node, h) {
        if(!node) return;
        
        if(arr[h] == null) arr[h] = [];
        
        arr[h].push(node.val);
        
        levelOrder(node.left, h+1);
        levelOrder(node.right, h+1)
    }
    levelOrder(root, 0);
    return arr;
}

function levelOrder1(root: TreeNode | null): number[][] {
    let result:number[][] = [];
    let q = [];
    if(!root) return result;
    q.push(root);
    
    
    while(q.length) {
        
        const stk = [];
        let qCount = q.length;
        
        while(qCount > 0) {
            qCount--;
            const item = q.shift();
            if(item) {
               stk.push(item.val); 
            }
            
            if(item && item.left) {
                q.push(item.left)
            }
            if(item && item.right) {
                q.push(item.right);
            }
        }
        result.push(stk);
        
        
    }
    return result;

};