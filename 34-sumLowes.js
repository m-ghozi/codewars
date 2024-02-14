// Sum of two lowest positive integers
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a,b) => a-b)
  return (numbers[0]+numbers[1])
}

const sumTwoSmallestNumbers = numbers => numbers.sort((a,b) => a-b).reduce(() => numbers[0]+ numbers[1]);

function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));