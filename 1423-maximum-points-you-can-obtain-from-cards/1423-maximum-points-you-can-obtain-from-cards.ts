function maxScore(cardPoints: number[], k: number): number {
    let sum = 0;
    for(let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }
    let max = sum, front = k -1;
    for(let i = cardPoints.length -1 ; front > -1; i--) {
        sum = sum - cardPoints[front--] + cardPoints[i];
        max = Math.max(max, sum);
    }
    
    return max;
};