// Sum without highest and lowest number
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if (array == null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b);
  let result = 0;
  for (i = 1; i < sorted.length-1; i++) {
    result += array[i]
  }
  return result
}

const sumArray = (array) =>
  array == null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);

console.log(sumArray([2, 3]));
console.log(sumArray([6, 2, 1, 8, 10]));
