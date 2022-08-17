class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
        morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
        
        morseList = set()
        
        for word in words:
            wd = ''
            
            for ch in word:
                ind = ord(ch)-97
                wd += morse[ind]
                
            morseList.add(wd)
        return len(morseList)
                
            
            
            
        