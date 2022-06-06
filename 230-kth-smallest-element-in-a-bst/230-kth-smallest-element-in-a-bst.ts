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

function kthSmallest(root: TreeNode | null, k: number): number {
    let arr = [];
    
    function inOrder(node) {
        if(!node || arr.length === k) return 
        inOrder(node.left);
        if(arr.length < k) {
          arr.push(node.val);   
        }
        inOrder(node.right);
    }
    //console.log(arr);
    inOrder(root);
    return arr[arr.length-1];

};