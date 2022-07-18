class Solution:
    def getbitcount(self, i):
        count = 0
        while i is not 0:
            i = i & i-1
            count += 1
        return count
        
    def countBits(self, n: int) -> List[int]:
        output = [0]*(n+1)
        for i in range(1, n+1):
            # print(i , bitv)
            output[i] = output[i & (i-1)] + 1
        
        return output
        