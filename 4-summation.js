// Grasshopper - Summation
// https://www.codewars.com/kata/57f780909f7e8e3183000078

var summation = function (num) {
  let total = 0
  for (let i = 1;i <= num;i++) {
    total += i
  }
  return total
}

console.log(summation(3))