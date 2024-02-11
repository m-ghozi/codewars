// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers){
  let temp = 0;
  for (i = 0; i< numbers.length;i++){
    temp += numbers[i] * numbers[i]
  }
  return temp
}

console.log(squareSum([1,2]));
console.log(squareSum([]));


