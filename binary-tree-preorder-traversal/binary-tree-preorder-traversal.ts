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

function preorderTraversal(root: TreeNode | null): number[] {
    let arr = [];
    function preorder(root){
        if(!root) return;
        arr.push(root.val)
        preorder(root.left)
        preorder(root.right);

    };
    // arr.push(root.val)
    // preorder(root.left);
    preorder(root);
    return arr;
};



