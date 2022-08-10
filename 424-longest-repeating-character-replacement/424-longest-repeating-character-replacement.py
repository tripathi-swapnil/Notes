class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # A:3, B:2, left = 0 set(AB)
        # ABBA
        hash, sum, front, longest = {}, 0, -1, 0
        
        for ch in s:
            if ch in hash:
                hash[ch] += 1
            else:
                hash[ch] = 1
            
            sum += 1
        
            while sum - max(hash.values()) > k:
                sum -= 1
                front += 1
                hash[s[front]] -= 1
        
            longest = max(longest, sum)
        
        return longest  
            
            
        
        