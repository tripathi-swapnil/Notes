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
    return checkSymm(root.left, root.right);

};

function checkSymm(left, right) {
    if(!left && !right) return true;
    
    if(left?.val === right?.val) {
        return checkSymm(left.left, right.right) && checkSymm(left.right, right.left);
    }
    return false;
    
    
}