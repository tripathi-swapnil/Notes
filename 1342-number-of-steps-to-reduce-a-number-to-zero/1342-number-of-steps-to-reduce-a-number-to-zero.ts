function numberOfSteps(num: number): number {
    let sum = 0;
    function getNum(nm) {
        if(nm > 0) {
            if(nm%2 === 0) {
                nm = nm / 2;
            } else {
                nm--
            }
            sum++;
            getNum(nm);
        } else {
            return;
        }
        
    }
    getNum(num);
//     while(num > 0) {
//         if(num%2 === 0) {
//             num = num / 2;
//         } else {
//             num--
//         }
        
//     }
    return sum;

};