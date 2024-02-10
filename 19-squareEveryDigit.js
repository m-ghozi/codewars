// Square Every Digit
// https://www.codewars.com/kata/546e2562b03326a88e000020


const squareDigits = num => {
  const arr = num.toString().split('').map(Number)
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result += arr[i] * arr[i]
  }
  return parseInt(result)
}

// function squareDigits(num){
//   var string = num.toString();
//   var results = [];
//   for (var i = 0; i < string.length; i++){
//       results[i] = string[i] * string[i];
//   }
//   return Number(results.join(''));
// };

// function squareDigits(num){
//   return +num.toString().split('').map(i => i*i).join('');
// }

// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
// }

console.log(squareDigits(3212));
console.log(squareDigits(2112));