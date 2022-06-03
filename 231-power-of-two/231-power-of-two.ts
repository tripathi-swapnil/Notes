function isPowerOfTwo(n: number): boolean {
     return 1 << Math.floor(Math.log(n) / Math.log(2)) === n
};