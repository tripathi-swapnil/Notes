# def memoize(func):
#     cache = {}
#     def wrapper(*args, **kwargs):
#         if (str(args), str(kwargs)) not in cache:
#             cache[(str(args), str(kwargs))] = func(*args, **kwargs)
#         return cache[(str(args), str(kwargs))]
#     return wrapper

# @memoize
def getfactorial(n:int) -> int:
    if n < 2:
        return 1;
    return n * getfactorial(n-1)

class Solution:
    
    def trailingZeroes(self, n: int) -> int:
        fact = str(getfactorial(n))
        return len(fact) - len(fact.rstrip('0'))
        
    
        