from collections import defaultdict
from typing import Dict, List


class Solution:
    def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
        if endWord not in wordList:
            return []

        adjacents = defaultdict(list)
        for word in wordList:
            for i in range(len(word)):
                pattern = word[:i] + "*" + word[i+1:]
                adjacents[pattern].append(word)

        visitedTree = {beginWord: []}

        found = False

        q = [beginWord]
        while q and not found:
            n = len(q)

            currentVisited = {}

            for i in range(n):
                word = q.pop(0)

                for i in range(len(word)):
                    pattern = word[:i] + "*" + word[i+1:]

                    for next_word in adjacents[pattern]:
                        if next_word == endWord:
                            found = True

                        if next_word not in visitedTree:
                            if next_word not in currentVisited:
                                currentVisited[next_word] = [word]
                                q.append(next_word)
                            else:
                                currentVisited[next_word].append(word)

            visitedTree.update(currentVisited)

        def dfs(node: str) -> List[List[str]]:
            if node == beginWord:
                return [[beginWord]]

            if node not in visitedTree:
                return []

            sequences = []
            parents = visitedTree[node]

            for parent in parents:
                sequences += dfs(parent)

            for r in sequences:
                r.append(node)

            return sequences

        return dfs(endWord)
