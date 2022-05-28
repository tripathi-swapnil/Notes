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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root) return new TreeNode(val, null);
    if(root.val > val) {
        if(!root.left) root.left = new TreeNode(val, null)
        insertIntoBST(root.left, val)
    }
    if(root.val < val) {
        if(!root.right) root.right = new TreeNode(val, null)
        insertIntoBST(root.right, val)
    }
    return root;
};