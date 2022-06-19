function countPrefixes(words: string[], s: string): number {
    let count = 0;
    for(let w of words) {
        if(s.indexOf(w) === 0){
            count++
        }
    }
    return count;
};