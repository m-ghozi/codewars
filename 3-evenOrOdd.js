// Even or Odd number
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return 'Even'
  } return 'Odd'
}

const evenOrOdd = number => number % 2 ? "Odd" : "Even"

console.log(evenOrOdd(3))