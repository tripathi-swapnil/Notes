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

function findTarget(root: TreeNode | null, k: number): boolean {
    let sumMap = new Set();
    
    function getValue(node) {
        if(!node) return false;
        
        if(sumMap.has(node.val)){
            return true;
        }
        sumMap.add(k - node.val);
        return getValue(node?.left) || getValue(node?.right);
        
    }
    return getValue(root);

};