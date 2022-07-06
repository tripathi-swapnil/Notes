class Solution:
    def memoize(func):
        cache = {}
        def wrapper(*args, **kwargs):
            if (str(args), str(kwargs)) not in cache:
                cache[(str(args), str(kwargs))] = func(*args, **kwargs)
            return cache[(str(args), str(kwargs))]
        return wrapper

    @memoize
    def trailingZeroes(self, n: int) -> int:
        fact = str(self.getfactorial(n))
        return len(fact) - len(fact.rstrip('0'))
        
    def getfactorial(self, n:int) -> int:
        if n < 2:
            return 1;
        return n * self.getfactorial(n-1)
        