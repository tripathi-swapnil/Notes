class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        indexmap, lastindex, count, answer = {}, -1, 0, []
        
        for i, ch in enumerate(s):
            indexmap[ch] = i
        
        
        for i, ch in enumerate(s):
            lastindex = max(lastindex, indexmap[ch])
            count += 1
            
            if lastindex == i:
                answer.append(count)
                count = 0
                
        return answer
                
            
        
        