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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    
    let node1Arr = [];
    let node2Arr = [];
    
    function updateArr(node, target, arr) {
        if(!node) return false;
        
        if(node === target) {
            arr.push(node);
            return true;
        };
        const temp = updateArr(node.left, target, arr) || updateArr(node.right, target, arr);
        if(temp) {
            arr.push(node);
        }
        return temp;
    }
    updateArr(root, p, node1Arr);
    updateArr(root, q, node2Arr);
    
    let lca = node1Arr[node1Arr.length-1];
    for(let i = 0; i < node1Arr.length; i++) {
        if(node1Arr[node1Arr.length -1 - i] === node2Arr[node2Arr.length -1 - i]) {
            lca = node1Arr[node1Arr.length -1 - i];
        }
    }
    // console.log(lca);
    return lca;
	
};
