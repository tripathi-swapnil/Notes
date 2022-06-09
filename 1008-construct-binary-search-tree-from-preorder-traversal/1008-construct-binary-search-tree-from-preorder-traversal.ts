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

function bstFromPreorder(preorder: number[]): TreeNode | null {
    function getNode(arr) {
        if(arr.length <= 0) return null;
        const [first, ...rest] = arr;
        
        const node = new TreeNode(first, null, null);
       
        
        node.left = getNode(arr.filter(a => a < first));
        node.right = getNode(arr.filter(a => a > first));
        return node;
    }
    return getNode(preorder);
};