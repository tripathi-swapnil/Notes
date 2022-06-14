function minDistance(word1: string, word2: string): number {
    let l1 = word1.length;
    let l2 = word2.length;
    let dp: number[][] = Array(l1+1).fill(0).map(() => Array(l2+1).fill(0));
    
    for(let i = 1; i <= l1; i++) {
        for(let j = 1; j <= l2; j++) {
            if(word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1]+1;
             } else {
                 dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
             }
        }
    }
    return l1+l2-2*dp[l1][l2];

};