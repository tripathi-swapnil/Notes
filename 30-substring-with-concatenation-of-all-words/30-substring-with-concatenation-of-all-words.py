class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_length = len(words[0])
        total_size = word_length * len(words)
        word_count = Counter(words)

        def search(anchor):
            words_found = defaultdict(int)
            words_used = 0
            has_excess = False

            for start in range(anchor, len(s), word_length):
                end = start + word_length
                if end > len(s):
                    break

                current = s[start: end]
                if current not in word_count:
                    words_found = defaultdict(int)
                    words_used = 0
                    has_excess = False
                    anchor = end
                else:
                    while start - anchor == total_size or has_excess:
                        leftmost_word = s[anchor: anchor + word_length]
                        anchor += word_length
                        words_found[leftmost_word] -= 1

                        if words_found[leftmost_word] == word_count[leftmost_word]:
                            has_excess = False
                        else:
                            words_used -= 1

                    words_found[current] += 1
                    if words_found[current] <= word_count[current]:
                        words_used += 1
                    else:
                        has_excess = True

                    if words_used == len(words) and not has_excess:
                        answer.append(anchor)

        answer = []
        for i in range(word_length):
            search(i)

        return answer