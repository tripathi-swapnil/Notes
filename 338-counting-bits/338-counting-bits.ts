function countBits(n: number): number[] {
    
    if(n == 0) return [0];
    let a = [0,1]
    
    for(let i = 2; i <= n; i++) {
        a[i] = i.toString(2).split('').filter(a => a != '0').length;
    }
        return a;
};
    
    
//      0 1 2 3 4 5 6 7 
//      0 1 1 2 1 2.2 3
    
    
    
//     8 4 2 1 