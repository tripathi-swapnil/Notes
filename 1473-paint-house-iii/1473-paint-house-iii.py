class Solution:
    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:
        MAX_COST = float('inf')

        memo = [[MAX_COST for _ in range(n)] for _ in range(target + 1)]

        for color in range(1, n+1):
          if houses[0] == color:
            memo[1][color - 1] = 0
          elif houses[0] == 0:
            memo[1][color - 1] = cost[0][color - 1]

        for house in range(1, m):
          current = [[MAX_COST for _ in range(n)] for _ in range(target + 1)]

          for neighborhoods in range(1, min(target, house + 1) + 1):
            for color in range(1, n + 1):
              if houses[house] != 0 and color != houses[house]:
                continue

              currCost = MAX_COST

              for pColor in range(1, n + 1):
                if pColor != color:
                  currCost = min(currCost, memo[neighborhoods - 1][pColor - 1])
                else:
                  currCost = min(currCost, memo[neighborhoods][color - 1])

              costToPaint = 0 if houses[house] != 0 else cost[house][color - 1]

              current[neighborhoods][color - 1] = currCost + costToPaint

          memo = current

        minCost = MAX_COST
        for color in range(1, n + 1):
          minCost = min(minCost, memo[target][color - 1])

        return -1 if minCost == MAX_COST else minCost
