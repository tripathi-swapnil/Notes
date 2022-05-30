
function generate(numRows: number): number[][] {
    let arr = [[1]];
    for(let i = 1; i < numRows; i++) {
        const row = [];
        let lastRow = arr[i-1];
        
        for(let j = 0; j <= lastRow.length; j++) {
            if(j === 0 || j === lastRow.length) {
                row.push(1);
                continue;
            }
            row.push(lastRow[j-1]+lastRow[j]);
            
        }
        arr.push(row);
    }
    return arr;
}

// function generate(numRows: number): number[][] {
//     let arr = [];
//     let a = [1];
//     for(let i = 0; i < numRows; i++) {
        
//         arr.push(row);
//         let c = 0;
//         while(c < row.length) {
//               if(c > 0 && c < row.length -1) {
//                  arr[i][c] = (arr[i-1] && arr[i-1][c-1] ? arr[i-1][c-1] : 0) + (arr[i-1] && arr[i-1][c] ? arr[i-1][c] : 0); 
//               }
//                  c++;
            
//          }  
        
//     }
//             return arr;
            

// };
// function getRowItem(level) {
//     return Array(level).fill(1);
// }