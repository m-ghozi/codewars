// sum array
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c

// function sum(numbers) {
//   let result = 0;
//   for (i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }

const sum = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};
console.log(sum([1, 5.2, 4, 0, -1]));
