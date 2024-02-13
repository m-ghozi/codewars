// countPositivesSumNegatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// function countPositivesSumNegatives(input) {
//   let finalR = [];
//   let result = 0;
//   let temp1 = [];
//   let temp2 = [];
//   for (i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       temp1.push(input[i]);
//     } else {
//       temp2.push(input[i]);
//     }
//   }
//   for (i = 0;i < temp2.length;i++) {
//     result += temp2[i]
//   }
//   finalR.push(temp1.length,result)
//   return finalR
// }

function countPositivesSumNegatives(input) {
  let result = [0,0];
  if (input === null || input.length === 0) return [];
  for (let i of input) {
    if (i > 0) {
      result[0]++ 
    } else {
      result[1] += i
    }
  }
  return result
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
