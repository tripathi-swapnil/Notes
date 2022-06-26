function countAsterisks(s: string): number {
    let c = 0;
    const arr = s.split('|');
    //console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if(i%2 === 0) {
            //console.log(i);
           const a = arr[i].split('*');
           c += a.length - 1;
        }
    }
    return c;
};
// function countAsterisks(s: string): number {
//     let isPipe = false;
//     let c = 0;
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === '|') {
//             isPipe = !isPipe;
//         } else if(!isPipe && s[i] === '*') {
//             c++;
//         }
//     }
//     return c;
// };