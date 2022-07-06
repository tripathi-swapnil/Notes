class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        frequencyMap = {}
        for char in chars:
            if frequencyMap.get(char, False):
                frequencyMap[char] += 1
            else:
                frequencyMap[char] = 1
                
        count = 0
        for word in words:
            if self.isMatched(word, frequencyMap):
                count += len(word)
        return count
    
        
    def isMatched(self, word, fMap) -> bool:
        
        frequencyMap = {}
        for w in word:
            if frequencyMap.get(w, False):
                frequencyMap[w] += 1
            else:
                frequencyMap[w] = 1
                
            if fMap.get(w, 'na') == 'na' or frequencyMap[w] > fMap[w]:
                return False
        return True