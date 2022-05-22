/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
// 1 2 3 4 5

  //  1

var solution = function(isBadVersion: any) {
    const hash = new Map();
    
    function isBadV(i) {
        if(!hash.has(i)) {
            hash.set(i, isBadVersion(i));
        }
        return hash.get(i);
    }
    function checkbadVersion(index: number, n) {
        
        if(index === 1 && isBadV(index)) return 1;
        
        const num = Math.ceil((n + index ) / 2) ;
        if(index === n - 1 && isBadV(index)) {
            return index
        } else if(index === n - 1 && isBadV(n)) {
            return n;
        };
        
        
        if(isBadV(num)) { // move left
           return checkbadVersion(index, num);
         } else { // move right
           const len = n - index + 1;
           return checkbadVersion(num, n);
         }
    }

    return function(n: number): number {
        return checkbadVersion(1, n);
    };
};

