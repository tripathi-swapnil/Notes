/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(root: Node | null): Node | null {
    if(!root) return null;
    let map = new Map();
    
    function clone(node) {
        if(map.has(node.val)) {
            return map.get(node.val);
        }
        map.set(node.val, new Node(node.val));
        
        map.get(node.val).neighbors = node.neighbors.map(clone);
        return map.get(node.val);
    }
    
    return clone(root);
};