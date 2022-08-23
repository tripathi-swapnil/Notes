class Solution:
    def compress(self, chars: List[str]) -> int:
        i = 1
        while i < len(chars):
            if type(chars[i-1]) == int and chars[i] == chars[i-2]:
                chars.pop(i)
                chars[i-1] = chars[i-1] + 1
                continue
            if chars[i] == chars[i-1]:
                chars[i] = 2
            i += 1
        i = 1
        while i < len(chars):
            if type(chars[i]) == int:
                next = f'{chars[i]}'
                chars.pop(i)
            
                for j in range(len(next)):
                    chars.insert(i+j, next[j])
                
                i = i + j
            i += 1
        return len(chars)