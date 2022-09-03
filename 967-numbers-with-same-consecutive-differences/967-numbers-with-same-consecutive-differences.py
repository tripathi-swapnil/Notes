class Solution:
    def numsSameConsecDiff(self, n: int, k: int) -> List[int]:
        if n == 1:
            return [i for i in range(10)]

        q = [i for i in range(1, 10)]

        for l in range(n-1):
            lq = []
            for num in q:
                tail = num % 10
                
                nexts = set([tail + k, tail - k])

                for d in nexts:
                    if 0 <= d < 10:
                        new_num = num * 10 + d
                        lq.append(new_num)
            
            q = lq

        return q
        