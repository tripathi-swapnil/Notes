class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        op = []
        for i, v in enumerate(words):
            if self.hasPattern(pattern, v):
                op.append(v)
        return op
    def hasPattern(self, pattern, word) :
        mapped, mapping = set(), {}

        for i in range(len(pattern)):
            pch, ch = pattern[i], word[i]

            if mapping.get(ch) and mapping[ch] != pch:
                return False

            if not mapping.get(ch) and pch in mapped:
                return False

            mapping[ch] = pch
            mapped.add(pch)

        return True
    
                
            
            
        