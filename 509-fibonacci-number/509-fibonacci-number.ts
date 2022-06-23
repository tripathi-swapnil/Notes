function fib(n: number): number {
    let list = [0,1];
    for(let i = 2; i <= n; i++) {
        list[i] = list[i-2] + list[i-1]
    }
    return list[n];
}
function fib1(n: number): number {
    if(!n) return 0;
    let prev2 = 0;
    let prev = 1;
    for(let i = 2; i <= n; i++) {
        let curr = prev + prev2;
        prev2 = prev ;
        prev = curr;
    }
    return prev;
}


