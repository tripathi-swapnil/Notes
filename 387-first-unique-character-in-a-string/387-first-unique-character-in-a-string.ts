function firstUniqChar(s: string): number {
    const frequency = new Map<string, number>();
    let sarr = new Set<string>();
    
    for(let i = 0; i < s.length; i++) {
        if(frequency.has(s[i])) {
            // console.log(sarr,'before dlt', s[i]);
            sarr.delete(s[i]); 
           // console.log(sarr,'after dlt', s[i]);
        } else {
            frequency.set(s[i], i);
            sarr.add(s[i])
        }
    };
    //console.log(sarr, frequency);
    if(sarr.size === 0) return -1;
    //const [a] = sarr;
    
    return frequency.get([...sarr][0]);

};