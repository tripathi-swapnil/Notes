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

function hasNoIntersection(a, b) {
    // let mp = {};
    for(let  i= 0; i < a.length; i++) {
        // mp[a[i]] = 1;
        if(b.indexOf(a[i]) >= 0) {
            return false;
        }
    }
    // for(let  i= 0; i < b.length; i++) {
    //     if(mp[b[i]]) return false;
        // if(b.indexOf(a[i]) >= 0) {
        //     return false;
        // }
    // }
    return true
}

