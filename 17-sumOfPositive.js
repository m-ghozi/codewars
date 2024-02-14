// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  let result = 0;
  for (let i = 0;i < arr.length;i++){
    if(arr[i] > 0) {
      result += arr[i]
    }
  }
  return result;
}

function positiveSum(arr) {
  return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,-2,3,4,5]));