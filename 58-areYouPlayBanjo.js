// Are You Playing Banjo?
// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
  if (name[0] === 'R' || name[0] == 'r') {
    return name + " plays banjo";
  } return name + " does not play banjo"
}

console.log(areYouPlayingBanjo("Adam"))