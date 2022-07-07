function getSum(a: number, b: number): number {
    if(b === 0) {
        return a;
    }
    return getSum(a^b, (a&b) << 1)
};