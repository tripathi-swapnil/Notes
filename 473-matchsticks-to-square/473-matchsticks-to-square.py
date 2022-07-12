class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        side_sum = sum(matchsticks) / 4

        if not side_sum or side_sum != int(side_sum):
            return False

        return self.makesquare_dp(matchsticks, side_sum)

    def makesquare_dfs(self, matchsticks: List[int], side_sum: int) -> bool:
        matchsticks.sort(reverse=True)
        sums = [0]*4
        
        def dfs(idx):
            if idx == len(matchsticks):
                return sums.count(side_sum) == 4
            
            for i in range(4):
                if sums[i] + matchsticks[idx] <= side_sum:
                    sums[i] += matchsticks[idx]

                    if dfs(idx + 1):
                        return True
                      
                    sums[i] -= matchsticks[idx]
            return False
      
    def makesquare_dp(self, matchsticks: List[int], side_sum: int) -> bool:
        dp = {}

        def solve(mask, sides):
            t = 0

            for i in range(len(matchsticks) - 1, -1, -1):
                if not (mask & (1 << i)):
                    t += matchsticks[len(matchsticks) - 1 - i]

            if t > 0 and t % side_sum == 0:
                sides += 1

            if sides == 3:
                return True

            if (mask, sides) in dp:
                return dp[(mask, sides)]

            result = False

            current = int(t / side_sum)
            remain = side_sum * (current + 1) - t

            for i in range(len(matchsticks) - 1, -1, -1):
                if matchsticks[len(matchsticks) - 1 - i] <= remain and mask & (1 << i):
                    if solve(mask ^ (1 << i), sides):
                        result = True
                        break

            dp[(mask, sides)] = result
            return result

        return solve((1 << len(matchsticks)) - 1, 0)
