
function generate(numRows: number): number[][] {
    let arr = [];
    for(let i = 0; i < numRows; i++) {
        
        let row = getRowItem(i+1);
        console.log(row);
        arr.push(row);
        let c = 0;
        while(c < row.length) {
              if(c > 0 && c < row.length -1) {
                  console.log((arr[i-1] && arr[i-1][c-1] ? arr[i-1][c-1] : 0), arr[i-1][c] ? arr[i-1][c] : 0, 'dfsf');
                 arr[i][c] = (arr[i-1] && arr[i-1][c-1] ? arr[i-1][c-1] : 0) + (arr[i-1] && arr[i-1][c] ? arr[i-1][c] : 0); 
                 // console.log(arr[i][c], c, 'c');
              }
              // if(i - 1 >= 0 && i ) {
                 
              // }
                 c++;
            
         }  
        
    }
                // console.log(arr);
            return arr;
            

};
function getRowItem(level) {
    return Array(level).fill(1);
}