class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        loop = 32
        while loop:
            result = result << 1
            if n & 1 == 1:
                result = result ^ 1
            n = n >> 1
            loop -= 1
        return result
            
        