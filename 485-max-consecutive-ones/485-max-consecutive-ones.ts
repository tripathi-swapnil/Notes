function findMaxConsecutiveOnes(nums: number[]): number {
    let counter = 0;
      return nums.reduce((acc, cur) => {
        counter = cur ? counter + 1 : 0;
        return Math.max(acc, counter);
      }, 0);

};