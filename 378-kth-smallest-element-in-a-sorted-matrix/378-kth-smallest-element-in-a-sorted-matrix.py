class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        list_nums = sum(matrix, [])
        heapify(list_nums)
        
        for i in range(k - 1):
            heappop(list_nums)
            
        return heappop(list_nums)
        