function getPalindromeLength(s, i, j) {
    while(i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return j-i-1;
}

function longestPalindrome(st: string): string {
    
    let start = 0, end = 0;
    
    for(let i = 0; i< st.length; i++) {
        let length = Math.max(getPalindromeLength(st, i,i), getPalindromeLength(st, i, i+1));
        
        if(end - start < length) {
            start = i - Math.floor( (length -1) /2);
            end =  i + Math.floor(length/2);
        }
       // console.log(i, length, start, end);
    }
    return st.substring(start, end+1);
    
    
//  const s = prepareString(st);
 
//  const dp = Array.from({ length: s.length }, () => 0);
  
//  let current = 0, right = 0, maxCenter = 0, maxLen = 0;
  
//   for (let i = 0; i < s.length; i++) {
//     const iMirror = 2 * current - i;
//       console.log(s, iMirror)
    
//     if (right > i) {
//       dp[i] = Math.min(right - i, dp[iMirror] || 0);
//     }
    
//     let l = i - (dp[i] + 1);
//     let r = i + (dp[i] + 1);

//     while (l >= 0 && r < s.length && s[l] === s[r]) {
//       l--;
//       r++;
//       dp[i]++;
//     }
    
//     if (dp[i] >= maxLen) {
//       maxCenter = i;
//       maxLen = dp[i];
//     }
    
//     if ((i + dp[i]) > right) {
//       current = i;
//       right = i + dp[i];
//     }
//   }
    
//  return findSubs(s.substring(maxCenter - maxLen, maxCenter + maxLen));
};

function prepareString(sts: string): string {
    let s = '#';
    for(let st of sts) {
        s += st + '#';
    }
    return s;
}
function findSubs(s: string): string {
  let ss = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] != '#') ss += s[i];
  }
  return ss;
}