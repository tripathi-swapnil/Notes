class Solution:
    def maxResult(self, nums: List[int], k: int) -> int:
        heap = [(-nums[0], 0)]
        next_value = heap[0]
        
        for i in range(1, len(nums)):
            negated_max_value, idx = heap[0]
            while i - idx > k:
                heappop(heap)
                negated_max_value, idx = heap[0]
            next_value = (negated_max_value - nums[i], i)
            heappush(heap, next_value)

        return -next_value[0]