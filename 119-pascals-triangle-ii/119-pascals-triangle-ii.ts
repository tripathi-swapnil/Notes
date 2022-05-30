function getRow(rowIndex: number): number[] {
    let arr = [[1]];
    for(let i = 1; i < rowIndex+1; i++) {
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
    return arr[rowIndex];
};