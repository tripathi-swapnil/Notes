function divide(dividend: number, divisor: number): number {

const min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1;

if (dividend === min && divisor === -1) return max;

let dr = Math.abs(divisor), dd = Math.abs(dividend), quotient = 0;

while (dd >= dr) {
quotient++;
dd -= dr;
}



const multiplier = (divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0) ? -1 : 1;
return quotient * multiplier;
};
// function divide(dividend: number, divisor: number): number {
//     let remainder = 0;
    
//     const min = -Math.pow(2, 31), max = Math.pow(2, 31) - 1;

//     if (dividend === min && divisor === -1) return max;
    
//     const isDivNeg = (divisor > 0 && dividend < 0) || (divisor < 0 && dividend > 0) ? -1 : 1;
    
//    let divisor1 = Math.abs(divisor);
//     let dividend1 = Math.abs(dividend);
    
    
//     while(dividend1 >= divisor1) {
//           dividend1 -= divisor1;
//         remainder++;
//     }
//    // console.log(isDivNeg)
//     // if(-remainder === -2147483648 && isDivNeg){
//     //     remainder--;
//     // }
//     return remainder*isDivNeg;
// };
// 10
// 3
// -2147483648
// 1
// -2147483648
// -1
// -2147483647
// 1