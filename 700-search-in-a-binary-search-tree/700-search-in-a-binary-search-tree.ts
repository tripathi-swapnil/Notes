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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    function findBST(node: TreeNode | null) {
        if(!node) return null;
    
        if(node.val === val) {
            return node;
         }
        return searchBST(node.left, val) || searchBST(node.right, val);
    }
    
    return findBST(root);

};