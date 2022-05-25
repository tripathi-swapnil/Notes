function lengthOfLongestSubstring(s: string): number {
    let subs = {};
    let j = 0;
    let max = 0;
    for(var i = 0; i < s.length;) {
        console.log(s[i], {i, j}, s[j] );
        if(!subs[s[i]]) {
            subs[s[i]] = 1;
            i++;
            // console.log(i-j);
            max = Math.max(max, i - j);
        } else{
            subs[s[j]] = 0;
            j++;
        }
    }
    return max;
};