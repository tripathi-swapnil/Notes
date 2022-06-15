function isSubsequence(s: string, t: string): boolean {
    
    let i =0, j =0;
    while(j < t.length) {
        if(s[i] === t[j]) {
           i++;  
         }
        j++;
    }
    return i === s.length;
};

// "axc"
// "aahbgdc"
// "abc"
// "ahbgdc"
// "a"
// "a"
// "a"
// "c"