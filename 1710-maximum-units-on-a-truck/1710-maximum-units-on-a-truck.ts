function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes = boxTypes.sort(([b,s],[b1,s1]) => s1-s)
    let units = 0;
    //console.log(boxTypes);
    for(let [s, u] of boxTypes) {
        if(truckSize <= 0) return units;
        if(s > truckSize) {
            s = truckSize;
        }
       // console.log({s,u,truckSize, units})
        truckSize -= s;
        units += s*u;
    }
    return units;

};