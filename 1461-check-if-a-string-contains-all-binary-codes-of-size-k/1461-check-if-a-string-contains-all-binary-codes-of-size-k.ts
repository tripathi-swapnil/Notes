function hasAllCodes(s: string, k: number): boolean {
    let newSet = new Set<string>();
    for(let i = 0; i+k<=s.length; i++) {
        let string = s.substring(i,i+k);
        //console.log(string);
        newSet.add(string);
    }
    //console.log(newSet, newSet.size, k*2, '------------')
    return newSet.size === Math.pow(2,k);
};


// 00
// 01
// 11
// 10



// 0 1

// 000
// 001
// 010
// 011
// 100
// 101
// 110
// 111

// 0000