// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102


function makeNegative(num) {
  if (num > 0) return num - num * 2
  else return num + num * -2
}

function makeNegative(num) {
  return -Math.abs(num)
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}

makeNegative = n => -Math.abs(n)

console.log(makeNegative(10))