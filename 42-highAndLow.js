// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  let result = numbers.split(" ").sort((a,b) => a-b)
  return result[result.length-1] + " " + result[0]
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));