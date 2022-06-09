function findCenter(edges: number[][]): number {
    let frequencey = {};
    let node = 0;
    
    for(let i = 0; i < edges.length;i++) {
        let [first, second] = edges[i];
        if(frequencey[first]) {
            frequencey[first] += 1;
            node  = first;
            continue;
        }
        frequencey[first] = 1
        if(frequencey[second]) {
            frequencey[second] += 1;
            node  = second;
            continue;
        }
        frequencey[second] = 1;
    }
    return node;

};