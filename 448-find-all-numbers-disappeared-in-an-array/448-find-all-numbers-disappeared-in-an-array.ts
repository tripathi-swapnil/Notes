function findDisappearedNumbers(nums: number[]): number[] {
     const map = new Map();
      nums.forEach((num, i) => map.set(num, i));

      const result = [];
      for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) result.push(i);
      }
      return result;
    // const arr = [];
    // const nums = new Set(nums1);
    // for(let i = 1; i <= nums1.length; i++) {
    //     if(!nums.has(i)) arr.push(i);
    // }
    // return arr;
};