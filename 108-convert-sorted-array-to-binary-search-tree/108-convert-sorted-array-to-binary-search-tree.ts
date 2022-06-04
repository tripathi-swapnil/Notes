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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function getChild (nums, start, end){
        if(end < start) 
            return null;
        
        let mid = start + Math.floor((end - start) / 2);
        
        let node = new TreeNode(nums[mid]);
        node.left = getChild(nums, start, mid - 1);
        node.right = getChild(nums, mid+1, end);
        
        return node;
    }
    
    return getChild(nums, 0, nums.length - 1);
};