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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if(!root1 || !root2) return root1 ?? root2 ?? null;
    
    if(root1?.val !== null && root2?.val !== null) {
        root1.val += root2.val;
    }
    if(!root1?.left) {
       root1.left = root2.left;
    } else{ 
        mergeTrees(root1.left, root2.left);
    }
    if(!root1?.right) {
       root1.right = root2.right;
    } else {
        mergeTrees(root1.right, root2.right);
    }
    return root1;
    
    
};
