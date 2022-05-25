function reverseWords(s: string): string {
    const arr = s.split(' ');
    const outPut = [];
    for(let st of arr) {
        outPut.push(reverseString(st.split('')));
    }
    return outPut.join(' ');
};

function reverseString(s) {
    let i = 0;
    const len = s.length - 1;
    while(i < Math.floor((len + 1) / 2)) {
        let temp = s[i];
        s[i] = s[len-i];
        s[len-i] = temp;
        i++;
    }
    return s.join('');

};