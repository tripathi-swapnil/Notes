function maxProduct(words: string[]): number {
    let maxWordLen = 0;
    let i = 0, j = i + 1;
    while(i < words.length - 1) {
          if(hasNoIntersection(words[i], words[j])) {
              maxWordLen = Math.max(maxWordLen, words[i].length*words[j].length)
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
    for(let i=0; i < a.length; i++) {
        if(b.indexOf(a[i]) >= 0) {
            return false;
        }
    }
    return true
}

