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

// A node which reqires cover : return -1
// A node where camera is placed : return 0
// A node which is already covered : return 1

function minCameraCover(root: TreeNode | null): number {
    
    let count = 0;
    
    function preOrder(node) {
        if(node === null) return 1;
        
        let l = preOrder(node.left);
        let r = preOrder(node.right);
        
        if(l === -1 || r === -1) {
            count++;
            return 0;
        }
        if(l == 0 || r == 0){
            return 1;
        }
        
        return -1;
    }
    if(preOrder(root) === -1) count++
    
    return count;
};