class Solution:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n is not 0:
            n = n & n-1
            count += 1
        return count
        