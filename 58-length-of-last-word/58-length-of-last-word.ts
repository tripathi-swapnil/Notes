function lengthOfLastWord(s: string): number {
    if(s.trim() === "") return 0;
    const arr =s.trim().split(" ")
    return arr[arr.length -1].length

};