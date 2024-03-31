// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083

function lovefunc(flower1, flower2){
  return (flower2 % 2 == 0) != (flower1 % 2 == 0)
}

console.log(lovefunc(0,0));