// Invert values
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
  let result = [];
  for (i = 0; i < array.length; i++) {
    result.push(array[i] * -1);
  }
  return result;
}

const invert = array => array.map((el) => -el)

console.log(invert([1, 2, 3, 4, 5]));
