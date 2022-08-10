class Solution:
    def reorganizeString(self, s: str) -> str:
        #[(-2,a),(-1,b)]
        hash, heap, answer, prev = defaultdict(int), [], '', None
        
        for ch in s:
            hash[ch] += 1
        
        for v in hash.keys():
            heappush(heap, (-hash[v], v))
            
        while heap:
            current = heappop(heap)
            
            if prev:
                heappush(heap, prev)
                
            if current[0]+1 is 0:
                prev = None
            else:
                prev = (current[0]+1, current[1])
            
            answer += current[1]
        
        return answer if len(answer) == len(s) else ''
                
            
            
            
            
        
        
            
        