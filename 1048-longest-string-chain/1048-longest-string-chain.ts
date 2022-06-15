function longestStrChain(words: string[]): number {
    const map = new Map();
    words.sort((w1, w2) => w1.length - w2.length);
    
    let maxLen = 0;
    for(const word of words) {
        let len = 0;
        // console.log('------>>>', word)
        for(let i = 0; i< word.length; i++) {
            //console.log('------')
            const newWord = word.slice(0, i) + word.slice(i+1);
           // console.log(newWord)
            len = Math.max(len, (map.get(newWord) || 0) + 1);
            maxLen = Math.max(len, maxLen);
            
        }
        
        map.set(word, len)
        //console.log(map)
    }
    return maxLen;
};
