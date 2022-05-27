function numberOfSteps(num: number): number {
    let sum = 0;
    while(num > 0) {
        if(num%2 === 0) {
            num = num / 2;
        } else {
            num--
        }
        sum++;
    }
    return sum;

};