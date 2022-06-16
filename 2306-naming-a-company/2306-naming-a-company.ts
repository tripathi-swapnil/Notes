function distinctNames(ideas: string[]): number {
    const list = Array.from({ length: 26 }, () => new Set<string>());
    for(let item of ideas) {
        list[item.charCodeAt(0) - 97].add(item.substring(1));
    }
    
    let count = 0;
    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            const intersection = new Set([...list[i]].filter(element => list[j].has(element)));
            count += 2 * (list[i].size - intersection.size) * (list[j].size - intersection.size);
        }
    }
    return count;
}


function distinctNamesTLS(ideas: string[]): number {
    const obj1 = new Map();
    // let a = Array(26).fill([]).map(a => []);
    let count = 0;
    for(let st of ideas) {
        obj1.set(st, 1);
    }
    for(let i = 0; i < ideas.length; i++) {
        for(let j = 0; j < ideas.length; j++) {
            if(i === j) continue;
           // console.log(ideas[i], ideas[j])
            const st1 = ideas[i][0]+ideas[j].substring(1);
            const st2 = ideas[j][0]+ideas[i].substring(1);
            
            if(ideas[i][0] !== ideas[j][0] && !obj1.has(st1)  && !obj1.has(st2) ) {
               count++;
            }
        }
    }
    return count;

};


// ["coffee"]

// ["donuts"]

// ["time","toffee"]


// ["lack"]

// ["back"]