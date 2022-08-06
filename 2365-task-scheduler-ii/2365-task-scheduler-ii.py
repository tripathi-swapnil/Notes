class Solution:
    def taskSchedulerII(self, tasks: List[int], space: int) -> int:
        nxt = defaultdict(int)
        days = 1
        
        for task in tasks:
            if nxt[task] <= days:
                nxt[task] = days + space + 1
                days += 1
            else:    
                days += nxt[task] - days + 1
                nxt[task] = days + space
        
        return days - 1
            
                
        