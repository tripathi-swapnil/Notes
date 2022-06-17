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
    
    const REQUIRES_COVER = -1;
    const CAM_PLACED = 0;
    const NODE_COVERED = 1
    
    
    let count = 0;
    
    function preOrder(node) {
        if(node === null) return NODE_COVERED; // 1
        
        let l = preOrder(node.left);
        let r = preOrder(node.right);
        
        if(l === REQUIRES_COVER || r === REQUIRES_COVER) { // -1
            count++;
            return 0;
        }
        if(l == CAM_PLACED || r == CAM_PLACED){ // 0
            return NODE_COVERED; // 1
        }
        
        return REQUIRES_COVER; -1
    }
    if(preOrder(root) === REQUIRES_COVER) count++
    
    return count;
};