function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    let w1 = word1.reduce((acc, v) => {
        acc += v;
        return acc;
    }, '');
    let w2 = word2.reduce((acc, v) => {
        acc += v;
        return acc;
    }, '');
    return w1 === w2;

};