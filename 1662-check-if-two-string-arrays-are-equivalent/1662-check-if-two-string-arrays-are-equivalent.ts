function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let w1 = word1.reduce((acc, v) => {
        acc += v;
        return acc;
    }, '');//.split('').sort((a, b) => { return a>b ? -1 : 1}).join('');
    let w2 = word2.reduce((acc, v) => {
        acc += v;
        return acc;
    }, '');//.split('').sort((a, b) => { return a>b ? -1 : 1}).join('');
     console.log(w1, w2);
    return w1 === w2;

};