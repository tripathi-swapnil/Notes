class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        in_degree = [0]*numCourses
        graph = {}

        for [i, j] in prerequisites:
          if i not in graph:
            graph[i] = []

          graph[i].append(j);
          in_degree[j] += 1

        queue = [i for i, degree in enumerate(in_degree) if degree == 0]

        count = 0
        while (len(queue)):
          current = queue.pop(0)
          count += 1

          for next in graph.get(current, []):
            in_degree[next] -= 1
            if in_degree[next] == 0:
              queue.append(next)

        return count == numCourses 