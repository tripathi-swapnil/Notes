function fib(n: number): number {
    let a = [0, 1];
    for(let i = 2; i<= n; i++) {
        a[i] = a[i-1] + a[i-2]
    }
    //console.log(a);
    return a[n];

};

// 0 1 1 2 3 5 8 13