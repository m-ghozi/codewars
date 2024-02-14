// Fake Binary
// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
  const split = x.split('');
  let result = [];
  for (i = 0; i < split.length;i++){
      split[i] < 5 ? result.push(0) : result.push(1);
  }
  return result.join('')
}

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

console.log(fakeBin('45385593107843568'));