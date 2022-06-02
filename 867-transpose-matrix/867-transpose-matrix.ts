function transpose(matrix: number[][]): number[][] {
    const x = matrix[0].length;
    const y = matrix.length;
    let mat = Array(x).fill(Array(y).fill(1));
    // console.log(matrix);
    for(let i = 0; i < x; i++) {
        let ele = [];
        for(let j = 0; j < y; j++) {
            
            ele.push(matrix[j][i]);
            //console.log(i, j , matrix[j][i], mat[i]);
        }
        mat[i] = ele;
    }
    //console.log(mat);
    return mat;
};