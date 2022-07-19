class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        fmap = {}
        
        for i in range(len(s)):
            fmap[s[i]] = fmap.get(s[i], 0) + 1
            fmap[t[i]] = fmap.get(t[i], 0) - 1
        
        return len([v for v in fmap.values() if v > 0 ]) == 0
            
        