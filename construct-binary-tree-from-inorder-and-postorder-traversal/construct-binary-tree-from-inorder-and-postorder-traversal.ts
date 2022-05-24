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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  function innerBuildTree(ix: number, iy: number, px: number, py: number) {
    if (ix > iy) return null;
    const value = postorder[py];
    const node = new TreeNode(value);
    if (ix === iy) return node;
    const index = findIndexInRange(inorder, ix, iy, value);
    node.left = innerBuildTree(ix, index - 1, px, px - ix + index - 1);
    node.right = innerBuildTree(index + 1, iy, py - iy + index, py - 1);
    return node;
  }
  return innerBuildTree(0, inorder.length-1, 0, postorder.length-1);
};
function findIndexInRange(items: number[], x: number, y: number, value: number) {
  let i = x;
  while (i <= y) {
    if (items[i] === value) return i;
    i++;
  }
  return i;
}