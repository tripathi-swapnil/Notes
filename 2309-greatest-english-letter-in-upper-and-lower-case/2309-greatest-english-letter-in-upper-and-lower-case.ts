function greatestLetter(s: string): string {
    let map = new Map();
    let word;
    for(let i = 0; i < s.length; i++) {
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 && map.has(s[i].toLowerCase())){
            if(word) {
                word = Math.max(s.charCodeAt(i), word);
            } else {
                word = s.charCodeAt(i)
            }
            
        } else {
            map.set(s[i], s[i]);
        }
    }
    return word ? String.fromCharCode(word) : '';

};