class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:

        prices = [float('Inf')] * n
        prices[src] = 0

        for _ in range(k + 1):
            current = prices[:]
            for u, v, price in flights:
                if prices[u] != float('Inf') and prices[u] + price < current[v]:
                    current[v] = prices[u] + price
            prices = current

        if prices[dst] == float('Inf'):
          return -1

        return prices[dst]