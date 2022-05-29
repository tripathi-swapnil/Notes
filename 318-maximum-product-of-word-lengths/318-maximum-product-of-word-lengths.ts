function maxProduct(words: string[]): number {
    let maxWordLen = 0;
    let i = 0, j = i + 1;
    while(i < words.length - 1) {
          if(hasNoIntersection(words[i], words[j])) {
              const multi = words[i].length*words[j].length;
              maxWordLen = maxWordLen  > multi ? maxWordLen : multi
          }
        j++;
        if(j >= words.length) {
           i++;
           j = i+1;
         }
    }
    return maxWordLen;
    
};

// function hasNoIntersection(a, b) {
//     for(let  i= 0; i < a.length; i++) {
//         if(b.indexOf(a[i]) >= 0) {
//             return false;
//         }
//     }
//     return true
// }

function hasNoIntersection(a, b) {
    let mp = new Map();
    for(let  i= 0; i < a.length; i++) {
        mp.set(a[i], 1);
    }
    for(let  i= 0; i < b.length; i++) {
        if(mp.has(b[i])) return false;
    }
    return true
}
