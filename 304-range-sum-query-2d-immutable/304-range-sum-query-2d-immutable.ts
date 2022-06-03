class NumMatrix {
    mat: number[][];
    constructor(matrix: number[][]) {
        this.mat = matrix;
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let sum = 0;
        for(let j = row1; j <= row2; j++ ) {
            //sum += this.mat[j].slice(col1, col2+1).reduce((a,b) => a+b, 0);
            //console.log(this.mat[j], this.mat[j].slice(col1, col2+1), this.mat[j].slice(col1, col2+1).reduce((a,b) => a+b, 0), sum)
            
            for(let i = col1; i <= col2; i++ ) {
                sum += this.mat[j][i];
            }
        }
        return sum;
    }
}


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */