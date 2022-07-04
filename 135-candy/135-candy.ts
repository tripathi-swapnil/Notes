function candy(ratings: number[]): number {
    let dp = Array.from({length: ratings.length}, () => 1);
    for(let i = 0; i < ratings.length; i++) {
        if(ratings[i] < ratings[i+1]) {
            dp[i+1] = dp[i] + 1;
        }
    }
    //console.log(dp);
    for(let i = ratings.length - 1; i >= 0; i--) {
        if(ratings[i-1] > ratings[i]) {
            dp[i - 1] = Math.max(dp[i - 1], dp[i] + 1)
        }
    }
    //console.log(dp);
    return dp.reduce((a,v) => a+v, 0);
};