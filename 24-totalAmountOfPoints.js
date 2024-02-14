// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let score = 0;
  for (i = 0; i < 10;i++) {
    const split = games[i].split(':')
    if (split[0]>split[1]) {
      score += 3
    } else if (split[0] === split[1]) {
      score += 1
    }
  }
  return score
}

function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

const points=games=>games.reduce((output,current)=>{
  return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
},0)

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]));