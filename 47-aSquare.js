// You're a square!
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e


var isSquare = function(n){
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))){
    return true
  } else {
    return false
  }
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));


console.log(isSquare(9));