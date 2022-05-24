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

function isSymmetric(root: TreeNode | null): boolean {
    if(!root) return false;
    
    if(root.left && root.right && root.left.val === root.right.val) {
        return checkSymm(root.left, root.right);
    }
    if(root.left === null && root.right === null) return true;
    
    if(root.left === null || root.right === null) return false;
    return false;

};

function checkSymm(left, right) {
    if(left === null && right === null) return true;
    
    if(left === null || right === null) return false;
    
    if(left && right && left.val === right.val) {
        return checkSymm(left.left, right.right) && checkSymm(left.right, right.left);
    }
    return false;
    
    
}