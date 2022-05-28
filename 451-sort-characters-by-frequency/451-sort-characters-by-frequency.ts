function frequencySort(s: string): string {
    let hash = {};
    for(let c of s) {
        if(!hash[c]) {
            hash[c] = 1;
        } else {
            hash[c] += 1;
        }
    }
    const arr = Object.keys(hash).sort(function(a,b){ return hash[b] -        hash[a]});
    let st = '';
    for(let a of arr) {
        st += a.repeat(hash[a]);
    }
    //console.log(st);
    return st;
};