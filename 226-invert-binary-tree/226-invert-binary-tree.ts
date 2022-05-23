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

function invertTree(root: TreeNode | null): TreeNode | null {
    return swapSibling(root);

};

function swapSibling(node: TreeNode) {
    const leftChild = node?.left;
    const rightChild = node?.right;
    if(leftChild || rightChild) {
        // node.left = rightChild;
        // node.right = leftChild;
        node.left = swapSibling(rightChild)
        node.right = swapSibling(leftChild);
     }
    return node;
    
    
}