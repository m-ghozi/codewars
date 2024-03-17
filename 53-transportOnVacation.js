// Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
  let cost = d * 40;
  if (d >= 3 && d < 7) {
    return cost - 20
  } else if (d >= 7) {
    return cost - 50
  } else {
    return cost
  }
}

const rentalCarCost = d => {
  return d >= 3 && d < 7 ? (d * 40) - 20 : d >= 7 ? (d * 40) - 50 : d * 40
}

console.log(rentalCarCost(4));
console.log(rentalCarCost(10));
