class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        res = 1
        for i in range(2, n + 1):
            res = (res + k) % i
            
            if res == 0:
                res = i
        return res
        