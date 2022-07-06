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
            # print(self.isMatched(word, frequencyMap), word)
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
                
            if fMap.get(w, 'na') == 'na':
                return False
            # print(word, fMap, frequencyMap, w)
                
            if frequencyMap[w] > fMap[w]:
                return False
        return True
                

                
# class Solution:
#     def countCharacters(self, words: List[str], chars: str) -> int:
#         limitF = [0]*26
#         for ch in chars:
#           limitF[ord(ch) - 97] += 1

#         count = 0
#         for word in words:
#           if self.canBeFormed(word, limitF):
#             count += len(word)

#         return count


#     def canBeFormed(self, word, limitF: List[int]) -> bool:
#       current = [0]*26
#       for ch in word:
#         index = ord(ch) - 97
#         current[index] += 1

#         if current[index] > limitF[index]:
#           return False
#       return True
        