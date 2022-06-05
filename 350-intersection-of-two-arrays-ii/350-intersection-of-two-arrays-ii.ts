function intersect(nums1: number[], nums2: number[]): number[] {
    const map = new Map();
    const arr = [];
    for(let v of nums1) {
        if(map.has(v)) {
           map.set(v, map.get(v)+1);
            continue;
        }
        map.set(v, 1);
    }
   // console.log(map);
    
    for(let c of nums2) {
        if(map.has(c)) {
           arr.push(c);
          
           if(map.get(c) === 1) {
               map.delete(c);
               continue;
           }
          
            map.set(c, map.get(c)-1);
        }
        
        
    }
    //console.log(map, 'post')
    return arr;

};