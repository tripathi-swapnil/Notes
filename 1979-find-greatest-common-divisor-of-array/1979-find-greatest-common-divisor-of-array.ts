function findGCD(nums: number[]): number {
    nums = nums.sort((a,b) => a-b);
    
    return gcd(nums[0], nums[nums.length-1]);
};
function gcd( a,  b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}