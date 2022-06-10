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
function cloneGraph1(root: Node | null): Node | null {
    if(!root) return null;
    
    let map = new Map();
    
    function clone(node) {
        if(map.has(node.val)) return map.get(node.val);
        
        map.set(node.val, new Node(node.val));
        
        map.get(node.val).neighbors = node.neighbors.map(clone);
        return map.get(node.val);
    }
    
    return clone(root);
};
function cloneGraph(node: Node | null): Node | null {
  return cloneGraphByDfs(node);
}

function cloneGraphByBfs(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const clonedNode = new Node(node.val);

  const visited = new Map<Node, Node>();
  visited.set(node, clonedNode);

  const queue = [node];

  while (queue.length) {
    const current = queue.shift()!;

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        const clonedNeighbor = new Node(neighbor.val);
        visited.set(neighbor, clonedNeighbor);
        visited.get(current)!.neighbors.push(clonedNeighbor);
        queue.push(neighbor);
      } else {
        visited.get(current)!.neighbors.push(visited.get(neighbor)!);
      }
    }
  }

  return clonedNode;
}

function cloneGraphByDfs(node: Node | null): Node | null {
  if (!node) {
    return null;
  }

  const clonedNode = new Node(node.val);

  const visited = new Map<Node, Node>();
  visited.set(node, clonedNode);

  const stack = [node];

  while (stack.length) {
    const current = stack.pop()!;

    for (const neighbor of current.neighbors) {
      if (!visited.has(neighbor)) {
        const clonedNeighbor = new Node(neighbor.val);
        visited.set(neighbor, clonedNeighbor);
        visited.get(current)!.neighbors.push(clonedNeighbor);
        stack.push(neighbor);
      } else {
        visited.get(current)!.neighbors.push(visited.get(neighbor)!);
      }
    }
  }

  return clonedNode;
}