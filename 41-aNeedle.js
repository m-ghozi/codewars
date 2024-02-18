// A Needle in the Haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${i}`
    }
  }
}

const findNeedle = haystack => "found the needle at position " + haystack.indexOf("needle");

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
console.log(findNeedle(haystack_1));