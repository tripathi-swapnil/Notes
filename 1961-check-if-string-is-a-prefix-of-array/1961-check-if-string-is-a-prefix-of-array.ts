function isPrefixString(s: string, words: string[]): boolean {
    
    let str = "";
    for(let word of words){
        str += word;
        if(s === str){
            return true;
        }
    }
    return false;
    
};