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
    let itemExists = false;
    
    function getValue(node) {
        if(!node || itemExists) return;
        
        if(sumMap.has(node.val)){
            itemExists = true;
            return;
        }
        sumMap.add(k - node.val);
        getValue(node?.left)
        getValue(node?.right);
        
    }
    getValue(root);
    return itemExists;

};