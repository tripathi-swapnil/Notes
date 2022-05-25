class MinStack {
    public minList: number[];
    public list: number[];
    constructor() {
      this.minList = [];
      this.list = [];
    }
    push(val: number): void {
      this.list.push(val);
      if (this.minList.length === 0 || this.minList[this.minList.length - 1] >= val) {
        this.minList.push(val);
      }
    }
    pop(): void {
      const val = this.list.pop();
      if (this.minList[this.minList.length - 1] === val) {
        this.minList.pop();
      }
    }
    top(): number {
      return this.list[this.list.length - 1];
    }
    getMin(): number {
      return this.minList[this.minList.length - 1];
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */