// How good are you really?
// https://www.codewars.com/kata/5601409514fc93442500010b

function betterThanAverage(classPoints, yourPoints) {
  let average = 0
  for (let i = 0; i < classPoints.length; i++){
    average += classPoints[i]
  }
  average = average / classPoints.length
  return yourPoints > average
}

const betterThanAverage = (classPoints, yourPoints) => {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([2, 3], 5))