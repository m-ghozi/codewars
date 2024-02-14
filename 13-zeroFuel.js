// Will you make it?
// https://www.codewars.com/kata/5861d28f124b35723e00005e

function zeroFuel(distanceToPump, mpg, fuelLeft) {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } return false;
}

const zeroFuel = (distanceToPump,mpg,fuelLeft) => mpg*fuelLeft >= distanceToPump;

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));