function minDeletions(s: string): number {
    let freq = {};
    for(let st of s) {
        if(freq[st]){
            freq[st]++;
        } else {
            freq[st] = 1;
        }
    }
    let f = new Set();
    let count = 0;
    
    for(let st in freq) {
        let n:any = freq[st];
        while(f.has(n) && n > 0){
            n--;
            count++;
        }
        f.add(n);
    }
    return count;
};