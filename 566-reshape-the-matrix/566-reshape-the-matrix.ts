function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    
    const numsRow = mat.length;
    const numsCol = mat[0].length;
    const output = [];
    
    let flatNums = null;
    
    // return original if new dimension doesn't match 
    if(r * c !== numsRow * numsCol) return mat;
    
    // deconstruct the original array and reconstruct new array
    flatNums = mat.reduce((acc, curr) => acc.concat(curr), []);
    
    for (let i = 0; i < r; i++) 
        output.push(flatNums.splice(0, c));
    
    return output;
    
    

};