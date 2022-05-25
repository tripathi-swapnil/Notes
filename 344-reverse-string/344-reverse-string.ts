/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0;
    const len = s.length - 1;
    while(i < Math.floor((len + 1) / 2)) {
        let temp = s[i];
        s[i] = s[len-i];
        s[len-i] = temp;
        i++;
    }

};