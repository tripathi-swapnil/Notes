
const mod = 1e9 + 7;

function countPaths(n: number, roads: number[][]): number {
    const adj = Array.from({length: n}, (a) => []);
    for (const [u, v, cost] of roads) {
        adj[u].push([v, cost]);
        adj[v].push([u, cost]);
    }
    return dijkstra(n, adj, 0);
};

const dijkstra = (n, g, source) => { // g: adjacent graph list, n: total vertices
    let dist = Array(n).fill(Number.MAX_SAFE_INTEGER);
    let ways = Array(n).fill(0);
    console.log(dist, ways);
    const pq = new MinPriorityQueue({ priority: x => x[0] * 200 + x[1] });
    dist[0] = 0;
    ways[0] = 1;
    pq.enqueue([0, source]);
   // console.log(g);
    while (pq.size()) {
        let cur = pq.dequeue().element;
        //console.log(cur);
        let [curCost, curNode] = cur;
        if (dist[curNode] != curCost) continue;
        for (const [node, cost] of g[curNode]) { // parse neighbour node
            let newDis = curCost + cost;
            if (newDis == dist[node]) {
                ways[node] += ways[curNode];
                ways[node] %= mod;
            } else if (newDis < dist[node]) {
                dist[node] = newDis;
                ways[node] = ways[curNode];
                pq.enqueue([dist[node], node]);
            }
        }
    }
    return ways[n - 1];
};