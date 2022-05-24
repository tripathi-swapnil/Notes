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
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    
    if(root.left == null && root.right == null) return 1;
    
    if(root.left !== null && root.right !== null) {
        return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
    }
    if(root.left !== null|| root.right !== null) {
        return 1 + maxDepth(root.left ?? root.right);
    }
}