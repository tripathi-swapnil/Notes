class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums = [str(v) for v in nums]
        nums.sort(key=cmp_to_key(lambda x, y: int(x+y)-int(y+x)), reverse=True)
        return ''.join(nums).lstrip('0') or '0'
    
        