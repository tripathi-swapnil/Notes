class Solution:
    def minRefuelStops(self, target: int, startFuel: int, stations: List[List[int]]) -> int:
        
        stations.append([target, 0])
        fuel = startFuel
        count, previous = 0, 0
        miss = []
        
        for position, gas in stations:
            distance, previous = position - previous, position
            
            if fuel < distance:
                
                while miss and fuel < distance:
                    fuel += -heappop(miss)
                    count += 1
                    
                if fuel < distance: return -1
                
            fuel -= distance
            heappush(miss, -gas)
            
        return count