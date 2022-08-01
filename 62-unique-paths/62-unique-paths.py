class Solution:
    def uniquePaths(self, m: int, n: int) -> int:

        @cache
        def t(m, n):
            if m == 1 or n == 1:
                return 1

            return t(m-1, n) + t(m, n-1)

        return t(m, n)