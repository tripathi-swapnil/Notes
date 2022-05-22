function longestPalindrome(s: string): number {
    const hash = new Map();
    let counter = 0
    for(let i = 0; i < s.length; i++) {
        if(hash.has(s[i])) {
            hash.delete(s[i]);
            counter += 2;
        } else {
            hash.set(s[i], 1);
        }
    }
    return hash.size > 0 ? counter+1 : counter;

};