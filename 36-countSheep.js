// If you can't sleep, just count sheep!!
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
};

const countSheep = (num) =>[...Array(num)].map((_, i) => i + 1 + " sheep...").join("");

console.log(countSheep(0));
console.log(countSheep(2));
console.log(countSheep(3));
