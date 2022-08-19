class Solution:
    def minSetSize(self, arr: List[int]) -> int:
        counts = Counter(arr)

        dp = [0]*(len(arr) + 1)
        for c in counts.values():
            dp[c] += 1

        ans = 0
        needed = 0

        for i in range(len(arr), -1, -1):

            while dp[i]:
                ans += 1
                needed += i

                if needed >= len(arr) // 2:
                    return ans

                dp[i] -= 1

        return ans
        