class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False

        @cache
        def inter_leave(i, j, k):
            if i == len(s1) and j == len(s2) and k == len(s3):
                return True

            if i < len(s1) and s3[k] == s1[i] and inter_leave(i+1, j, k+1):
                return True
                
            if j < len(s2) and s3[k] == s2[j]:
                return inter_leave(i, j+1, k+1)
            
            return False
        
        return inter_leave(0, 0, 0)