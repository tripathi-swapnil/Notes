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

function distributeCoins(root: TreeNode | null): number {
    let count = 0;
    
    function postOrder(node) {
        if(!node) return 0;
        
        const l = postOrder(node.left);
        const r = postOrder(node.right);
        //console.log(l, r);  
        count += Math.abs(l) + Math.abs(r);
        
        return node.val + l + r - 1;
    }
    postOrder(root);
    return count;

};