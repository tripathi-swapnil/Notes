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

function maxPathSum(root: TreeNode | null): number {
    
    let count = -Infinity;
    
    function inOrder(node) {
		// Base case / hit a null
		if (!node) return 0;

		let left = inOrder(node.left),
			right = inOrder(node.right),
			allSum = left + right + node.val,
			leftNodeSum = left + node.val,
			rightNodeSum = right + node.val;

		// Max is all possible combinations
		count = Math.max(count, node.val, allSum, leftNodeSum, rightNodeSum);
		
		// Return the MAX path, which can be node.val, left + node.val, or right + node.val
		return Math.max(leftNodeSum, rightNodeSum, node.val);
	};
    
    // {
    //     if(!node) return;
    //     inOrder(node.left)
    //     // console.log(count, node.val + node.left?.val ?? 0 + node.right?.val ?? 0);
    //     count = Math.max(count, node.val, node.val + (node.left?.val ?? 0) + (node.right?.val ?? 0), node.val + (node.left?.val ?? 0), (node.right?.val ?? 0)+ node.val);
    //     inOrder(node.right)
    // }
    inOrder(root);
    return count;
};