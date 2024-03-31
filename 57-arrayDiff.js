// Array.diff
// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  return a.filter(value => !b.includes(value));
}

function arrayDiff(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(a[i]);
    }
  }
  return result;
}

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2], [1]));
console.log(arrayDiff([1,2,3], [1,2]))