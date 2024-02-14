// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  let output = str.replace(/a|i|u|e|o/gi,'');
  return output
}

const disemvowel = str => str.replace(/a|i|u|e|o/gi,'');


console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("What are you, a communist?"));