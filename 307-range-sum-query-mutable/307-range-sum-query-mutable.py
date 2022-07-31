class NumArray:
    def __init__(self, nums: List[int]):
        self.build_tree(nums)

    def build_tree(self, nums: List[int]):
        length = len(nums)

        if length:
            tree = [0] * (length)
            tree += nums[:]

            for i in range(length - 1, 0, -1):
                tree[i] = tree[i * 2] + tree[i * 2 + 1]

            self.tree = tree
        else:
            self.tree = []

        self.length = length

    def update(self, index: int, val: int) -> None:
        index += self.length
        self.tree[index] = val

        while index > 0:
            left, right = index, index
            if index % 2 == 0:
                right = index + 1
            else:
                left = index - 1

            self.tree[index // 2] = self.tree[left] + self.tree[right]
            index //= 2

    def sumRange(self, left: int, right: int) -> int:
        left += self.length
        right += self.length

        sum = 0
        while left <= right:
            if left % 2:
                sum += self.tree[left]
                left += 1

            if right % 2 == 0:
                sum += self.tree[right]
                right -= 1
                
            left //= 2
            right //= 2

        return sum


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)