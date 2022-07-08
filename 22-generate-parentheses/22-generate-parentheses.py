class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []
        def backtrack(s = [], left = 0, right = 0):
            # print(s, left,right)
            if len(s) == 2*n:
                ans.append("".join(s))
                return
            if left < n:
                s.append("(")
                # print(s, 'left')
                backtrack(s,left+1, right)
                # print(s, 'left', 'p')
                s.pop()
            
            if right < left:
                # print(s, 'right')
                s.append(")")
                backtrack(s, left, right +1)
                # print(s, 'right', 'p')
                s.pop()
        backtrack()
        return ans
                
        