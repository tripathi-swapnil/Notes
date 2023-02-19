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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    let arr = [];
    
    function traverse(node, h) {
        if(!node) return;
        if(arr[h] == null) {
            arr[h] = [];
        }
        if(!(h&1)) {
            arr[h].push(node.val);
        } else {
            arr[h].unshift(node.val);
        }
         traverse(node.left, h+1);
         traverse(node.right, h+1);
    }
    traverse(root,0);
    return arr;
    
};