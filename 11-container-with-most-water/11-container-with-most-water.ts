

function maxArea(height: number[]): number {
    return maxAreaInRange(height, 0, height.length -1);
};
function maxAreaInRange(height: number[], startIndex: number, endIndex: number) {
    if(startIndex >= endIndex) return 0;
    // const id = startIndex + '_' + endIndex;
    // if(cache[id]) return cache[id];
    const currentArea = (endIndex - startIndex) *Math.min(height[startIndex],height[endIndex]);
    const nextAssumendArea = height[startIndex] <= height[endIndex] ? maxAreaInRange(height, startIndex+1, endIndex) :  maxAreaInRange(height, startIndex, endIndex - 1)
    return Math.max(currentArea,nextAssumendArea) ;
    // return cache[id];
}

