function minimumDeleteSum(s1: string, s2: string): number {
    return lcsLength(s1, s2);
};

function lcsLength(word1: string, word2: string): number {
    const dp = Array.from({ length: word1.length + 1 }, () =>
        new Array(word2.length + 1).fill(0)
    );

    for (let i = word1.length - 1; i > -1; i--) {
      dp[i][word2.length] = dp[i+1][word2.length] + word1.charCodeAt(i);
    }

    for (let j = word2.length - 1; j > -1; j--) {
      dp[word1.length][j] = dp[word1.length][j+1] + word2.charCodeAt(j);
    }

    for (let i = word1.length -1; i > -1; i--) {
        for (let j = word2.length - 1; j > -1; j--) {
            if (word1[i] === word2[j]) dp[i][j] = dp[i+1][j+1];
            else dp[i][j] = Math.min(
                dp[i+1][j] + word1.charCodeAt(i),
                dp[i][j+1] + word2.charCodeAt(j)  
            );
        }
    }

    return dp[0][0];
}