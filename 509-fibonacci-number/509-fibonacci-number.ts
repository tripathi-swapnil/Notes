function fib(n: number): number {
    let list = [0,1];
    for(let i = 2; i <= n; i++) {
        list[i] = list[i-2] + list[i-1]
    }
    return list[n];
}


