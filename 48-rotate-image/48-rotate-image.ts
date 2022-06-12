/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length, dL = Math.floor(matrix.length / 2);

    for (let k = 0; k < dL; k++) {
        for (let i = k; i < n - 1 - k; i++) {
            const temp = matrix[k][i];
            matrix[k][i] = matrix[n - 1 - i][k];
            matrix[n - 1 - i][k] = matrix[n - 1 - k][n - 1 - i];
            matrix[n - 1 - k][n - 1 - i] = matrix[i][n - 1 - k];
            matrix[i][n - 1 - k] = temp;
        }
    }
};

