function numberOfSteps(num: number): number {
    let sum = 0;
    
    sum = getNum(num, sum);
    return sum;

};
function getNum(nm, sum) {
        if(nm > 0) {
            if(nm%2 === 0) {
                nm = nm / 2;
            } else {
                nm--
            }
            sum++;
            sum = getNum(nm, sum);
        }
    return sum
        
    }