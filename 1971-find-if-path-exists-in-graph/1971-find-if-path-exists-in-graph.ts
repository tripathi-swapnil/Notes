function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let arr = Array(n).fill([]).map(a => []);
    
    for(let [v, s] of edges) {
        arr[s].push(v);
        arr[v].push(s);
    }
    
    const visited = new Set();
    visited.add(source);
    let queue = [source];
    
    while(queue.length) {
          let item = queue.pop();
        console.log(item);
          visited.add(item);
        if(item === destination) return true;
        
          for(let adj of arr[item]) {
              if(!visited.has(adj)){
                  queue.push(adj);
                visited.add(adj);
              }
          }
    }
    return false;
}

function validPath1(n: number, edges: number[][], source: number, destination: number): boolean {
    let arr = Array(n).fill([]).map(a => []);
    let found = false;
    
    for(let edge of edges) {
        const [s,v] = edge;
        if((s === source && v === destination) || (v === source && s === destination)) {
           return true;
        }
        arr[s].push(v)
        arr[v].push(s);
    }
    const visited = new Set();
    
    function dfs(at) {
        if (visited.has(at)) return;
        visited.add(at);
        if (at === destination) {found = true; return;}
        for (const v of arr[at]) {
            dfs(v);
            visited.add(v)
        }
        visited.delete(at);
    }
    dfs(source);
    return found;
    
};

// 3
// [[0,1],[1,2],[2,0]]
// 0
// 2
// 6
// [[0,1],[0,2],[3,5],[5,4],[4,3]]
// 0
// 5