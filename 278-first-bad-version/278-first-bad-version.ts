/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
// 1 2 3 4 5

  //  1

var solution = function(isBadVersion: any) {
    
    function checkbadVersion(index: number, n) {
        if(index === 1 && isBadVersion(index)) return 1;
        
        const num = Math.ceil((n + index ) / 2) ;
        console.log({index, num, n, b:isBadVersion(num)});
        if(index === n - 1 && isBadVersion(index)) {
            return index
        } else if(index === n - 1 && isBadVersion(n)) {
            return n;
        };
        
       // if(num === index) return index;
        
        if(isBadVersion(num)) { // move left
            //const len = Math.floor(num / 2);
           return checkbadVersion(index, num);
         } else { // 
           const len = n - index + 1;
           return checkbadVersion(num, n);
         }
    }

    return function(n: number): number {
        const a = checkbadVersion(1, n);
        console.log(a);
        return a;
    };
};

