class NumArray {
    arr = [];
    constructor(nums: number[]) {
        this.arr = nums;
    }

    sumRange(left: number, right: number): number {
        let s = 0;
        for(let i = left; i <= right; i++) {
            s += this.arr[i];
        }
        return s;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */