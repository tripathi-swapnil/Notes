function minCostClimbingStairs(cost: number[]): number {
    let firstStep = cost[0], secondStep = cost[1];
    
    for(let i = 2; i< cost.length; i++) {
        const tmp = Math.min(firstStep, secondStep) + cost[i];
        firstStep = secondStep;
        secondStep = tmp;
    }
    return Math.min(firstStep, secondStep) ;
};
