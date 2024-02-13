// Century From Year

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

// function century(year) {
//   if (year % 100 == 0) {
//     return (year / 100)
//   } else {
//     return (parseInt(year/100)+1)
//   }
// }

// const century = year => year % 100 === 0 ? year / 100 : parseInt(year/100)+1;

// function century(year) {
//   return (year + 99) / 100 | 0;
// }

const century = year => Math.ceil(year/100)

console.log(century(1900));
console.log(century(89));
console.log(century(1001));
console.log(century(2024));