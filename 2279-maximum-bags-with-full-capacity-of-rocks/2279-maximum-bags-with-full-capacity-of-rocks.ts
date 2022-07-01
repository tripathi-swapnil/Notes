function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    let spaceLeft = [];
    let fullBags = 0;
    
    for(let i = 0; i < capacity.length; i++) {
        spaceLeft.push(capacity[i] - rocks[i]);
    }
    
    //console.log(spaceLeft);
    
    for(let space of spaceLeft.sort((a,b) => a-b)){
        
        if(additionalRocks <= 0 || additionalRocks < space) {
            continue;
        }
        fullBags++;
        if(space === 0) {
            continue;
        }
        additionalRocks -= space;
    }
    return fullBags;
    
};