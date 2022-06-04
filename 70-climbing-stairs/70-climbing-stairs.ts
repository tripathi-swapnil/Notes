const memo = {1:1, 2:2};
function climbStairs(n: number): number {
    if(memo[n]) return memo[n];
    memo[n] = climbStairs(n-1) + climbStairs(n-2);
    return memo[n];
};

