class MinStack:

    def __init__(self):
        self.stk = []
        self.minlist = []
        

    def push(self, val: int) -> None:
        self.stk.append(val)
        if len(self.minlist) == 0 or self.minlist[-1] >= val:
            self.minlist.append(val)
        

    def pop(self) -> None:
        item = self.stk.pop()
        if item == self.minlist[-1]:
            self.minlist.pop()
        

    def top(self) -> int:
        return self.stk[-1]
        

    def getMin(self) -> int:
        return self.minlist[-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()