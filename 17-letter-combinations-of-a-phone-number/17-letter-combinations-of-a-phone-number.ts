const range = {
    '2': ['a','b','c'],
    '3': ['d','e','f'],
    '4': ['g','h','i'],
    '5': ['j','k','l'],
    '6': ['m','n','o'],
    '7': ['p','q','r','s'],
    '8': ['t','u','v'],
    '9': ['w','x','y','z']
}
function letterCombinations(digits: string): string[] {
   if(!digits.length) return [];
    let result = [''];
    
    for(let l of digits) {
        let tempResult = [];
        for(let item of range[l]) {
           for(let i = 0; i < result.length; i++) {
               tempResult.push(result[i]+item);
           }
        }
        result = tempResult;
    }
    return result;
    
    
};