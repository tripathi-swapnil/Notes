function toLowerCase(s: string): string {
    let difference = 97 - 65;
    let sts = '';
    for(let st of s) {
        if(st.charCodeAt(0) >= 65 && st.charCodeAt(0) <= 90) {
            sts += String.fromCharCode(st.charCodeAt(0) + difference);
            continue;
         }
        sts += st;
        
    }
    return sts;
};