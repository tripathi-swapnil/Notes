def next_h(n):
    sum = 0
    while n > 0:
        n, d = divmod(n, 10)
        sum += d*d
    return sum

class Solution:
    def isHappy(self, n: int) -> bool:
        s = n
        q = next_h(n)
        while q != 1 and s != q:
            s = next_h(s)
            q = next_h(next_h(q))
        return q == 1