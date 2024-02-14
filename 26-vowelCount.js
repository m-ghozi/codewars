// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = str => {
    let output = str.match(/a|i|u|e|o/gi);
    return output != null ? output.length : 0;
}

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount("abracadabra"));
console.log(getCount("mypyx"));