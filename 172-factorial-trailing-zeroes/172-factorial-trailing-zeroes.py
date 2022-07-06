class Solution:
    def trailingZeroes(self, n: int) -> int:
        fact = str(self.getfactorial(n))
        return len(fact) - len(fact.rstrip('0'))
        
    def getfactorial(self, n:int) -> int:
        if n <= 0:
            return 1;
        return n * self.getfactorial(n-1)
        