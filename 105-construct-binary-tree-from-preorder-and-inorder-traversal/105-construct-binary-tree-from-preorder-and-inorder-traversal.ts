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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length == 0) return null;
  let rootIdxInInorder = getIndex(inorder, preorder[0])

  let left = buildTree(
    preorder.slice(1, rootIdxInInorder + 1),
    inorder.slice(0, rootIdxInInorder)
  );

  let right = buildTree(
    preorder.slice(rootIdxInInorder + 1),
    inorder.slice(rootIdxInInorder + 1)
  );
  return new TreeNode(preorder[0], left, right);
}
function getIndex(inorder, val) {
    let i = 0;
    while(val !==inorder[i]) {
          i++;
    }
    return i;
}