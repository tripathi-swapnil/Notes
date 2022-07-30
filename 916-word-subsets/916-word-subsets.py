def character_frequency(word: str):
    freq = [0]*26

    for ch in word:
        freq[ord(ch) - 97] += 1
    return freq


class Solution:
    def wordSubsets(self, words1: List[str], words2: List[str]) -> List[str]:
        required = [0]*26
        for word in set(words2):
            freq = character_frequency(word)
            for i in range(26):
                required[i] = max(required[i], freq[i])

        res = []
        for word in words1:
            freq = character_frequency(word)
            if all(freq[i] >= required[i] for i in range(26)):
                res.append(word)

        return res