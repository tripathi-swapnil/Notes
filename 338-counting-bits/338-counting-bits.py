class Solution:
    def getbitcount(self, i):
        count = 0
        while i is not 0:
            i = i & i-1
            count += 1
        return count
        
    def countBits(self, n: int) -> List[int]:
        output = [0]*(n+1)
        for i in range(n+1):
            bitv = self.getbitcount(i)
            # print(i , bitv)
            output[i] = bitv
            
        return output
        