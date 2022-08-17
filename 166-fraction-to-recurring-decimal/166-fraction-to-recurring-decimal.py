class Solution:
    def fractionToDecimal(self, nn: int, dd: int) -> str:
        if nn % dd == 0:
            return str(nn//dd)

        sign = '-' if nn < 0 < dd or nn > 0 > dd else ''
        n, d = abs(nn), abs(dd)

        answer = str(int(n/d))
        answer += '.'

        n = (n % d)

        rems = {n: len(answer)}

        while n:
            if n < d:
                n *= 10

            while n < d:
                answer += "0"
                n *= 10

            answer += str(int(n/d))
            n = (n % d)

            if n in rems:
                break

            rems[n] = len(answer)

        if not n:
            return sign + answer

        return sign + answer[:rems[n]] + '({})'.format(answer[rems[n]:])