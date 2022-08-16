class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        row_count, col_count = len(board), len(board[0])
        counts = Counter(word)
        
        if counts[word[0]] > counts[word[-1]]:
            word = word[::-1]
        
        formed = 0
        for i in range(row_count):
            for j in range(col_count):
                if (c := board[i][j]) in counts:
                    counts[c] -= 1
                    if counts[c] == 0:
                        formed += 1

        if formed < len(counts.keys()):
            return False
            
        def dfs(row: int, col: int, word_index: int):
            current = board[row][col]
            if current != word[word_index]:
                return False

            board[row][col] = '0'
            
            if word_index == len(word) - 1:
                return True

            for dr, dc in [[1, 0], [-1, 0], [0, 1], [0, -1]]:
                r = row + dr
                c = col + dc
                
                if 0 <= r < row_count and 0 <= c < col_count and dfs(r, c, word_index + 1):
                    return True
                
            board[row][col] = current

            return False

        for r in range(row_count):
            for c in range(col_count):
                if board[r][c] == word[0] and dfs(r, c, 0):
                    return True

        return False