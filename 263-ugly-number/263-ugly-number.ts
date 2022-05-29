function isUgly(n: number): boolean {
    if(n <= 0) {return false};
    if(n <= 5) {return true};
    
    for(let fac of [2,3,5]) {
        if(n%fac === 0){
            return isUgly(n/fac);
        }
    }
    return false;

};