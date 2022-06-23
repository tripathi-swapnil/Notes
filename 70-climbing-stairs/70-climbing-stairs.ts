//const memo = {1:1, 2:2};
// function climbStairs1(n: number): number {
    // if(memo[n]) return memo[n];
    // memo[n] = climbStairs(n-1) + climbStairs(n-2);
    // return memo[n];
// };

function climbStairs(n: number): number {
    if(n === 1) return 1;
    let prev2 = 1;
    let prev = 2;
    for(let i = 2; i < n; i++) {
        let c = prev + prev2;
        prev2 = prev;
        prev = c;
    }
    return prev
}

