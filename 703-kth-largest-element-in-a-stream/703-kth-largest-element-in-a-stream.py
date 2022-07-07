class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.nlargest = k;
        self.stream = nums
        

    def add(self, val: int) -> int:
        # print(self.nlargest, self.stream)
        self.stream.append(val)
        self.stream.sort(reverse=True)
        # print(self.stream, self.nlargest, self.stream[self.nlargest-1])
        return self.stream[self.nlargest - 1]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)