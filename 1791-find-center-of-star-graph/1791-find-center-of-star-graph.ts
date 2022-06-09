function findCenter(e: number[][]): number {
    return e[0][0] == e[1][0] || e[0][0] == e[1][1] ? e[0][0] : e[0][1];
//     let frequencey = {};
//     let node = 0;
    
//     for(let i = 0; i < edges.length;i++) {
//         let [first, second] = edges[i];
//         if(frequencey[first]) {
//             frequencey[first] += 1;
//             node  = first;
//             continue;
//         }
//         frequencey[first] = 1
//         if(frequencey[second]) {
//             frequencey[second] += 1;
//             node  = second;
//             continue;
//         }
//         frequencey[second] = 1;
//     }
//     return node;

};