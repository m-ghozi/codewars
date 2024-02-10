// Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps(sheep) {
//   let result = 0;
//   for (i = 0; i < sheep.length; i++){
//     if (sheep[i] === true) {
//       result += 1
//     }
//   }
//   return result
// }

const countSheeps = arrayOfSheeps =>  arrayOfSheeps.filter(Boolean).length;


console.log(countSheeps([undefined,null,false,true,true,false,null,undefined]))
console.log(countSheeps([undefined,null,false,true]))